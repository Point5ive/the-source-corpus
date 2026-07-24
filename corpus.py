#!/usr/bin/env python3
"""
Source Corpus CLI — search, browse, and maintain the ancient-texts corpus.

Reader/browse:
  python3 corpus.py stats
  python3 corpus.py list [--category eastern]
  python3 corpus.py search "divine spark" [--max 10]
  python3 corpus.py read "tao te ching"

Maintenance (build the artifacts the web app ships):
  python3 corpus.py verify          # integrity: SHA256 drift, catalog/disk drift
  python3 corpus.py rebuild-catalog # regenerate CLEAN previews + catalog-summary.json
  python3 corpus.py build-index     # build search-index.json from CLEANED text
  python3 corpus.py build           # rebuild-catalog + build-index in one shot

Design note — cleaning is done ONCE, at build time, in memory, and only the
DERIVED artifacts (previews, search index) are built from cleaned text. The
source .txt files are never modified, so every SHA256 in catalog.json keeps
verifying the actual bytes served, and provenance to the original scrape is
preserved. `clean_text()` here is the canonical cleaner; index.html carries a
byte-compatible port for the reader body.
"""

from __future__ import annotations

import hashlib
import json
import os
import re
import sys
import argparse
from collections import defaultdict
from typing import Any, Iterable

CORPUS_ROOT = os.path.dirname(os.path.abspath(__file__))
CATALOG_PATH = os.path.join(CORPUS_ROOT, "catalog.json")
CATALOG_SUMMARY_PATH = os.path.join(CORPUS_ROOT, "catalog-summary.json")
SEARCH_INDEX_PATH = os.path.join(CORPUS_ROOT, "search-index.json")

PREVIEW_LEN = 220
MIN_DOC_FREQUENCY = 2  # a word must appear in >=2 texts to make the index

STOPWORDS: set[str] = set("""
the and of to a in is it that this for on with as was were be by an at or
which from his her their its they he she we you i not but if all any so
than then there here when where who whom whose what how why can could
would should will shall may might must do does did done have has had
also very more most such into out up down over under again further
these those am are been being other some no nor own too thou thee
thy ye unto shalt hath one upon
""".split())


# --------------------------------------------------------------------------- #
# Canonical text cleaner (mirrored in index.html's cleanText)
# --------------------------------------------------------------------------- #

_GUT_START = re.compile(
    r"\*\*\*\s*START OF (?:THIS |THE )?PROJECT GUTENBERG[^\n]*\*\*\*", re.IGNORECASE
)
_GUT_END = re.compile(
    r"\*\*\*\s*END OF (?:THIS |THE )?PROJECT GUTENBERG[^\n]*\*\*\*", re.IGNORECASE
)
# Some sources carry a plain-text footer with no *** fence.
_GUT_END_PLAIN = re.compile(
    r"\n[ \t]*End of (?:the |this )?Project Gutenberg[^\n]*", re.IGNORECASE
)
_HTML_COMMENT = re.compile(r"<!--.*?-->", re.DOTALL)
_HTML_TAG = re.compile(r"<[^>\n]{1,200}>")
_WIKI_TEMPLATE = re.compile(r"\{\{[^{}]*\}\}")
_WIKI_LINK_PIPED = re.compile(r"\[\[[^\]|]*\|([^\]]*)\]\]")
_WIKI_LINK_PLAIN = re.compile(r"\[\[([^\]]*)\]\]")
_WIKI_MAGIC = re.compile(r"__[A-Z]+__")
_WIKI_HEADING = re.compile(r"^=+\s*(.*?)\s*=+\s*$", re.MULTILINE)
_MANY_NEWLINES = re.compile(r"\n{3,}")


def clean_text(raw: str) -> str:
    """Strip Gutenberg boilerplate, HTML tags/comments, and MediaWiki markup so
    what remains is the text itself. Conservative and reversible — operates on a
    copy, never on disk. Kept byte-compatible with index.html's cleanText()."""
    text = raw

    m = _GUT_START.search(text)
    if m:
        text = text[m.end():]
    # Cut at the earliest Gutenberg end-marker, whether ***-fenced or plain-text
    # (some files carry a plain footer ahead of a later ***-fenced one).
    ends = [m.start() for m in (_GUT_END.search(text), _GUT_END_PLAIN.search(text)) if m]
    if ends:
        text = text[: min(ends)]

    text = _HTML_COMMENT.sub("", text)
    text = _HTML_TAG.sub("", text)
    # Iterate template removal until stable to clear nested {{a{{b}}c}} markup.
    for _ in range(6):
        new = _WIKI_TEMPLATE.sub("", text)
        if new == text:
            break
        text = new
    text = _WIKI_LINK_PIPED.sub(r"\1", text)
    text = _WIKI_LINK_PLAIN.sub(r"\1", text)
    text = _WIKI_MAGIC.sub("", text)
    text = _WIKI_HEADING.sub(r"\1", text)
    text = _MANY_NEWLINES.sub("\n\n", text)

    return text.strip()


def make_preview(cleaned: str, length: int = PREVIEW_LEN) -> str:
    """Single-line preview from cleaned text: collapse whitespace, clip to length
    on a word boundary."""
    flat = re.sub(r"\s+", " ", cleaned).strip()
    if len(flat) <= length:
        return flat
    clipped = flat[:length]
    sp = clipped.rfind(" ")
    if sp > length * 0.6:
        clipped = clipped[:sp]
    return clipped.rstrip() + "…"


def tokenize(text: str) -> list[str]:
    return re.findall(r"[a-z']+", text.lower())


# --------------------------------------------------------------------------- #
# I/O helpers
# --------------------------------------------------------------------------- #

def load_catalog() -> dict[str, Any]:
    with open(CATALOG_PATH, encoding="utf-8") as f:
        return json.load(f)


def read_text_file(path: str) -> str:
    with open(os.path.join(CORPUS_ROOT, path), encoding="utf-8", errors="ignore") as f:
        return f.read()


def sha256_of(path: str) -> str:
    with open(os.path.join(CORPUS_ROOT, path), "rb") as f:
        return hashlib.sha256(f.read()).hexdigest()


def write_json(path: str, obj: Any, *, compact: bool = True) -> None:
    with open(path, "w", encoding="utf-8") as f:
        if compact:
            json.dump(obj, f, separators=(",", ":"), ensure_ascii=False)
        else:
            json.dump(obj, f, indent=2, ensure_ascii=False)
            f.write("\n")


# --------------------------------------------------------------------------- #
# Read/browse commands
# --------------------------------------------------------------------------- #

def cmd_stats(catalog: dict[str, Any]) -> None:
    print("The Source Corpus")
    print(f"  Texts:  {catalog['total_texts']}")
    print(f"  Words:  {catalog['total_words']:,}")
    print(f"  Size:   {catalog['total_size_mb']} MB")
    print()
    for _cat, info in catalog["categories"].items():
        print(f"  {info['label']:<30} {info['count']:>3} texts")


def cmd_list(catalog: dict[str, Any], category: str | None = None) -> None:
    texts = catalog["texts"]
    if category:
        texts = [t for t in texts if t["category"] == category]
        if not texts:
            valid = ", ".join(sorted({t["category"] for t in catalog["texts"]}))
            print(f"No texts in category '{category}'. Valid: {valid}")
            return
    for t in texts:
        print(f"  {t['size_human']:>8}  {t['word_count']:>8,}  {t['title']}")


def cmd_search(catalog: dict[str, Any], query: str, max_results: int = 20) -> None:
    query = (query or "").strip()
    if not query:
        print("Empty query.")
        return
    if max_results < 1:
        max_results = 1

    query_lower = query.lower()
    results: list[tuple[int, dict[str, Any], str]] = []

    for t in catalog["texts"]:
        if query_lower in t["title"].lower():
            results.append((0, t, t["preview"][:200]))
        elif query_lower in t["preview"].lower():
            results.append((1, t, t["preview"][:200]))

    for t in catalog["texts"]:
        fp = os.path.join(CORPUS_ROOT, t["path"])
        if not os.path.exists(fp):
            continue
        try:
            content = read_text_file(t["path"])
        except OSError:
            continue
        idx = content.lower().find(query_lower)
        if idx != -1:
            start = max(0, idx - 80)
            end = min(len(content), idx + len(query) + 80)
            context = content[start:end].replace("\n", " ").strip()
            results.append((2, t, context))

    results.sort(key=lambda x: x[0])

    seen: set[str] = set()
    unique: list[tuple[int, dict[str, Any], str]] = []
    for priority, t, context in results:
        if t["id"] not in seen:
            seen.add(t["id"])
            unique.append((priority, t, context))

    shown = unique[:max_results]
    print(f'Search: "{query}"')
    print(f"Results: {len(shown)}")
    print()
    highlight = re.compile(f"({re.escape(query)})", re.IGNORECASE)
    for i, (priority, t, context) in enumerate(shown, 1):
        tag = {0: "TITLE", 1: "PREVIEW", 2: "FULLTEXT"}[priority]
        context_hl = highlight.sub("\033[36m\\1\033[0m", context)
        print(f"  {i:>2}. [{tag}] {t['title']}")
        print(f"      {context_hl}")
        print()


def cmd_read(catalog: dict[str, Any], query: str) -> None:
    query = (query or "").strip()
    if not query:
        print("Empty title query.")
        return

    query_lower = query.lower()
    matches = [t for t in catalog["texts"] if query_lower in t["title"].lower()]
    if not matches:
        print(f"No text found matching '{query}'")
        return
    if len(matches) > 1:
        print("Multiple matches:")
        for i, t in enumerate(matches, 1):
            print(f"  {i}. {t['title']}")
        print(f"\nReading first match: {matches[0]['title']}")

    t = matches[0]
    print(f"\n{'=' * 60}")
    print(f"  {t['title']}")
    print(f"  {t['tradition']} | {t['size_human']} | {t['word_count']:,} words")
    print(f"  SHA256: {t['sha256'][:16]}...")
    print(f"{'=' * 60}\n")
    try:
        print(read_text_file(t["path"]))
    except OSError as e:
        print(f"Could not read {t['path']}: {e}")


# --------------------------------------------------------------------------- #
# Maintenance commands
# --------------------------------------------------------------------------- #

def cmd_verify(catalog: dict[str, Any]) -> int:
    """Integrity sweep: SHA256 drift, missing files, catalog/disk drift, and
    common encoding hazards. Returns a process exit code (0 = clean)."""
    texts = catalog["texts"]
    problems = 0

    missing: list[str] = []
    hash_mismatch: list[str] = []
    encoding_hazard: list[str] = []
    html_content: list[str] = []
    cataloged_paths: set[str] = set()

    for t in texts:
        path = t["path"]
        cataloged_paths.add(os.path.normpath(path))
        fp = os.path.join(CORPUS_ROOT, path)
        if not os.path.exists(fp):
            missing.append(path)
            continue
        with open(fp, "rb") as f:
            raw = f.read()
        if hashlib.sha256(raw).hexdigest() != t.get("sha256"):
            hash_mismatch.append(path)
        if b"\x00" in raw:
            encoding_hazard.append(f"{path} (null byte)")
        elif raw.startswith(b"\xef\xbb\xbf"):
            encoding_hazard.append(f"{path} (UTF-8 BOM)")
        head = raw[:2000].lower()
        if b"<!doctype html" in head or b"<html" in head or b"internet archive: error" in head:
            html_content.append(f"{path} (\"{t['title']}\")")

    # Catalog entries whose files are not committed to git will 404 on the live
    # static host even though they exist on the maintainer's disk.
    untracked_cataloged: list[str] = []
    try:
        import subprocess

        tracked = set(
            subprocess.check_output(
                ["git", "ls-files"], cwd=CORPUS_ROOT, stderr=subprocess.DEVNULL
            )
            .decode()
            .split("\n")
        )
        for t in texts:
            if t["path"] not in tracked:
                untracked_cataloged.append(f"{t['path']} (\"{t['title']}\")")
    except (OSError, subprocess.CalledProcessError):
        pass  # not a git checkout; skip this check

    # Catalog counts vs reality
    count_ok = len(texts) == catalog.get("total_texts")
    cat_counts: dict[str, int] = defaultdict(int)
    for t in texts:
        cat_counts[t["category"]] += 1
    category_drift = [
        f"{cat}: catalog says {info['count']}, found {cat_counts.get(cat, 0)}"
        for cat, info in catalog.get("categories", {}).items()
        if info["count"] != cat_counts.get(cat, 0)
    ]

    # On-disk .txt files not in the catalog (orphans), ignoring nothing special —
    # git-ignored bulk dumps live in subdirs the catalog never references.
    catalog_dirs = {os.path.dirname(p) for p in cataloged_paths}
    orphans: list[str] = []
    for d in sorted(catalog_dirs):
        abs_d = os.path.join(CORPUS_ROOT, d)
        if not os.path.isdir(abs_d):
            continue
        for name in os.listdir(abs_d):
            if not name.endswith(".txt"):
                continue
            rel = os.path.normpath(os.path.join(d, name))
            if rel not in cataloged_paths:
                orphans.append(rel)

    def report(label: str, items: list[str]) -> None:
        nonlocal problems
        if items:
            problems += len(items)
            print(f"  [FAIL] {label}: {len(items)}")
            for it in items[:20]:
                print(f"           - {it}")
        else:
            print(f"  [ok]   {label}")

    print("Corpus integrity check")
    print(f"  texts in catalog: {len(texts)}")
    report("missing files", missing)
    report("SHA256 mismatches", hash_mismatch)
    report("encoding hazards (null/BOM)", encoding_hazard)
    report("HTML/error pages served as text", html_content)
    report("cataloged but untracked (404 on live host)", untracked_cataloged)
    report("uncataloged .txt files (orphans)", orphans)
    report("category count drift", category_drift)
    print(f"  [{'ok' if count_ok else 'FAIL'}]   total_texts matches catalog length")
    if not count_ok:
        problems += 1

    print()
    if problems == 0:
        print("PASS — corpus is consistent.")
        return 0
    print(f"FAIL — {problems} issue(s) found.")
    return 1


def _iter_cleaned(catalog: dict[str, Any]) -> Iterable[tuple[int, dict[str, Any], str]]:
    for idx, t in enumerate(catalog["texts"]):
        yield idx, t, clean_text(read_text_file(t["path"]))


def cmd_rebuild_catalog(catalog: dict[str, Any]) -> None:
    """Regenerate previews from CLEANED text (source files untouched) and emit a
    lean catalog-summary.json for fast first paint."""
    changed = 0
    for _idx, t, cleaned in _iter_cleaned(catalog):
        new_preview = make_preview(cleaned)
        if new_preview != t.get("preview"):
            changed += 1
        t["preview"] = new_preview

    write_json(CATALOG_PATH, catalog, compact=False)

    summary = {
        "name": catalog.get("name"),
        "total_texts": catalog.get("total_texts"),
        "total_words": catalog.get("total_words"),
        "total_size_mb": catalog.get("total_size_mb"),
        "categories": catalog.get("categories"),
        "texts": [
            {
                "id": t["id"],
                "title": t["title"],
                "category": t["category"],
                "tradition": t["tradition"],
                "path": t["path"],
                "size_human": t["size_human"],
                "word_count": t["word_count"],
            }
            for t in catalog["texts"]
        ],
    }
    write_json(CATALOG_SUMMARY_PATH, summary, compact=True)

    print(f"Wrote {CATALOG_PATH} ({changed} preview(s) refreshed)")
    print(f"Wrote {CATALOG_SUMMARY_PATH} ({os.path.getsize(CATALOG_SUMMARY_PATH)/1024:.0f} KB)")


def _tf_code(tf: int) -> int:
    """Log-quantize a raw term frequency into a small monotonic code (1..63).
    BM25 saturates tf anyway, so geometric buckets cost almost no ranking quality
    while keeping the JSON integers tiny. Reconstruct with tf ~= 2**(code-1)."""
    return min(63, tf.bit_length())  # bit_length(1)=1, (2..3)=2, (4..7)=3, ...


def cmd_build_index(catalog: dict[str, Any]) -> None:
    """Inverted index (v2) built from CLEANED text with per-posting quantized
    term frequency + per-doc length, enabling real BM25 ranking client-side.

    Postings are stored as a flat, delta-encoded array per term:
        index[word] = [doc0, code0, ddoc1, code1, ddoc2, code2, ...]
    where ddoc is the gap from the previous doc id (smaller ints -> better gzip)
    and code is the log-quantized tf. `doclen`/`avglen` drive length
    normalization. Source .txt files are never read raw here — cleaning first
    keeps scaffolding tokens out of the vocabulary and out of IDF."""
    tf_maps: dict[str, dict[int, int]] = defaultdict(dict)
    docs: list[str] = []
    doclen: list[int] = []

    for doc_idx, t, cleaned in _iter_cleaned(catalog):
        docs.append(t["id"])
        counts: dict[str, int] = defaultdict(int)
        n = 0
        for w in tokenize(cleaned):
            if len(w) > 2 and w not in STOPWORDS:
                counts[w] += 1
                n += 1
        doclen.append(n)
        for w, c in counts.items():
            tf_maps[w][doc_idx] = c

    index: dict[str, list[int]] = {}
    for w, docmap in tf_maps.items():
        if len(docmap) < MIN_DOC_FREQUENCY:
            continue
        flat: list[int] = []
        prev = 0
        for d in sorted(docmap):
            flat.append(d - prev)
            flat.append(_tf_code(docmap[d]))
            prev = d
        index[w] = flat

    avglen = sum(doclen) / len(doclen) if doclen else 0
    out = {
        "v": 2,
        "docs": docs,
        "doclen": doclen,
        "avglen": round(avglen, 1),
        "index": index,
    }
    write_json(SEARCH_INDEX_PATH, out, compact=True)

    size_mb = os.path.getsize(SEARCH_INDEX_PATH) / (1024 * 1024)
    print(f"Wrote {SEARCH_INDEX_PATH}")
    print(f"  {len(index):,} unique words, {len(docs)} docs, {size_mb:.2f} MB raw")


def cmd_build(catalog: dict[str, Any]) -> None:
    cmd_rebuild_catalog(catalog)
    # Reload so the index build sees refreshed catalog (previews don't affect it,
    # but keeps a single source of truth if fields ever cross-depend).
    cmd_build_index(load_catalog())


# --------------------------------------------------------------------------- #

def main() -> int:
    parser = argparse.ArgumentParser(
        description="The Source Corpus CLI — search, browse, and maintain the corpus.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    sub = parser.add_subparsers(dest="command", metavar="command")

    sub.add_parser("stats", help="Show corpus statistics")

    p_list = sub.add_parser("list", help="List texts (optionally by category)")
    p_list.add_argument("--category", "-c", help="Filter by category")

    p_search = sub.add_parser("search", help="Full-text search across all texts")
    p_search.add_argument("query", help="Search query")
    p_search.add_argument("--max", "-m", type=int, default=20, help="Max results")

    p_read = sub.add_parser("read", help="Read a text by (partial) title")
    p_read.add_argument("title", help="Text title, partial match")

    sub.add_parser("verify", help="Check corpus integrity (SHA256, drift, encoding)")
    sub.add_parser("rebuild-catalog", help="Regenerate clean previews + catalog-summary.json")
    sub.add_parser("build-index", help="Build search-index.json from cleaned text")
    sub.add_parser("build", help="rebuild-catalog + build-index")

    args = parser.parse_args()
    if not args.command:
        parser.print_help()
        return 0

    catalog = load_catalog()

    if args.command == "stats":
        cmd_stats(catalog)
    elif args.command == "list":
        cmd_list(catalog, args.category)
    elif args.command == "search":
        cmd_search(catalog, args.query, args.max)
    elif args.command == "read":
        cmd_read(catalog, args.title)
    elif args.command == "verify":
        return cmd_verify(catalog)
    elif args.command == "rebuild-catalog":
        cmd_rebuild_catalog(catalog)
    elif args.command == "build-index":
        cmd_build_index(catalog)
    elif args.command == "build":
        cmd_build(catalog)
    return 0


if __name__ == "__main__":
    sys.exit(main())
