# The Source Corpus — Full Audit Report
## July 24, 2026

**Project**: Static web reader + CLI for 159 ancient texts
**Local**: `/Users/twon/ancient-texts/`
**GitHub**: https://github.com/Point5ive/the-source-corpus
**Live**: https://ancient-texts-weld.vercel.app
**Stack**: Single `index.html` (vanilla JS, no deps), `corpus.py` (Python CLI), `catalog.json` (159 entries), 158 `.txt` files (77 MiB)

---

## Summary by Severity

| Severity | Count | Categories |
|----------|-------|------------|
| P0 | 0 | — |
| P1 | 9 | JS bugs, repo hygiene, search UX, SEO |
| P2 | 25 | Security, performance, accessibility, mobile, code quality, file integrity |
| P3 | 8 | Minor polish, CSS, Python style |

---

## P1 — Must Fix

### 1. JS Bug: `openReader` is not async but uses `await`
**File**: `index.html:347` — `function openReader(id)` contains `await fetch(...)` but is not declared `async`. This works in some browsers due to loose parsing but is technically invalid and may break in strict mode.

### 2. JS Bug: `filterCategory` uses global `event` 
**File**: `index.html:332` — `filterCategory(cat)` references `event.currentTarget` but `event` is not passed as parameter. Relies on the deprecated global `window.event`. Fails in Firefox strict mode.

### 3. Search only searches loaded texts
**File**: `index.html:430-460` — `doSearch()` only searches: (a) catalog titles/previews (fast), (b) textCache (only texts the user has already opened). Full-text search across the 77MB corpus is impossible from the browser without loading every file. This is the single biggest UX gap — users can't discover which texts contain their search term without opening them first.

### 4. .gitignore is fragile
**File**: `.gitignore:3-5,9` — Ignores `*.json`, `*.html`, `*.py`, `*.js` globally. `catalog.json`, `index.html`, `corpus.py` are force-tracked via `git add -f`. New contributors and CI can't stage changes to these files normally. `git add .` will skip them.

### 5. Binary file in corpus
**File**: `abrahamic/apocryphon-of-john.txt` — Contains 158 null bytes (positions 888–44284). Likely encoding corruption from source download. Text renders with gaps/missing characters.

### 6. BOM markers on 8 files
**Files**: `eastern/laws-of-manu.txt`, `eastern/mahabharata-core.txt`, `eastern/mencius.txt`, `eastern/zhuangzi.txt`, `mythology/epic-of-gilgamesh.txt`, and 3 others. UTF-8 BOM (EF BB BF) at file start. Renders as invisible character in some browsers, may break search matching.

### 7. No SEO meta tags
**File**: `index.html:5-7` — Has `<title>` and `<meta description>` but missing: Open Graph tags, Twitter Card tags, canonical URL, structured data (JSON-LD), favicon. Site won't preview properly when shared on social media.

### 8. No caching headers
No `vercel.json` — Vercel uses defaults. Text files (77MB total) are served without long-cache headers. Re-visits re-download everything. A `vercel.json` with `Cache-Control: public, max-age=31536000, immutable` for `.txt` files would fix this.

### 9. Wiki markup / Gutenberg boilerplate displayed raw
**File**: `index.html:398` — Reader uses `textContent = textCache[id]` which renders everything as-is. Wiki markup (`{{header}}`, `[[links]]`), Project Gutenberg headers/footers, and encoding artifacts display verbatim. Needs cleanup pass or display filtering.

---

## P2 — Should Fix

### Security
- `index.html:331` — `innerHTML` used for text card rendering. Content is escaped via `escapeHtml()` but the pattern is fragile. If catalog.json is ever served from an untrusted source, XSS is possible.
- `index.html:469` — Search results use `innerHTML` with `highlightText()` which calls `escapeHtml()` then regex-replaces. The escaping is correct but the pattern should use DOM APIs instead.
- `corpus.py` — No input validation on `search` and `read` commands. User-supplied query is used in regex without `re.escape()` in some paths.

### File Integrity
- `abrahamic/nag-hammadi-on-the-eucharist-b.txt` (451 bytes) — On disk but not in catalog.json. Too small (under 500B threshold). Should either be added or removed.
- `.vercel/README.txt` — Vercel artifact on disk, not gitignored.
- `manifest.json` (31KB) — Stale duplicate of catalog.json on disk but not tracked. Should be deleted.
- `abrahamic/nag-hammadi-README.md` — README from a different project, tracked in repo. Should be removed.
- `esoteric/download_zohar.py`, `esoteric/strip_html.py` — Build scripts tracked but not documented. Should be removed or documented.
- CRLF line endings mixed with LF across files — no `.gitattributes` to normalize.
- Some files misidentified by `file` as "Nim source code" (Pistis Sophia, Gnosis of the Light) — likely due to specific character patterns. Not a real problem but indicates non-standard content.

### Accessibility
- No ARIA labels on interactive elements (nav items, text cards, search input)
- Search result items use `onclick` on `<div>` — not keyboard accessible
- No skip-to-content link (WCAG 2.1 SC 2.4.1)
- `<main>` element lacks `id="main"` landmark. Sidebar not wrapped in `<nav>`
- Reader back button lacks `aria-label`
- No focus management when switching between browse/reader/search views

### Performance
- No `vercel.json` for caching headers
- catalog.json is 105KB — could be split or compressed with a smaller summary version for initial load
- No lazy loading for text cards (all 159 render at once)
- No service worker for offline access

### Mobile
- Sidebar has no toggle — on mobile it stacks above content, requiring long scroll
- No touch-friendly search clear button
- Text cards may be too dense on small screens

### Code Quality
- `index.html` — All JS inline in a single `<script>` tag. No separation of concerns.
- `corpus.py:78` — f-string with curly quotes caused syntax error (fixed but pattern is fragile)
- `corpus.py` — No type hints, no docstrings beyond module-level
- Unused CSS variable `--violet: #8b5cf6` defined but never referenced

### Repo Hygiene
- 444MB of untracked junk in working tree (`deuterocanonical/`, `enoch-repo/`, Tibetan HTML/PDF)
- `__pycache__/` not gitignored
- No `.editorconfig`
- No `.gitattributes`

---

## P3 — Nice to Have

- `<mark>` highlight color contrast may be insufficient on dark background
- No favicon (404 on /favicon.ico)
- No "back to top" button in reader view
- No keyboard shortcuts (e.g., `/` to focus search, `Esc` to close reader)
- No reading progress indicator in reader
- No text size adjustment in reader
- `corpus.py` — Could use `argparse` subcommand help text improvements
- No dark/light theme toggle (currently dark-only, which is intentional)

---

## What Works (Verified)

- **Page loads**: HTTP 200, catalog.json fetches in ~183ms, 159 text cards render
- **Search**: Title and preview matching works (tested "gnosis" → 2 results, "archon" → 5 results)
- **Reader view**: Full text loads and displays
- **Category filtering**: All 4 categories filter correctly
- **Dark mode**: Dark navy (#0a0e1a), cyan accent (#06b6d4), film grain overlay — matches design intent
- **Catalog integrity**: 159/159 SHA256 hashes verified, all catalog entries have matching files on disk
- **CLI**: corpus.py stats/list/search/read all functional
- **GitHub**: Repo public, 2 clean commits, no secrets
- **Vercel**: Production deployment live and serving all file types correctly
- **Responsive**: Layout adapts to mobile (single column) though sidebar UX needs work

---

## Recommended Fix Order for Claude Code

### Phase 1: Critical Fixes (P1)
1. Fix `openReader` to be `async function openReader(id)`
2. Fix `filterCategory` to accept event parameter
3. Add `vercel.json` with caching headers for .txt files
4. Fix .gitignore — remove broad patterns, use specific ignores
5. Clean binary file (apocryphon-of-john.txt) — strip null bytes
6. Strip BOM from 8 affected files
7. Add SEO meta tags (Open Graph, Twitter Card, favicon, JSON-LD)
8. Build a client-side search index (pre-generated Lunr.js or similar)
9. Add text cleanup for reader view (strip Gutenberg headers, wiki markup)

### Phase 2: Quality (P2)
10. Fix accessibility: ARIA labels, keyboard nav, skip link, nav wrapper
11. Remove tracked junk files (nag-hammadi-README.md, build scripts)
12. Add .gitattributes for line ending normalization
13. Add __pycache__ to .gitignore
14. Split catalog.json into summary (titles, categories) + full (with previews)
15. Add lazy loading for text cards (IntersectionObserver)
16. Add mobile sidebar toggle
17. Fix innerHTML patterns to use DOM APIs
18. Add input validation to corpus.py

### Phase 3: Polish (P3)
19. Add keyboard shortcuts
20. Add reading progress indicator
21. Add text size adjustment
22. Add search clear button
23. Add favicon
24. Remove unused --violet CSS variable
25. Add service worker for offline access

## 2026-08-07 integrity pass (Grok)
- Corpus Hermeticum replaced with Mead PD (was Finnish Flood 1884).
- Catalog: 155 → **166** texts; 13.3M → **14.25M** words; Abrahamic share 60% → **54.8%**.
- Added title-verified: Secret Doctrine v1, Art of War, Gospel of Buddha, Dhammapada Müller, Beowulf, Kalevala, Republic, Seneca Benefits, Nibelungenlied, Epictetus×2.
- Picatrix tagged quarantine (Greer/Warnock OCR copyright).
- New files untracked in git until principal commit (verify reports 404-on-host until tracked).
- Details: ~/research-discography/INTEGRITY-PASS-2026-08-07.md


## 2026-08-07 item-3 fills
- Kabbalah Unveiled (Mathers 1887) IA OCR
- Zend-Avesta Part 1 Darmesteter SBE4 IA OCR
- Picatrix Arabic Ghāyat OCR (IA picatrix-arabic)
- Secret Doctrine vols 2–4 (PG 54488/56880/61626)
- Latin Alfonso Picatrix OCR rejected (unusable garble)
- Catalog now 172 texts / 15.6M words; Abrahamic share 52.9%
