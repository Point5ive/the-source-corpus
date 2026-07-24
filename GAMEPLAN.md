# GAMEPLAN — The Source Corpus, Refinement Pass (Opus)

Written before touching code, per the handoff Step 0. This is an architecture
document, not a bug list. It argues about the *concepts* behind the frontend and
the data layer, decides where they have a ceiling, and lays out a phased,
independently-shippable plan to raise it. Bug fixes fall out of the phases; they
are not the point.

Baseline verified green before starting: `stats` correct, `search`/`read` work,
159/159 SHA256 match, page loads.

---

## Part 1 — What is structurally limiting, and why

### 1A. The data layer is the real leverage point, and it's inverted

The single most consequential design fact in this project is: **cleaning happens
client-side, at read time, on every load, and the derived artifacts are built
from the *dirty* source.** That one inversion causes three separate visible
defects:

1. **Dirty catalog previews.** 37 of 159 previews begin with `{{header | title =
   [[Bible (King James)|...]] ...}}` wiki scaffolding or Gutenberg boilerplate.
   The browse grid — the first thing a visitor sees — shows scrape artifacts, not
   text. The reader cleans this; the preview never does, because the preview was
   extracted from raw text at catalog-build time.
2. **A noisy search index.** `build-index` tokenizes raw text, so the inverted
   index contains `header`, `title`, `previous`, `chapter`, `verse`, `toc` and
   other MediaWiki template tokens as if they were corpus vocabulary. Every
   `{{verse|chapter=1|verse=1}}` inflates junk terms and pollutes IDF.
3. **Repeated client work.** 47 files carry Gutenberg headers/footers, 16 carry
   wiki markup; the browser re-runs the regex cleaner on up to 4 MB (Mahabharata)
   every time a reader opens, on the visitor's CPU.

The naive fix the handoff floats is "move cleaning to build time, replace the
`.txt` files, keep raw in `raw/`." I am **not** doing the file-replacement
version, and the reasoning matters:

- The SHA256 of the served file is a *product feature* here — it's printed in the
  reader and the project's identity is "159 texts, verified integrity." Rewriting
  all 159 hashes in one automated pass on a live public repo silently changes the
  integrity story the project sells.
- Replacing files means either committing ~77 MB of `raw/` duplicates (doubling
  the repo) or losing provenance. Provenance is *already* preserved for free: the
  original scrape is immutable in git history at the initial-import commit.

**The right architecture is: clean once, at build time, in memory, for the
derived artifacts only.** `corpus.py` grows a single canonical `clean_text()`;
the previews in `catalog.json` and the tokens in `search-index.json` are built
from its output; the raw `.txt` files stay untouched, so their SHA256 still
verifies the actual bytes on the wire and provenance is intact. The browser keeps
a *lightweight* cleaner only for the reader body (the raw file is what's fetched),
and that cleaner now shares its exact semantics with the Python one. Net effect:
clean previews, clean index, no hash churn, no repo bloat, integrity story
preserved. This crosses no constraint — `build-index` already established that
"a maintainer-run data build step" is part of this project.

### 1B. The catalog is monolithic

`catalog.json` (105 KB) loads in full before the first card paints, carrying
previews + 64-char SHA256 strings that first paint doesn't need. `vercel.json`
already *references* a `catalog-summary.json` in its cache rules, but the file
doesn't exist and nothing emits it. Split it: a lean summary (id/title/tradition/
category/size/word_count) drives first paint; the full catalog (previews, hashes)
loads in parallel/lazily for search excerpts and the reader meta line.

### 1C. The search index throws away relevance it could afford

The index is presence-only (`word -> [docIdx...]`) to hit a 2 MB budget, so
ranking is IDF-only: a text that says "archon" once ranks identically to the
Apocryphon of John. That was a reasonable call at 2 MB raw, but the on-the-wire
cost is ~0.5 MB gzipped, so there is headroom. Storing a **quantized term
frequency** per posting plus per-doc length unlocks real TF-IDF/BM25-lite ranking
and lets results show *the strongest* excerpt rather than the first. I'll build it
and measure; if it stays comfortably under ~1 MB gzipped I keep it.

### 1D. The frontend concept: browse model is fine, the code shape is not

Browsing 159 texts as a filtered grid is actually appropriate — it's a *library*,
not a graph of relationships, and a grid + tradition facet + search is the honest
IA. What has a ceiling is:

- **Rendering via `innerHTML` string-concat** — an entire class of escaping
  fragility for zero benefit. DOM APIs remove it outright.
- **One undifferentiated `<script>`** — no state/render/event separation, global
  functions wired through inline `onclick`. Unmaintainable at the size this is
  growing to. Restructure into IIFE modules *within the single file* (the
  single-`index.html` rule holds — see constraints).
- **The reader is a naive scroll blob.** This is where people spend time in 13 M
  words of dense archaic text, and it has none of: text-size control, reading
  progress, resume-where-you-left-off, a table of contents for the 900k-word
  Bibles, or search-within-the-current-text. This is the highest-value frontend
  work and it's almost entirely absent.
- **Accessibility is absent, not partial** — `onclick` on `<div>`s, no landmarks,
  no focus management across view switches, no keyboard model. This has to inform
  the component design, so it's folded into the restructure, not bolted on after.
- **Mobile is a stack, not a design** — sidebar dumps above content; no toggle.

---

## Part 2 — Phased plan (each phase independently shippable + verifiable)

Verification after every phase = the handoff protocol (`stats`, `search archon`,
`read "emerald tablet"`, full SHA256 sweep) **plus**, for any frontend change, a
headless Playwright load exercising browse → filter → search-deep-term → reader
with a console-error check.

- **Phase 2 — Data pipeline core (backend).** `clean_text()` in `corpus.py`;
  regenerate clean previews in `catalog.json` and a clean `search-index.json`
  from cleaned text (no source-file hash change); emit `catalog-summary.json`;
  add `corpus.py verify`; type hints + input validation + error handling; keep
  the browser cleaner semantically in sync.
- **Phase 3 — Search relevance (backend + minimal frontend).** Re-encode the
  index with quantized term frequency + doc lengths; frontend switches from
  IDF-only to TF-IDF ranking and picks the best excerpt.
- **Phase 4 — Repo hygiene.** `git rm` tracked scrape junk (nag-hammadi-README.md,
  download_zohar.py, strip_html.py); resolve the eucharist-b orphan; add
  `.gitattributes` that *freezes* `.txt` line endings (protects hashes) and
  normalizes code to LF; `__pycache__` already ignored — confirm.
- **Phase 5 — Frontend restructure.** IIFE module structure (state/render/events);
  DOM-API rendering replacing all `innerHTML`; consume `catalog-summary.json` for
  first paint; no behavior change users can see except it's faster and safer.
- **Phase 6 — Accessibility + interaction model.** Landmarks, skip link,
  keyboard-navigable cards/results (real `<button>`/`<a>`), focus management on
  view switches, live region for result counts, mobile sidebar toggle, keyboard
  shortcuts (`/`, `Esc`, `j`/`k`).
- **Phase 7 — Reader experience.** Reading-measure typography, text-size control,
  reading-progress bar, resume position + per-text bookmark via `localStorage`,
  auto table-of-contents for long structured texts, search-within-current-text.
- **Phase 8 — Offline + perf (stretch).** Service worker caching the app shell +
  on-demand texts for true offline reading; preload hint for the index. Static,
  no CDN, no tracking — within constraints.

Phases 2–4 are backend/data and low-UI-risk; 5–7 are the frontend arc and each
gets a browser check; 8 is a stretch.

---

## Part 3 — Constraint decisions & flagged proposals

**Hard constraints — all respected, none crossed:**
- Dark navy/cyan + film grain design language: refined and extended, never
  replaced. No light mode added (CLAUDE.md calls dark-only intentional; I agree —
  it's core to the "calm, cognitively dense" identity).
- No tracking/analytics/external CDN: the service worker in Phase 8 is
  first-party static caching, not a network dependency.
- Public-domain text / MIT tooling: unchanged.
- 159 texts, verified integrity: **source `.txt` files are never modified**, so
  all 159 SHA256 continue to verify the actual served bytes. The corpus stays at
  exactly 159 (see eucharist-b decision below).

**Soft constraints — how each is handled:**
- *"Single index.html, no build step, no framework, no npm."* **Kept, not
  crossed.** The frontend rethink (Part 1D) is entirely achievable with
  IIFE-structured vanilla JS inside the one file; nothing here wants a framework
  or bundler. The handoff's Track A itself treats single-`index.html` as firm.
  The only "build step" is `corpus.py` data commands, which already existed
  (`build-index`) and are maintainer-run, not a frontend build. **No flag needed.**
- *"Static-only, no server / no edge function."* **Kept.** Nothing in the plan
  needs an edge function; TF-IDF and search-within-text run fine client-side on
  the prebuilt index. **No flag needed.**

**FLAGGED for human decision (not implemented in this pass):**

- **FLAG 1 — 8 catalog entries are junk/duplicates; removing them drops the count
  below 159 (a hard constraint), so this is flagged, not done.** Phase 2's new
  `corpus.py verify` surfaced a data-integrity problem the original audit missed:
  several of the "159 texts" are not primary sources at all. Broken down:

  | Entry (title) | path | what it actually is |
  |---|---|---|
  | Ramayana Arch Gut | `eastern/ramayana-arch-gut.txt` | archive.org **"Internet Archive: Error" HTML page** |
  | Tibetan Arch5 | `eastern/tibetan-arch5.txt` | archive.org error HTML |
  | Tibetan Archive2 | `eastern/tibetan-archive2.txt` | archive.org error HTML **+ untracked in git → 404s on the live site right now** |
  | Egyptian Pyramid Texts | `mythology/egyptian-pyramid-texts.txt` | archive.org error HTML — **no valid copy exists; this title has never had real content** |
  | Tibetan Arch3 | `eastern/tibetan-arch3.txt` | raw OCR garbage ("ya he, Me e Pee iT") from a scan |
  | Ramayana Missing | `eastern/ramayana_missing.txt` | partial wiki canto-list, **untracked → 404s on live** |
  | Ramayana Wiki3 | `eastern/ramayana-wiki3.txt` | duplicate of the real `eastern/ramayana.txt` |
  | Code of Hammurabi (Wiki) | `mythology/hammurabi-wiki3.txt` | duplicate of the real `mythology/code-of-hammurabi.txt` |

  A real, clean version is already in the catalog for every one of these **except
  Egyptian Pyramid Texts** (its only file is the error page). So the live site
  currently: 404s on 2 texts, serves an "Internet Archive: Error" HTML page for 4
  more, and shows OCR gibberish for 1.

  **Recommendation:** remove all 8 junk entries → corpus becomes **151 genuine
  texts** with zero broken/duplicate/404 entries, and update the "159" number
  everywhere it's branded (`index.html` hero + stat + placeholder, `catalog.json`
  totals, `README.md`, `CLAUDE.md`). Optionally re-source a real *Egyptian Pyramid
  Texts* (Faulkner/Mercer translation is public domain) before or after, to land
  on a rounder number. **Not done in this pass** because it changes the flagship
  "159" — a hard constraint requiring sign-off. The moment you approve, it's a
  ~10-minute change: `git rm` the 8 files (the 2 untracked ones just get deleted),
  drop their catalog entries, `python3 corpus.py build`, update branding, verify.

- Aside from FLAG 1, **nothing else blocks the plan.** If Phase 3's index
  measurement comes back larger than ~1 MB gzipped, I'll *keep the presence-only
  index* rather than blow the size budget — a fallback within the plan, not a
  constraint crossing.

**Local decisions recorded (reversible, non-destructive, within constraints):**
- *eucharist-b orphan* (`abrahamic/nag-hammadi-on-the-eucharist-b.txt`, 451 B, on
  disk, untracked, not in catalog): a heavily-lacunose sub-500 B fragment that was
  deliberately below the corpus inclusion threshold. Adding it would make the
  count 160 and break the "159" brand number (a hard constraint); it's also not
  tracked in git. **Decision: remove the stray file** so `verify` reports zero
  catalog/disk drift and the corpus stays at exactly 159. Provenance is untouched
  (the file was never part of the corpus and remains in no commit that removes
  corpus content).
- *529 MB `abrahamic/deuterocanonical/` + 428 KB `enoch-repo/`*: already
  git-ignored, so not in the repo. **Decision: leave on disk, do not delete** —
  they're a plausible future ingestion source and deleting a user's local files is
  out of scope for a refinement pass. `verify` will ignore ignored paths.
