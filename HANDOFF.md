You are working on The Source Corpus — a static web reader + CLI for 159 ancient texts. Layer 1 of a consciousness infrastructure protocol.

## Context
- Project root: /Users/twon/ancient-texts/
- Live: https://ancient-texts-weld.vercel.app
- GitHub: https://github.com/Point5ive/the-source-corpus
- Stack: Single index.html (vanilla JS/CSS, NO deps, NO framework, NO build step), corpus.py (Python CLI), catalog.json (159 text metadata), 158 .txt files (77 MiB)
- Full audit in AUDIT.md. Read it first. CLAUDE.md has project context.

## Constraints (NON-NEGOTIABLE)
1. The web app MUST remain a single index.html file. No external JS/CSS files. No npm. No frameworks. No build step.
2. All text files are public domain. Tooling is MIT.
3. Do NOT change the design language: dark navy (#0a0e1a), cyan (#06b6d4), film grain overlay. Premium, calm, cognitively dense.
4. Do NOT add tracking, analytics, or external CDN dependencies.
5. Keep the Python CLI working. Run `python3 corpus.py stats` and `python3 corpus.py search "archon" -m 3` to verify after changes.

## Task: Fix all P1 and P2 issues from AUDIT.md, in order

### Phase 1: Critical (P1) — Do these first, verify each

1. **Fix openReader async bug**: Change `function openReader(id)` to `async function openReader(id)` in index.html
2. **Fix filterCategory event bug**: Pass `event` as parameter: `onclick="filterCategory('all', event)"` and update function signature to `filterCategory(cat, evt)`
3. **Add vercel.json**: Create vercel.json with caching headers. Text files: `Cache-Control: public, max-age=31536000, immutable`. HTML/JSON: `Cache-Control: public, max-age=3600`.
4. **Fix .gitignore**: Remove broad patterns (*.json, *.html, *.py, *.js). Instead ignore specific junk: deuterocanonical/, enoch-repo/, __pycache__/, .vercel/, manifest.json, *.wiki3.txt, etc. Ensure catalog.json, index.html, corpus.py, README.md, LICENSE, AUDIT.md, CLAUDE.md are NOT ignored.
5. **Clean binary file**: Strip null bytes from abrahamic/apocryphon-of-john.txt. Verify the text is still readable. Regenerate its SHA256 in catalog.json if needed.
6. **Strip BOM**: Remove UTF-8 BOM (EF BB BF) from: eastern/laws-of-manu.txt, eastern/mahabharata-core.txt, eastern/mencius.txt, eastern/zhuangzi.txt, mythology/epic-of-gilgamesh.txt, and any others with BOM.
7. **Add SEO meta tags**: Add to index.html <head>: Open Graph tags (og:title, og:description, og:type, og:url, og:image), Twitter Card tags, canonical URL, JSON-LD structured data for the corpus, and a simple SVG favicon (cyan circle on dark navy, matching the logo-mark).
8. **Build client-side search index**: The biggest UX gap. Create a pre-generated search index that allows full-text search across all 159 texts WITHOUT loading each file. Approach: generate a `search-index.json` file from corpus.py that contains word→file mappings (inverted index). Load it on page load. The index should be compact — map each word to a list of [text_id, frequency] pairs. Skip common stop words. Keep index under 2MB. Update corpus.py to generate it: `python3 corpus.py build-index`.
9. **Text cleanup for reader**: In the openReader function, after loading text, clean it: strip Project Gutenberg headers/footers (everything before "START OF THIS PROJECT" and after "END OF THIS PROJECT"), strip wiki markup ({{...}}, [[...]]), strip excessive blank lines. Do this as a post-processing step on the loaded text, NOT by modifying the source files.

### Phase 2: Quality (P2) — After Phase 1 is verified

10. **Accessibility**: Add ARIA labels to all interactive elements. Make text cards and search results keyboard-accessible (use <button> or add tabindex + keydown handler). Add a skip-to-content link. Wrap sidebar in <nav aria-label="Traditions">. Add aria-label to reader back button. Add focus management when switching views.
11. **Remove tracked junk**: `git rm` these files: abrahamic/nag-hammadi-README.md, esoteric/download_zohar.py, esoteric/strip_html.py. Add them to .gitignore.
12. **Add .gitattributes**: `* text=auto eol=lf` for line ending normalization.
13. **Split catalog.json**: Create a `catalog-summary.json` (titles, categories, sizes only — no previews, no SHA256) for fast initial page load. Keep full catalog.json for CLI. Update index.html to load the summary first, then lazy-load full catalog if needed.
14. **Lazy load text cards**: Use IntersectionObserver to only render text cards as they scroll into view. Currently all 159 render at once.
15. **Mobile sidebar toggle**: Add a hamburger/toggle button that shows/hides the sidebar on mobile. Currently it stacks above content requiring long scroll.
16. **Fix innerHTML patterns**: Replace innerHTML text card rendering with DOM API (createElement, textContent). Keep it vanilla JS.
17. **Input validation in corpus.py**: Add re.escape() to search query in regex paths. Validate read command input. Add proper error handling.

### Phase 3: Polish (P3) — If time permits

18. **Keyboard shortcuts**: `/` focuses search, `Esc` closes reader, `g` then `a` goes to all texts
19. **Reading progress**: Add a progress bar at top of reader content showing scroll position
20. **Search clear button**: Add an X button inside the search input
21. **Remove unused CSS**: Remove `--violet: #8b5cf6` if not used, or use it somewhere intentional
22. **Favicon**: Create an SVG favicon matching the logo-mark (cyan circle on dark navy)

## Verification Protocol
After EACH phase, run these checks:

```bash
# 1. CLI still works
python3 corpus.py stats
python3 corpus.py search "archon" -m 3
python3 corpus.py read "emerald tablet"

# 2. SHA256 integrity (if files were modified)
python3 -c "import json,hashlib; c=json.load(open('catalog.json')); [print(f'{t[\"title\"]}: {\"OK\" if hashlib.sha256(open(t[\"path\"],\"rb\").read()).hexdigest()==t[\"sha256\"] else \"MISMATCH\"}') for t in c['texts'][:10]]"

# 3. HTML is valid (check for syntax errors)
# 4. No console errors on page load
# 5. Search works (type a query, verify results)
# 6. Reader works (click a card, verify text loads)
# 7. Category filter works
# 8. Mobile layout works
```

## Architecture Decision: Search Index

The search index is the most important improvement. Here's the approach:

1. Add `build-index` subcommand to corpus.py that:
   - Reads all 158 .txt files
   - Tokenizes each file into words (lowercase, strip punctuation)
   - Removes stop words (the, and, of, to, a, in, is, it, etc.)
   - Builds an inverted index: {word: [{text_id, frequency}]}
   - Also includes a forward index: {text_id: {word: frequency}} for relevance scoring
   - Writes to search-index.json, compressed
   - Target size: under 2MB

2. Update index.html to:
   - Load search-index.json on page start (alongside catalog)
   - When user searches, look up the query word(s) in the inverted index
   - Score results by TF-IDF (term frequency × inverse document frequency)
   - Show results with context snippets (fetch the matching text file and extract context)
   - This enables instant full-text search across all 159 texts

3. The index should be regenerated whenever texts are added/changed:
   `python3 corpus.py build-index`

## Git Workflow
- Make commits for each phase: "Phase 1: Critical fixes" then "Phase 2: Quality improvements" then "Phase 3: Polish"
- Push to origin/main after each phase
- Do NOT force push

## What NOT to Do
- Do NOT add npm, package.json, or any Node.js dependency
- Do NOT add React, Vue, or any framework
- Do NOT split index.html into multiple files
- Do NOT add external CDN links
- Do NOT add analytics or tracking
- Do NOT change the color scheme or design language
- Do NOT modify the .txt source files (except for BOM/null byte cleanup in Phase 1)
- Do NOT add TypeScript or any transpilation step
