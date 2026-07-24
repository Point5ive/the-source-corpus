#!/usr/bin/env python3
"""
Source Corpus CLI — search and browse the ancient texts from terminal.
Usage:
  python3 corpus.py search "divine spark"
  python3 corpus.py list
  python3 corpus.py list --category eastern
  python3 corpus.py read "tao te ching"
  python3 corpus.py stats
"""

import sys, os, json, re, argparse
from collections import defaultdict

CORPUS_ROOT = os.path.dirname(os.path.abspath(__file__))
CATALOG_PATH = os.path.join(CORPUS_ROOT, "catalog.json")
SEARCH_INDEX_PATH = os.path.join(CORPUS_ROOT, "search-index.json")

STOPWORDS = set("""
the and of to a in is it that this for on with as was were be by an at or
which from his her their its they he she we you i not but if all any so
than then there here when where who whom whose what how why can could
would should will shall may might must do does did done have has had
also very more most such into out up down over under again further
these those am are been being other some no nor own too thou thee
thy ye unto shalt hath one upon
""".split())

def load_catalog():
    with open(CATALOG_PATH) as f:
        return json.load(f)

def cmd_stats(catalog):
    print(f"The Source Corpus")
    print(f"  Texts:  {catalog['total_texts']}")
    print(f"  Words:  {catalog['total_words']:,}")
    print(f"  Size:   {catalog['total_size_mb']} MB")
    print()
    for cat, info in catalog['categories'].items():
        print(f"  {info['label']:<30} {info['count']:>3} texts")

def cmd_list(catalog, category=None):
    texts = catalog['texts']
    if category:
        texts = [t for t in texts if t['category'] == category]
    for t in texts:
        print(f"  {t['size_human']:>8}  {t['word_count']:>8,}  {t['title']}")

def cmd_search(catalog, query, max_results=20):
    query_lower = query.lower()
    results = []
    
    for t in catalog['texts']:
        # Title match (highest priority)
        if query_lower in t['title'].lower():
            results.append((0, t, t['preview'][:200]))
            continue
        # Preview match
        if query_lower in t['preview'].lower():
            results.append((1, t, t['preview'][:200]))
    
    # Full-text search
    for t in catalog['texts']:
        fp = os.path.join(CORPUS_ROOT, t['path'])
        if not os.path.exists(fp):
            continue
        try:
            with open(fp, 'r', errors='ignore') as f:
                content = f.read()
            idx = content.lower().find(query_lower)
            if idx != -1:
                start = max(0, idx - 80)
                end = min(len(content), idx + len(query) + 80)
                context = content[start:end].replace('\n', ' ').strip()
                results.append((2, t, context))
        except:
            continue
    
    # Sort by priority
    results.sort(key=lambda x: x[0])
    
    # Deduplicate
    seen = set()
    unique = []
    for priority, t, context in results:
        if t['id'] not in seen:
            seen.add(t['id'])
            unique.append((priority, t, context))
    
    print(f'Search: "{query}"')
    print(f"Results: {len(unique[:max_results])}")
    print()
    for i, (priority, t, context) in enumerate(unique[:max_results], 1):
        tag = {0: 'TITLE', 1: 'PREVIEW', 2: 'FULLTEXT'}[priority]
        # Highlight query in context
        context_highlighted = re.sub(
            f'({re.escape(query)})', 
            f'\033[36m\\1\033[0m', 
            context, 
            flags=re.IGNORECASE
        )
        print(f"  {i:>2}. [{tag}] {t['title']}")
        print(f"      {context_highlighted}")
        print()

def cmd_read(catalog, query):
    # Find text by title match
    query_lower = query.lower()
    matches = [t for t in catalog['texts'] if query_lower in t['title'].lower()]
    
    if not matches:
        print(f"No text found matching '{query}'")
        return
    
    if len(matches) > 1:
        print(f"Multiple matches:")
        for i, t in enumerate(matches, 1):
            print(f"  {i}. {t['title']}")
        print(f"\nReading first match: {matches[0]['title']}")
    
    t = matches[0]
    fp = os.path.join(CORPUS_ROOT, t['path'])
    print(f"\n{'='*60}")
    print(f"  {t['title']}")
    print(f"  {t['tradition']} | {t['size_human']} | {t['word_count']:,} words")
    print(f"  SHA256: {t['sha256'][:16]}...")
    print(f"{'='*60}\n")
    
    with open(fp, 'r', errors='ignore') as f:
        print(f.read())

def tokenize(text):
    return re.findall(r"[a-z']+", text.lower())

MIN_DOC_FREQUENCY = 2  # a word must appear in >=2 texts to make the index — see note below

def cmd_build_index(catalog):
    doc_sets = defaultdict(set)
    docs = []

    for doc_idx, t in enumerate(catalog['texts']):
        docs.append(t['id'])
        fp = os.path.join(CORPUS_ROOT, t['path'])
        with open(fp, 'r', errors='ignore') as f:
            content = f.read()

        for w in tokenize(content):
            if len(w) > 2 and w not in STOPWORDS:
                doc_sets[w].add(doc_idx)

    # Full per-doc term frequency (for real TF-IDF) makes the index ~6MB —
    # far past the 2MB budget for a corpus this size. Storing presence only
    # (which texts contain the word, not how often) keeps the index small
    # while still answering the question the search bar exists to answer:
    # "which of these 159 texts mention this term?". Words confined to a
    # single text (typos, OCR noise, one-off proper nouns) are dropped —
    # they're findable via title/preview search or in-reader browser find.
    inverted = {w: sorted(ds) for w, ds in doc_sets.items() if len(ds) >= MIN_DOC_FREQUENCY}

    out = {
        "docs": docs,
        "index": inverted,
    }
    with open(SEARCH_INDEX_PATH, 'w') as f:
        json.dump(out, f, separators=(',', ':'), ensure_ascii=False)

    size_mb = os.path.getsize(SEARCH_INDEX_PATH) / (1024 * 1024)
    print(f"Wrote {SEARCH_INDEX_PATH}")
    print(f"  {len(inverted):,} unique words, {len(docs)} docs, {size_mb:.2f} MB")

def main():
    parser = argparse.ArgumentParser(description='The Source Corpus CLI')
    subparsers = parser.add_subparsers(dest='command')
    
    p_stats = subparsers.add_parser('stats', help='Show corpus statistics')
    
    p_list = subparsers.add_parser('list', help='List all texts')
    p_list.add_argument('--category', '-c', help='Filter by category')
    
    p_search = subparsers.add_parser('search', help='Search across all texts')
    p_search.add_argument('query', help='Search query')
    p_search.add_argument('--max', '-m', type=int, default=20, help='Max results')
    
    p_read = subparsers.add_parser('read', help='Read a text by title')
    p_read.add_argument('title', help='Text title (partial match)')

    p_build_index = subparsers.add_parser('build-index', help='Build the client-side search index')

    args = parser.parse_args()
    catalog = load_catalog()
    
    if args.command == 'stats':
        cmd_stats(catalog)
    elif args.command == 'list':
        cmd_list(catalog, args.category)
    elif args.command == 'search':
        cmd_search(catalog, args.query, args.max)
    elif args.command == 'read':
        cmd_read(catalog, args.title)
    elif args.command == 'build-index':
        cmd_build_index(catalog)
    else:
        parser.print_help()

if __name__ == '__main__':
    main()
