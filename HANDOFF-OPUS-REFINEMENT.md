You are doing a maximal-effort refinement pass on The Source Corpus — not a checklist pass. Phase 1 (bug fixes, caching, file integrity, SEO, a client-side search index, reader text cleanup) is already done and committed. This handoff is not "finish the audit." It's: think from first principles about whether the current frontend and backend/data concepts are actually the best ones for what this project is trying to be, then build the better version. Go deep. Question defaults. Don't just patch — redesign where redesign earns its cost.

## What This Is

A static web reader + CLI for 159 primary texts (13M words) spanning every major world tradition — Abrahamic, Eastern, Esoteric, Mythology. No summaries, no commentary, the actual texts. Public domain content, MIT-licensed tooling.

- Live: https://ancient-texts-weld.vercel.app
- GitHub: https://github.com/Point5ive/the-source-corpus
- Local: /Users/twon/ancient-texts/
- Full history: AUDIT.md (original audit), HANDOFF.md (Phase 1 plan, now executed), git log

## Current State (post Phase 1)

- `index.html` — single-file vanilla JS/CSS app. Dark navy/cyan design. Catalog browse, category filter, reader, search.
- `corpus.py` — CLI (`stats`, `list`, `search`, `read`, `build-index`).
- `catalog.json` — metadata for 159 texts (title, tradition, category, word count, SHA256, preview).
- `search-index.json` — inverted index (word → texts containing it, min doc-frequency 2, ~57k words, 2.28MB raw / ~0.5MB gzipped) built by `corpus.py build-index`. Presence-only (no per-doc term frequency) — that trade was made to hit a size budget. Revisit whether that's still the right trade once you've reconsidered the whole search architecture.
- `vercel.json` — long-cache immutable headers for `.txt`, short cache for html/json.
- 158 `.txt` source files, 77MB, across `abrahamic/`, `eastern/`, `esoteric/`, `mythology/`.
- Text cleanup (Gutenberg boilerplate, wiki markup `{{...}}`/`[[...]]`) happens at read-time in the browser, not at build time. Runs on every load, on the client's dime.

## What Was NOT Touched — Real Remaining Gaps (floor, not ceiling)

From AUDIT.md, still open:

**Security/correctness**
- `innerHTML` still used for text-card and search-result rendering (escaped, but fragile — a DOM API rewrite removes the class of bug entirely)
- `corpus.py` search/read commands have no input validation on user-supplied query

**File integrity / repo hygiene**
- `abrahamic/nag-hammadi-on-the-eucharist-b.txt` (451B) on disk, not in catalog — orphaned or should be added
- `manifest.json` — stale duplicate of catalog.json, untracked, should just be deleted
- `abrahamic/nag-hammadi-README.md`, `esoteric/download_zohar.py`, `esoteric/strip_html.py` — tracked junk from the original scrape, need `git rm`
- No `.gitattributes` — CRLF/LF mixed across files
- 444MB of untracked junk still sitting in the working tree (`deuterocanonical/`, `enoch-repo/`, Tibetan HTML/PDF dumps) — decide: delete it, or is any of it actually a future ingestion source worth keeping outside the repo?

**Accessibility** — no ARIA labels, no keyboard nav on cards/results, no skip link, no focus management across view switches, sidebar not a `<nav>` landmark

**Performance** — catalog.json is 105KB and loads in full up front; no lazy rendering of the 159 cards; no service worker/offline story

**Mobile** — sidebar has no collapse/toggle, just stacks and pushes content down

**Code quality** — everything in one `<script>` tag with no internal structure; `corpus.py` has no type hints; dead `--violet` CSS variable

**Polish** — no keyboard shortcuts, no reading progress indicator, no text-size control, `<mark>` contrast on dark bg unverified, no light-mode option (may be intentional — the CLAUDE.md constraint calls dark-only "intentional," confirm that's still true or argue against it)

Treat this list as things that must at minimum get fixed. The actual mandate is bigger than this list.

## The Actual Task

### Step 0 — Write the game plan first, then execute it

Before touching code: produce a short architecture document (can live in this repo, e.g. `GAMEPLAN.md`) covering:
1. What's structurally wrong or limiting about the current frontend concept, and why — not "missing ARIA labels" (that's a bug), but "the information architecture / interaction model / rendering strategy has a ceiling and here's what's above it."
2. Same for the backend/data concept: catalog structure, indexing strategy, build pipeline, text-cleaning approach, deployment/caching model.
3. A concrete, phased plan to close the gap, with each phase independently shippable and verifiable.
4. Explicitly flag anything that would require crossing a constraint below — don't silently violate them, and don't silently avoid a good idea because of them either. Argue for the change if it's worth it.

Then execute the plan phase by phase, verifying after each phase (see Verification Protocol below), committing after each phase.

### Track A — Frontend concept & optimization

This is not "add the missing ARIA tags." Rethink:
- **Rendering model**: 159 DOM-heavy cards built via `innerHTML` string concat, all at once, is the naive version. Is virtualization/lazy-render right, or is there a better information architecture entirely (e.g. does browsing 159 texts by tradition even scale as a grid, or does it want a different browse paradigm — list + filters, a map/graph of traditions, something else)? Justify whatever you land on.
- **Search UX**: the search index gets you presence-matching across all 159 texts. Is ranking good enough? Should there be phrase search, fuzzy match for archaic spellings/transliterations, faceted search (by tradition, by era), search-within-current-text? Should results show more than one excerpt per text if a term appears many times?
- **Reader experience**: this is where people actually spend time reading 13M words of dense archaic text. What does a genuinely good long-form reading experience look like here — typography, line length, scroll vs paginated, annotations/highlights (localStorage-backed?), bookmark/resume position, table of contents for long texts (Mahabharata is 4MB/670k words — is "one giant scrolling blob" actually the right reader for that)?
- **Mobile**: not just "add a hamburger" — is the whole layout mobile-first-worthy given how much of the value is long-form reading, which people do on phones constantly?
- **Accessibility**: not a checklist bolt-on — should inform the component/interaction design from the start (keyboard-navigable cards, focus management, live regions for search result counts, etc.)
- **Code structure**: single `index.html` is a hard constraint (see below) but that doesn't mean one undifferentiated script tag. Structure the JS internally — modules-via-IIFE, clear state/render/event separation, whatever keeps a single-file app maintainable at this size.

### Track B — Backend/data concept & optimization

There's no server, but there is a real backend: the data pipeline (corpus.py), the artifacts it produces (catalog.json, search-index.json), and the deployment/caching layer (vercel.json). Rethink:
- **Text cleaning**: currently happens client-side, every read, via regex in the browser (Gutenberg boilerplate, wiki markup). Should this instead be a build-time `corpus.py clean-corpus` step that produces cleaned files once (with SHA256/catalog updated), so the client ships less JS and does less work, and the source-of-truth text is actually clean? If so, decide: keep raw originals somewhere (a `raw/` directory, a separate branch, whatever) so provenance isn't lost, since these are public-domain primary sources and traceability to the original scrape matters.
- **Search index architecture**: current index trades away per-document term frequency to hit a 2MB budget, so ranking is IDF-only (rarity-weighted presence, not true TF-IDF). Is that still the right trade, or is there a smarter encoding (e.g., bucketed/quantized frequency, delta-encoded doc-id arrays, splitting the index by category so only the relevant shard loads, WASM-based full-text search, or just accepting a larger index now that gzip gets it to ~0.5MB on the wire anyway) that gets you real relevance ranking within budget?
- **Catalog structure**: 105KB catalog.json loads in full before anything renders. Worth splitting into a lean `catalog-summary.json` (id/title/tradition/category/size only) for first paint, lazy-loading full previews/SHA256 on demand?
- **CLI**: corpus.py has no input validation, no type hints, minimal error handling. Also — does the CLI need new capabilities given whatever the frontend ends up needing (e.g. a `verify` command that checks all SHA256s and reports drift, a `clean-corpus` command per above, an `add-text` command for future ingestion)?
- **Data integrity pipeline**: is there a systematic way to guard against corpus regressions (encoding issues, boilerplate creep, catalog/file drift) going forward, not just a one-time cleanup? A `corpus.py verify` that CI or a pre-commit hook could run?
- **Deployment/caching**: vercel.json handles the basics. Is there more headroom — Brotli-friendly formatting of the JSON artifacts, a service worker for true offline reading, HTTP/2 push or preload hints for the search index on first load?

## Constraints — some hard, some worth arguing with

**Hard (do not cross without flagging to the user first and getting explicit sign-off — these define what this project visually and philosophically is):**
- Dark navy (#0a0e1a) / cyan (#06b6d4) design language, film grain texture — "premium, calm, cognitively dense," ADHD-friendly. Refine and extend it, don't replace it.
- No tracking, no analytics, no external CDN dependencies.
- All text content stays public domain; tooling stays MIT.
- 159 texts, verified integrity (SHA256) — never silently corrupt or lose source content.

**Soft (question these if the redesign genuinely benefits — but each one was a deliberate original choice, so don't cross it casually; write the tradeoff into GAMEPLAN.md and flag it to the user before committing to a direction that crosses it):**
- "Single index.html, no build step, no framework, no npm." This was the original minimalism ethos. If the frontend rethink in Track A genuinely wants component structure, a lightweight bundler, or even a minimal framework to do the reading/search experience justice — make the case in the game plan rather than either (a) silently blowing past the constraint or (b) silently under-building because of it.
- Static-only, no server. If a genuinely better search or reading experience needs an edge function (Vercel supports this natively) — same deal, make the case first.

## Verification Protocol (run after every phase)

```bash
python3 corpus.py stats
python3 corpus.py search "archon" -m 5
python3 corpus.py read "emerald tablet"
python3 -c "import json,hashlib; c=json.load(open('catalog.json')); mism=[t['path'] for t in c['texts'] if hashlib.sha256(open(t['path'],'rb').read()).hexdigest()!=t['sha256']]; print('SHA256 mismatches:', mism or 'none')"
```

Plus, for any frontend change: actually load the app in a browser (headless is fine — Playwright is available) and exercise the golden path — browse, filter, search a term that only appears deep in one text, open the reader, verify no console errors — before calling a phase done. Don't rely on "the code looks right."

## Process

- Commit after each phase with a message that states what changed and why, same style as the Phase 1 commit (`git log -1` to see the format).
- Do NOT force-push. Do NOT push to origin/main without asking first — this is a public repo with a live production deployment; surface the diff and get a go-ahead before `git push` or `vercel --prod`.
- If GAMEPLAN.md proposes crossing a soft constraint, stop and ask before implementing that specific piece — everything else in the plan can proceed.
