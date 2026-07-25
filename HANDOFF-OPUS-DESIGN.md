You are doing a maximal-effort DESIGN pass on The Source Corpus. This is not a bug-fix pass and not a logic/architecture pass — both of those already happened (see git log: Phases 1–8 hardened the code, the data pipeline, search ranking, accessibility scaffolding, and a working reader). Your mandate is narrower and deeper: **the whole visual design, layout, spatial system, typographic system, motion, and information architecture — as a coherent designed object.** Make it feel like it was art-directed by someone with taste, not assembled from features. Push it 10x. Then build it.

Read this whole file, then read GAMEPLAN.md (the prior pass's architecture rationale — respect the decisions it justified, don't silently re-litigate them) before writing a line.

## What this is

A static, single-file web reader + CLI for 151 primary religious/wisdom/mythological texts (~12.9M words) — Abrahamic, Eastern, Esoteric, Mythology. The actual public-domain texts, no commentary. The identity is: **"Humanity's wisdom, unmediated."** Premium, calm, cognitively dense, ADHD-friendly. It is a *library and a reading instrument*, not a content site — that framing should drive every design decision.

- Live: https://ancient-texts-weld.vercel.app
- Local: /Users/twon/ancient-texts/  (git repo, branch main, in sync with origin, clean tree)
- The app is a single `index.html` (~1050 lines: inline `<style>`, semantic body, inline `<script>` in IIFE modules). `favicon.svg` is the mark. `corpus.py` builds the data artifacts. Do not touch corpus.py's logic or the `.txt` source files.

## Current design state (be precise about what exists before you change it)

Design tokens (`:root` in index.html): `--bg:#0a0e1a` (near-black navy), `--bg-card:#111729`, `--bg-hover:#1a2138`, `--text:#e2e8f0`, `--text-dim:#94a3b8`, `--text-faint:#64748b`, `--accent:#06b6d4` (cyan), `--accent-dim:#0e7490`, `--accent-soft:rgba(6,182,212,0.14)`, `--border:#1e293b`. UI font is the system sans stack; the reader body uses a serif stack (`Iowan Old Style, Palatino, Georgia…`) at `--reader-size:17px`. A full-viewport SVG film-grain overlay sits at `opacity:0.015`.

Layout as it stands:
- **Header** (sticky, blurred): hamburger (mobile) · logo mark+wordmark · search input (grows) · a 3-up stat readout (texts/words/traditions).
- **Hero**: an h1 ("Humanity's wisdom, *unmediated*") + one paragraph. Shows on browse, hidden in reader/search.
- **Body**: a 240px `<nav>` sidebar of Traditions (with counts) + a `<main>` holding three mutually-exclusive views — a `text-grid` of cards (`repeat(auto-fill, minmax(340px,1fr))`), a `reader` view, and a `search-results` view.
- **Reader**: progress bar, a toolbar (back · Find · A−/A+ text-size), title, meta line, a two-column `reader-layout` (auto-generated TOC aside + serif reading column), scroll-resume, find-within-text.
- **Mobile**: sidebar becomes an off-canvas drawer behind a backdrop.
- Motion is minimal (0.15–0.2s color/background transitions, a hover accent bar on cards). Dark-mode only (deliberate).

It *works* and it's clean. Your job is to take it from "clean competent dark dashboard" to "a designed reading instrument someone screenshots." Assume nothing about the current look is sacred except the four hard constraints below.

## The actual task

### Step 0 — Design audit + direction doc first (DESIGN.md), then build

Before editing index.html, write `DESIGN.md`:
1. **Honest critique of the current design** — where it reads as generic/templated, where the hierarchy is flat, where the type system is unconsidered, where spacing is arbitrary rather than on a scale, where the grid-of-cards fails to convey that these are *sacred/ancient primary sources* rather than blog posts. Be specific and a little ruthless.
2. **A stated art direction** — the *idea* behind the look, in a sentence or two, that everything else serves. ("Calm, cognitively dense, unmediated" is the brief; your job is to translate it into a concrete visual thesis — reference points, mood, the feeling of opening one of these texts.) Name the emotional target.
3. **The systems** you'll impose: a real **spacing/size scale** (not one-off px), a **typographic system** (families, the type scale, measure, leading, tracking, how UI-sans and reading-serif relate, how you signal "this is an ancient text" typographically), a **color/elevation system** (the navy/cyan can stay but should be *developed* — tonal depth, restrained accent use, how traditions might get subtle differentiation without turning into a rainbow), and a **motion language** (what moves, why, how fast, easing — in service of calm, never decoration).
4. **Layout / IA proposals** — the browse experience, the reader, and the transitions between them, evaluated as designed screens. Sketch (in words/ASCII) the intended composition.
5. A **phased build plan**, each phase independently shippable and verifiable.

Then execute it phase by phase, committing per phase, verifying each (protocol below).

### Design dimensions to push (this is the substance — go deep on each)

- **Type as the core medium.** This is a *reading* product for dense archaic prose; typography is 80% of the experience. Reconsider the whole type system: the reading column (measure ~60–72ch, leading, size scale, first-line/drop-cap treatment for a text's opening?, how verse vs prose is handled, how chapter/canto/sura headings render, footnote/verse-number styling), and the UI type (wordmark, section labels, meta lines, the stat readout). Consider whether one or two well-chosen self-hosted or system-safe typefaces would elevate it — **but** no external CDN/font-CDN (constraint). A serif with real character for the body and a crisp sans for UI, tuned (optical size, tracking, leading), can transform this. If you introduce a webfont it must be self-hosted (base64 or same-origin file) and justified against load cost.
- **The browse experience / information architecture.** GAMEPLAN concluded a filtered grid is appropriate for a *library* — respect that as the default, but design the grid *well*: card composition and hierarchy (title vs tradition vs scale vs preview), how a 4MB epic and a one-page fragment coexist visually, density options, how the four traditions are expressed, whether the hero earns its space or should become something more evocative (a true landing moment for "the sum of human wisdom"). Consider empty/loading/first-paint states as designed moments, not afterthoughts. Push on: does landing on 151 cards feel like walking into a great library, or like a search results page? Make it the former.
- **The reader — the heart of the product.** Someone will spend hours here reading Gilgamesh or the Upanishads. Make it a genuinely beautiful, focused, distraction-quiet long-form reading environment: the measure and rhythm, the TOC as a calm companion (not a cramped list), progress and position as ambient rather than nagging, the meta/provenance (the SHA256 line, tradition, word count) treated as a considered colophon rather than debug output, transitions into and out of a text, and the find-within UI. Consider reading-comfort affordances that fit the brief (the existing text-size control; possibly measure/theme-warmth within the dark palette; a serene "you are here" sense in a 670k-word text). Restraint is the aesthetic — every control must justify its pixels.
- **Motion & interaction.** A calm, cohesive motion language: view transitions (browse↔reader↔search), how cards respond, how the drawer moves, focus transitions. Slow, eased, purposeful. Must fully honor `prefers-reduced-motion` (design the reduced-motion experience deliberately, don't just disable). Nothing bouncy or attention-seeking — this is a contemplative instrument.
- **Spatial & compositional rigor.** Impose a spacing scale and a vertical rhythm. Align to a system. Fix arbitrary margins. Make whitespace feel intentional and generous where it counts (reading) and efficient where it counts (browsing). Get the responsive behavior *designed* across breakpoints, not just non-broken — the phone reading experience especially deserves first-class art direction, since long-form reading happens on phones constantly.
- **Cohesion & the details.** The film grain, the logo mark, the favicon, the scrollbars, selection color, `<mark>` highlight, focus rings, the cyan's specific role — pull them into one coherent visual language so the whole thing feels authored. Verify color contrast meets WCAG AA against the dark ground (especially `--text-dim`/`--text-faint` and the cyan on navy, and `<mark>`), and treat accessibility as part of the design, not a tax on it.

Aim high. "Would a discerning designer screenshot this and feel something?" is the bar. Don't stop at competent.

## Constraints

**Hard — do not cross (these define the product; violating them fails the task):**
- **Single `index.html`. No build step, no framework, no npm, no external CDN or external font/asset host.** Everything inline or same-origin. (You may add same-origin static assets like a self-hosted font file or an SVG if genuinely warranted, served from the repo — but no third-party hosts, no bundler.)
- **No tracking, no analytics.**
- **Dark-first identity, navy + cyan lineage, film-grain texture.** You may *develop and refine* this palette (tonal range, accent discipline, subtle per-tradition hue) — do not replace it with a different color world or introduce a light theme as the default. (A restrained optional light/sepia *reading* mode inside the reader is allowable if you make the case in DESIGN.md and it serves reading comfort — but dark is home.)
- **Never break the working product.** All three views, search (BM25), reader (TOC/find/resume/text-size), mobile drawer, keyboard shortcuts, and accessibility must still work after every phase. 151 texts, integrity intact.
- Content stays public domain; tooling stays MIT.

**Soft — question if a genuinely better design needs it, but flag in DESIGN.md and ask before crossing:**
- If a design idea truly wants a second small same-origin file (e.g., a CSS file, a font), that technically bends "single index.html." Make the case first rather than silently splitting or silently under-designing.

## Known loose thread (fold into your work, don't make it a whole phase)
- `index.html` line ~396 still has a hardcoded `<b id="statTexts">159</b>` placeholder. It's overwritten to 151 by JS at runtime, so it's cosmetic — but if you're reworking the header/stat treatment anyway, correct it to 151 (or better, remove the magic number from the static HTML entirely and let JS own it).

## Verification protocol (after every phase)

```bash
python3 corpus.py verify      # must stay PASS (151 texts, integrity green)
python3 corpus.py stats
```
And for every visual/layout change, actually load it in a browser (headless Playwright is available; a reusable golden-path script exists at the scratchpad path noted in the prior session, or write your own) and exercise: browse renders all 151 cards, category filter, search a deep term (e.g. "archon") → results + highlights + live count, open the reader, TOC jump, find-within, text-size, scroll-resume, back button, `/` shortcut, mobile drawer. **Zero console errors.** Check it at desktop *and* a phone viewport — this pass is about how it looks and feels, so "the code is right" is not sufficient evidence; you must look at it. Capture before/after screenshots into the scratchpad for the reader and browse views so the change is reviewable.

## Process & guardrails
- Commit after each phase, message stating the design intent of the change (match existing commit style — `git log --oneline -5`).
- **Do NOT `git push` and do NOT run `vercel` / any deploy.** Commit locally only; the human reviews the diff and screenshots, then pushes/deploys. This is a public repo with a live production site.
- If DESIGN.md proposes crossing a soft constraint (a second file, a webfont), implement everything that doesn't require it and STOP on that specific item to ask.
- Work ambitiously and keep going through the plan — don't hand back after one shippable increment if your own DESIGN.md identifies more. This is meant to be a thorough, art-directed overhaul.

When done (or blocked): report the phases completed, commits made (`git log`), what's in DESIGN.md (especially the art-direction thesis and any flagged soft-constraint asks), verification state (verify PASS? console clean? screenshots captured where?), and anything awaiting a human decision.
