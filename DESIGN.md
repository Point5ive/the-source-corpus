# DESIGN — The Source Corpus

> Written before touching `index.html`, per the handoff Step 0. This is an
> art-direction document. It states what is wrong with the current design, what
> the look is *for*, the systems that produce it, and the phased plan to build it.
>
> Every number here was measured against `/Users/twon/ancient-texts/` on
> 2026-07-25 with scripts kept in the session scratchpad
> (`goldenpath.py`, `blockparse.py`, `parser2.js`, `perf2.py`, `cvtest.py`,
> `contrast.py`). Where a claim is load-bearing, the measurement is shown.
>
> Method note: the critique and the candidate directions came from a 22-agent
> pass — five expert lenses (typography, composition/IA, material/colour/motion,
> long-form reading, accessibility/responsive), four competing art directions,
> twelve judges, one synthesis. Every structural claim below was then
> **re-verified by me directly against the running app** before it was allowed
> into this document. Two agent claims did not survive that check and were
> corrected (noted inline). GAMEPLAN's decisions are respected, not re-litigated.

---

## 1. HONEST CRITIQUE OF THE CURRENT DESIGN

It is clean, and it is a dark dashboard. The deeper problem is that three of its
defects are not stylistic — they are **functional failures that a layout decision
caused**, and they are invisible from a desktop screenshot.

### 1.1 The reader does not work — and on phones its flagship features are dead code

**The text is not typeset. It is a 4 MB `pre-wrap` blob.** `white-space: pre-wrap`
(`:285`) preserves the *source's* hard line breaks, so a 1990s terminal wrapper —
not CSS — decides every line in the product. `max-width: 68ch` (`:289`) therefore
governs nothing. Measured across all 151 files, the corpus is four different
shapes and no single rendering strategy can be right for all of them:

| family | files | shape | what `pre-wrap` does |
|---|---:|---|---|
| A hard-wrapped | 64 | blank-line runs, wrapped at 60–75 cols | locks the text to the source's wrap; the A± dial and the measure are cosmetic lies |
| B long-line paragraphs | 33 | one paragraph per line, ~49% blank lines | voids between paragraphs at leading 1.85 |
| C2 long-line, no blanks | 51 | one paragraph per line, no blanks (Nag Hammadi) | an undifferentiated wall |
| C tab verse records | 3 | `Genesis 1:1\tAt the first God made…`, zero blank lines | the machine reference is inline body text |

Wrap width (p90 of non-blank line length) ranges **39 → 57,476** across the corpus.
The screenshot of the Bhagavad Gita on a phone shows the result: *"Produced by
J. C. Byers. HTML version by Al Haines."*, then a screen and a half of void, then
centred fragments. That is the reading experience of the product's flagship text.

**Reading progress and scroll-resume are dead on every phone and tablet.**
Verified directly: on a 390×844 viewport I opened the Mahabharata, scrolled the
page 1,479,658px, and got `progressWidth: "0%"` and **zero** `tsc.pos.*` keys.
The cause is a layout decision — `:367` sets `max-height: none` below 860px, so
`#readerContent` never scrolls, and the only scroll listener is bound to it
(`:1017`). `restoreScroll` (`:938`) then multiplies by `scrollHeight − clientHeight`
= 0. The two features the reader is *sold on* have never worked on the majority
reading device.

**The progress bar has never been visible on any device.**
`.reader-progress` is `position: sticky; top: 0; z-index: 5` (`:227`) underneath a
`position: sticky; top: 0; z-index: 100` opaque header (`:82–85`).

**Three nested scroll contexts on one reading screen** (`:155` sidebar, `:256` TOC,
`:284` reader). That costs spacebar paging, PageDown, native ⌘F, and browser scroll
restoration — and it means every future scroll feature must be written twice.

**The TOC approximates.** `scrollToLine()` (`:909–914`) converts a line number to a
pixel offset by **character-offset ratio** — `(charsBefore / totalChars) × scrollable`.
That is only correct if every line renders at identical height, which is false the
moment headings, verse and blank lines exist. It is also capped at 300 scanned and
180 emitted entries, deduped **by last occurrence** (`:894–895`), and `display:none`
below 860px — so a 909,011-word Bible has no map at all on a phone.

**Provenance is debug output.** 12 of 64 hex characters at 11px in a failing-contrast
grey (`:843`). A truncated hash verifies nothing; it is decoration impersonating
evidence, in the one product whose entire argument is verifiability.

### 1.2 The browse experience is a search-results page, not a library

**The grid is mathematically incapable of three columns.** Container 1200 (`:62`)
− rail 240 − gap 24 = 936px of main; `minmax(340px, 1fr)` (`:185`) needs 1052px for
three tracks. Verified at 1280 / 1440 / 1680 / 1920 / **2560px** — **two columns at
every single one.** A 27" display gets two cards and a sea of navy. Below 388px the
340px track overflows and `body { overflow-x: hidden }` (`:60`) *clips* it — content
loss, not scrolling.

**The card is four rows of near-equal weight** (title 15px, meta 12px, preview 13px)
in which hierarchy is carried entirely by a 600-weight flip. A 92-word fragment and
a 909,011-word monument render as the same 148px box. The single most consequential
fact in choosing a text — *does this cost me four minutes or sixty-two hours* — is a
12px failing-contrast number ranked third, behind a redundant badge and bytes-on-disk.

**The tradition badge is 90 repetitions of the most chromatically distinct object
on screen.** In a filtered view it says nothing at all, on a `background: var(--bg)`
fill that is 1.08:1 against its own parent — it pays padding and radius for zero
perceptual return.

**The taxonomy is one level deep and wrong at the top.** 53 of the 90 "Abrahamic"
entries are Nag Hammadi tractates (verified), rendered as 53 nearly identical cards
whose first two words are "Nag Hammadi".

**The previews are frequently the wrong book.** They are a blind head-of-file grab.
Verified: the *Epic of Gilgamesh* preview is **"Produced by Nigel Lacey THE PATHFINDER
or, THE INLAND SEA By James Fenimore Cooper"**. *Mencius* opens on *Stories by English
Authors*. *Laws of Manu* opens on *The Seven Great Monarchies*. At minimum 11 of 151
are apparatus or a different work entirely.

**The hero is a banner, not a threshold.** ~164px for an h1 and a paragraph that
repeats above every filtered view, and vanishes exactly when identity would matter.

### 1.3 Search is a list, and over half of it never resolves

**`"Loading excerpt…"` is a permanent terminal state.** Verified: query `god` →
58 results, **30 stuck forever**; query `bible` → 31 results, **11 stuck**. Title
matches and everything past the 20-result excerpt budget never resolve, because
`renderResults` writes the placeholder and only the bounded `need` slice (`:778`)
ever overwrites it.

The count is also dishonest at the top end — `:763` breaks at 50 and prints that
truncation as though it were a total.

### 1.4 There is no type system, no spacing scale, and no light

**Nine arbitrary font sizes**, four of them adjacent, with 13px simultaneously
carrying the stat readout, card preview, TOC, reader meta, tool buttons and result
context. Three hard-coded `letter-spacing` values in px with no optical law — the
24px mobile h1 inherits the 30px `−0.5px` and comes out 26% tighter than intended.
`68ch` is not 68 characters: `ch` is the advance of glyph `0`, ≈0.50em in Iowan and
≈0.56em in Georgia, so the measure resolves 578–648px depending on which fallback won.

**`box-shadow` appears 0 times in 1,052 lines.** There is no light in the file. A
four-tone flat-fill system has no dimension left in which to express state — which
is precisely why every new need got answered with more cyan.

**Cyan has 21 usages and eight unrelated meanings**: the wordmark, the hero word,
the stat numerals, the logo mark, every hover border, every focus border, the
progress fill, the marks. A colour that means eight things teaches nothing.

**The palette is Tailwind's default dark dashboard, verbatim, in 6 of 11 tokens**
(`#0a0e1a`/`#111729` aside, `#e2e8f0` `#94a3b8` `#64748b` `#1e293b` `#06b6d4`
`#0e7490` `#ef4444` are stock slate/cyan/red). Hue drifts 217→226 across the ramp
and saturation decays 44%→33% as lightness rises, so the navy stops being navy
exactly where the light is.

**The grain is a 7× stretched blur.** A 200-unit `viewBox` with **no
`background-size`** (`:334`) painted across the viewport, at `opacity: .015` over
R=10 — an amplitude of about ±1 sRGB level, i.e. the 8-bit quantisation step. And
it is `position: fixed; z-index: 9999`: scroll 900,000 words and the texture does
not move. That reads as a camera artifact — the opposite of *unmediated*.

**The icons are emoji.** 🔍 (U+1F50D) is a full-colour OS bitmap that ignores its
own `color: var(--text-faint)` declaration, and is the highest-saturation object
anywhere in a monochrome navy instrument. ☰ is an I-Ching trigram.

**`::selection` is unstyled.** The core outward act of a reading product — dragging
across a passage — is painted by the user's OS accent colour.

### 1.5 Measured contrast failures

| pairing | ratio | verdict |
|---|---:|---|
| `--text #e2e8f0` on `--bg` | 15.62 | pass — but *halates*; over-contrasted for 12.9M words |
| `--text-dim #94a3b8` on `--bg` | 7.51 | pass |
| **`--text-faint #64748b` on `--bg`** | **4.05** | **fails AA body** |
| **`--text-faint #64748b` on `--bg-card`** | **3.74** | **fails AA body** |
| `--accent #06b6d4` on `--bg` | 7.93 | pass |
| **`--border #1e293b` vs `--bg-card`** | **1.16** | invisible; 1.4.11 needs 3:1 |
| **`--bg-hover` vs `--bg-card`** | **1.12** | surfaces indistinguishable |

`--text-faint` carries real content at nine selectors. The system is **inverted**:
metadata under-contrast, body over-contrast.

### 1.6 Accessibility defects that are design defects

The closed drawer keeps five focusable controls in the tab order (`transform:
translateX(-100%)`, no `inert`) — a cyan focus ring renders at x = −260px. Both
search inputs kill the global focus ring with `outline: none`. TOC entries are
`javascript:void 0` anchors that move `scrollTop` but never the AT virtual cursor.
A 4.4 MB text is one text node inside `role="article"` with zero headings and zero
paragraphs. `* { transition: none !important }` is a compliance reflex, not a
reduced-motion design. One breakpoint at 860px does the work of five — iPad portrait
gets the phone build; 861–1007px renders a single 549–697px-wide card.

---

## 2. ART DIRECTION

> ### The screen is an unlit scriptorium, and the text is the only thing under the lamp.
>
> The reading surface is the single lit plane in the product — a leaf with tooth, a
> lip of light along its top edge, a shadow beneath it. Everything else recedes into
> unlit boards. Cyan is not an accent colour; it is the instrument's own light, and
> it touches the page in exactly five places, every one of which means *the system
> is responding to you, here, now*.

**Emotional target: hushed custodial reverence** — the feeling of being handed the
actual object under a single lamp, unhurried, alone, with the room gone quiet.

**Reference points:** iron-gall ink browning on vellum; rubrication, where the
second pot of ink marks only beginnings and only what matters; the pool of light in
a reading room at 11pm; a museum vitrine lit from directly above; Bringhurst's
*Elements* as an object rather than a rulebook.

Two corollaries decide every disputed case:

1. **Hierarchy is carried by light and by type. Never by hue.** Hover is an
   elevation event. Current-state is a rule plus a weight change. Colour identifies;
   it never acts.
2. **The apparatus is the instrument's voice; the corpus keeps its own.** Every word
   that came out of a `.txt` file is set in the reading serif. Every word the product
   itself computed — counts, durations, hashes, labels — is sans or mono, and is
   always visibly subordinate.

**Why this and not the alternatives.** Three rival directions were developed and
judged (a card-catalogue *Drawer*, an instrument-field *Sidereal*, a radically
subtracted *Vigil*). Iron Gall won on taste (88) and brief-fidelity (86) because its
central move is the one the product actually needs: it makes *the text* the designed
object rather than the chrome around it. The best of the losers is grafted in below —
Drawer's serif/mono epistemological boundary and its colophon, Sidereal's
words-based (not pixel-based) position model and its accent-spend discipline.

---

## 3. THE SYSTEMS

### 3.1 Spacing & rhythm

Base unit 4px, nine steps, no off-scale value in the file:

```
--s-1 4  --s-2 8  --s-3 12  --s-4 16  --s-5 24
--s-6 32 --s-7 48 --s-8 64  --s-9 96  --s-10 144
```

| gap | used between |
|---|---|
| ≤12px | two lines inside one component; **paragraph↔paragraph in the reading column** |
| 16–24px | two components in a group: card padding, grid gap, toolbar gap |
| 32–48px | two groups: rail↔main gutter, rail section↔section |
| 64–96px | two page regions: leaf top padding, threshold blocks, colophon standoff |
| 144px | the leaf's own vertical margins. Nothing else. |

**The asymmetry that *is* the design:** inside the reading column, paragraph-to-
paragraph is 12px. From the reading column to anything else it is 64px (32px on
phone). Twelve inside, sixty-four outside. Density is what the light buys you; the
void is what makes the lit plane read as lit.

Chrome lands on an 8px rhythm (header 64, chrome bar 56, rail row 40 / 44 coarse).
**The reading column is deliberately not on that grid** — it is quantised to its own
line box. Chrome and text are two rhythms and must not be forced into one.

**Radius — a codex has square corners.** `--r-leaf: 0` (reading surface, drawer,
sheet, scrim) · `--r-card: 2px` · `--r-ctl: 4px` (controls ≤44px tall).
**Rule: nothing whose smallest dimension exceeds 260px may carry a radius.** This
retires `--radius: 8px` on a ~700px reading panel — the clearest dashboard tell in
the file.

**Geometry ladder.** `--header-h` is measured once by `ResizeObserver` and written to
`:root`; every sticky offset is `calc(var(--header-h) + var(--s-2))` and
`html { scroll-padding-top: calc(var(--header-h) + var(--s-4)) }`. **No hardcoded
`top: 80px`** and **no `calc(100vh − Npx)` anywhere** — at 200% zoom `100vh` is 400
CSS px and today's reader collapses to about two lines.

| viewport | container | rail | grid | card |
|---|---|---|---|---|
| ≤479 | 100%, pad 16 | drawer | 1 col, **index rows** | full bleed, no clip at 360 |
| 480–743 | 100%, pad 20 | drawer | 1 col, index rows | |
| 744–899 | 100%, pad 20 | drawer | **2** | 340 |
| 900–1179 | 100%, pad 24 | 208 | 2 | 294 |
| 1180–1599 | max 1280 | 240 | **3** | 304 |
| ≥1600 | max 1560, pad 40 | 240 | **4** | 284 |

Grid tracks are always `repeat(N, minmax(0, 1fr))`. `minmax(340px, …)` is banned.
The reader gets its own narrower container (max 1140) — reading does not want width.

### 3.2 Typography

**Role A — the reading serif, the only face inside the text block.** Metric-normalised
with `local()` sources only, so there is **no font file and no network request**:

```
@font-face{font-family:Read1;src:local('Iowan Old Style');size-adjust:94%}
@font-face{font-family:Read2;src:local('Charter'),local('Bitstream Charter');size-adjust:100%}
@font-face{font-family:Read3;src:local('Georgia');size-adjust:100%}
@font-face{font-family:Read4;src:local('Palatino'),local('Palatino Linotype');size-adjust:103%}
@font-face{font-family:Read5;src:local('Noto Serif');size-adjust:90%}
@font-face{font-family:Read6;src:local('Liberation Serif'),local('Times New Roman');size-adjust:108%}
--face-read: Read1,Read2,Read3,Read4,Read5,Read6,serif;
```

**Do not collapse these into one family name.** Six `@font-face` rules sharing a
family name and identical descriptors resolve by declaration order with the *last*
winning in Chromium; Times New Roman exists on macOS and Windows, so a single-family
stack resolves to Times at 108% on the two platforms that matter most.

Honest resolution: macOS/iOS → **Iowan Old Style**. Windows → **Georgia**,
deliberately promoted above Palatino Linotype, whose hairlines erode on a dark ground
while Georgia's were drawn for coarse screen output. Android/ChromeOS → **Noto Serif**
(today's stack falls through to generic there). Linux → Charter or Liberation.
`size-adjust` on a `local()` face needs Chrome 92+/Firefox 92+/Safari 17+; older
Safari ignores it and degrades to exactly today's behaviour.

**Role B — instrument sans:** `system-ui` moved to **first** (it currently sits
fourth, so Windows 11 resolves legacy static Segoe UI and forfeits its optical axis).
**Role C — mono:** exactly one job, the 64-character SHA-256, with `tabular-nums
slashed-zero` and ligatures off. **Role D — the lapidary register:** not a family,
but the reading serif at `uppercase; 0.78em; letter-spacing:.115em; weight 500`,
carrying tradition names, `CONTENTS`, `COLOPHON`, and the incipit. Never
`font-variant-caps: small-caps` — it synthesises badly across six resolutions.

**The scale — base 16px, down at 1.125, up at 1.25, every value in `rem`, zero `px`
font-sizes in the file:**

| token | rem | @16 | role |
|---|---|---|---|
| `--fs-lapidary` | .703 | 11.25 | small-cap labels only |
| `--fs-meta` | .790 | 12.64 | colophon, counts, find-count, SHA |
| `--fs-ui-sm` | .889 | 14.22 | rail rows, tool buttons, TOC, result context |
| `--fs-ui` | 1.000 | 16.00 | **both text inputs — kills iOS zoom** |
| `--fs-title` | 1.263 | 20.20 | card titles, in `--face-read` 600 |
| `--fs-head` | 1.588 | 25.40 | search-result titles |
| `--fs-work` | 2.000 | 32.00 | **reader title — `--face-read` 400** |
| `--fs-display` | `clamp(2rem, 1.1rem + 2.8vw, 2.875rem)` | 32→46 | threshold |

Nothing lands at 13px or 15px any more.

**The reading dial is an index, not a pixel value.** Six geometric stops, with size,
leading and measure moving as one coupled system — today only size moves while
leading stays pinned at 1.85 and measure at 68ch:

```
scale  0.850 0.923 1.000 1.087 1.180 1.284   (default index 2)
px     16.5  17.9  19.4  21.1  22.9  24.9
lead   1.66  1.63  1.60  1.575 1.55  1.53
measure 34em 33.5em 33em 32.5em 32em 31.5em
```

Stored as `tsc.readScale` (0–5) so A± composes with the user's own browser base
instead of overriding it. Legacy `tsc.readerSize` is migrated once and deleted.

**`em`, not `ch`.** 33em is a known width on every platform; with `size-adjust`
normalisation the residual character-count variance is about ±4.

**The tracking law**, replacing three hard-coded px values that break at the
breakpoint: `letter-spacing: clamp(-0.024em, (17 - var(--fs-n)) * 0.0012em, 0.020em)`
— all in `em`, so it survives the A± dial and every breakpoint by construction.

**The craft moves that signal "ancient primary source":**

1. **A title page, not a header** — tradition in the lapidary register → the work in
   `--face-read` 32px/400 → a hairline broken by a gap carrying the reading duration.
2. **The incipit, not a drop cap.** The first four words of the first prose paragraph
   get `uppercase; letter-spacing:.10em; .92em; --ink-high`. A drop cap is
   face-dependent across six resolutions, depends on the segmenter having correctly
   found the first prose block across 151 heterogeneous scrapes, and spends the accent
   on ornament in a system whose accent discipline is its spine. The incipit does the
   same job — *this is where the work begins* — for four words of markup and zero risk.
   Suppressed on verse, under 2,000 words (38 of 151), and on an opening quotation mark.
3. **Verse references leave the text.** Block-initial refs go to a 3.4em gutter
   (`position:absolute; text-align:right; .68em sans; tabular-nums`), so the text
   block's left edge finally runs true. Mid-block refs stay inline as superiors —
   they cannot leave without breaking the sentence, and pretending otherwise would be
   a fidelity error. Measured: the parser extracts **31,102** refs from BBE and
   **24,363** from the KJV.
4. **Verse is set differently from prose at all** — 1.46 leading, 27em measure,
   `padding-left:1.6em; text-indent:-1.6em` so a runover stays inside the block.
   Today the Gita, the Iliad and the King James are set identically.
5. **Figures.** `oldstyle-nums proportional-nums` in the reading column (real on
   Georgia and Palatino, a silent no-op on Iowan and Noto Serif — the gutter placement
   is what carries the register there); `tabular-nums lining-nums` on every UI count,
   which kills the width jitter in the stat readout.
6. **Hyphenation** (`hyphens: auto`) and `text-wrap: pretty` — only reachable at all
   once the paragraphs are real, and worth ten times more at a 40-character phone
   measure than on desktop.

### 3.3 Structuring the blob — `segmentText()`

This is the prerequisite for everything in §3.2 and the largest single risk in the
document, so it is specified and measured rather than guessed.

**Classification is per-file and adaptive, computed at runtime.** `W` = p90 of
non-blank line lengths; `hardWrapped = 40 ≤ W ≤ 95`.

- **Not hard-wrapped** → every non-blank line is already a complete paragraph.
- **Hard-wrapped** → split on blank lines into runs. A run whose non-final lines have
  median length ≥ 0.80·W is hard-wrapped prose → **reflow** (join with spaces).
  Otherwise it is verse → **preserve the author's line breaks**.
- **Verse discriminator, stated properly:** in hard-wrapped prose a short line occurs
  *singly*, as a paragraph terminator; in verse short lines occur in *runs*. That —
  not absolute indentation — is the signal. **51 files carry a uniform baseline
  indent of >70% of lines** (45 Nag Hammadi tractates at 6 spaces), so an indent rule
  would render the entire Gnostic corpus as poetry. Every line is trimmed first.
- **Verse references** are split off the front: `Genesis 1:1\t` (tab form) and
  `1:7 ` (inline form). A book/chapter change synthesises a heading.
- **Blob guard:** exactly **2** files have a pathological single line
  (`tao-te-ching-legge.txt` is one line of 57,476 chars; `hadith-bukhari` has a
  395,257-char line). Any paragraph over ~1,500 chars is sentence-split.
- **CRLF is safe** — 94 of 151 files contain CRLF, and every line is `.trim()`ed,
  which strips `\r`.

**Blocks are grouped into `<section>`s with `content-visibility: auto;
contain-intrinsic-size: auto 1200px`.** This is what makes the rebuild free — measured:

| text | blocks | parse | render plain | render cv:auto |
|---|---:|---:|---:|---:|
| Rig Veda | 19,119 | 8ms | 1183ms | **24ms** |
| BBE (4.6MB) | 32,293 | 19ms | 458ms | **76ms** |
| KJV (4.4MB) | 24,611 | 33ms | 413ms | **50ms** |
| Mahabharata (4MB) | 3,164 | 33ms | 248ms | **11ms** |

Parsing is negligible; layout was the whole cost, and containment removes it.

**Risk-tested on the 543,460px-tall KJV before committing to it:** `scrollIntoView`
into a *skipped* section is pixel-accurate (0px offset at four depths); scroll
anchoring holds after forcing full layout; a `TreeWalker` reaches text inside skipped
sections (736 hits for "Jerusalem" in **12ms**); anchor-based resume round-trips at
0px delta. Emission is `createElement` + `textContent` throughout — **the
no-`innerHTML` safety property holds unchanged.**

**Find-within-text — the one risk every judge flagged, and the answer.** The current
`runFind` re-renders the entire blob with `<mark>`s on every keystroke; ported
naively onto 24k block elements it would freeze the tab. It is rebuilt to **search
the parsed block strings, not the DOM**: string search over 4MB is a few
milliseconds and yields an exact count instantly, and `<mark>`s are materialised
only into the blocks actually being stepped to or currently on screen. No layout is
forced, nothing is re-rendered, the count is honest, and it stays pure DOM.

### 3.4 Colour, elevation & material

Hue locked at **222–228°** across the whole ground ramp; saturation **holds 39–50%**
as lightness rises instead of decaying onto Tailwind's slate axis. The navy must
still be navy where the light is.

```
--void      #04060e   behind everything, scrim base
--room      #080c18   page ground
--rail      #0b1020   rail, header, inset wells
--leaf      #0d1220   THE READING SURFACE
--card      #11172b   card at rest
--card-lit  #161e36   card hover / focus
--rule-hair #1c2440   decorative hairlines ONLY — may never bound a control
--rule      #29335a   section dividers, the quire rule
--rule-edge #66739b   EVERY control boundary + scrollbar thumb
```

```
--ink-high  #e6eaf4   UI primary, titles, found words
--ink-read  #cbc6bb   THE READING BODY — hsl(41,13%,76%)
--ink-mid   #9daac4   secondary UI
--ink-low   #838fa9   meta, counts, placeholder, colophon
--fault     #d98b7a   the one message shown when the product is broken
```

`--ink-read` is the one warm value in the system, at 13% saturation — **paper, not
sepia**. It fixes both directions of the current inversion at once: `--text-faint`
fails AA at nine selectors while `--text` halates at 14.58:1. 10.97:1 sits inside the
10–11.5 band that sustained light-on-dark reading wants, and a paper tone does more
identity work than a 1.5%-opacity grain veil ever has.

```
--rubric      #1fc7dc   hsl(187,75%,49%)
--rubric-hi   #5fe0f0   focus ring only
--rubric-wash rgba(31,199,220,.18)
--rubric-ink  #04212b
```

Developed, not replaced: hue 189→187, saturation 94.5%→75%. Less neon, more pigment;
unmistakably the same cyan lineage.

**What cyan is allowed to mean — five uses, exhaustive. Anything else is a bug.**
① focus · ② where you are (progress fill, active TOC entry, active rail row,
`aria-pressed`) — always *2px rule + `--ink-high` + weight 600*, never colour alone ·
③ the found word · ④ selection · ⑤ live progress.

**Stripped of cyan:** the wordmark span, the hero word "unmediated", the three stat
numerals, the logo mark, and every hover/focus *border*. 21 usages → 7 nodes.

> **HOVER IS AN ELEVATION EVENT, NEVER A HUE EVENT.** This single rule is what
> quiets a 151-card grid, what makes the rubric learnable enough to mean anything,
> and what frees a channel for tradition identity.

**Tradition differentiation: yes — in the binding edge only.** Never a chip, never
text, never interactive. A library's defining property against a file listing is that
its objects come from distinguishable lineages, and 90 identical chips are the least
useful possible way to say it. The tint moves to the one place a real codex is
coloured — the covering of the boards — and the leaf inside is always vellum.

| tradition | hex | vs `--card` | material |
|---|---|---:|---|
| Abrahamic (90) | `#5470b5` | 3.69 | indigo-dyed cloth |
| Eastern (27) | `#a8834a` | 5.09 | tanned calf |
| Mythology (23) | `#86864a` | 4.68 | oxidised bronze |
| Esoteric (11) | `#8f6cbb` | 4.26 | Tyrian purple |

Safety invariants: every binding sits at ≤ half the rubric's chromatic amplitude and
≥25° clear of its hue; all four clear 3:1 as graphical objects; and the tradition
name is **always written out** beside the edge — so WCAG 1.4.1 is satisfied by
construction, not by an aria attribute.

**Elevation — the missing dimension.** `box-shadow` appears 0 times today.

```
--elev-card     0 1px 2px rgba(0,0,0,.55), inset 0 1px 0 rgba(158,186,255,.045)
--elev-card-lit 0 2px 6px -1px rgba(0,0,0,.62), 0 10px 28px -10px rgba(0,0,0,.58),
                inset 0 1px 0 rgba(158,186,255,.08)
--elev-leaf     0 18px 48px -18px rgba(0,0,0,.75), inset 0 1px 0 rgba(178,198,255,.055)
--elev-chrome   0 1px 0 var(--rule), 0 14px 36px -18px rgba(0,0,0,.82)
--scrim         rgba(4,6,14,.74) + blur(4px) saturate(.85)
```

The `inset 0 1px 0` top-light is load-bearing: it is what makes a rectangle read as a
plane catching illumination rather than a fill of a different value.

**Material, three layers in order of contribution.**
① **The bloom** — `radial-gradient(128% 76% at 50% -14%, rgba(58,74,132,.15),
transparent 62%)` on the room. The top reads lit, the bottom recedes, near-black
acquires a direction. Deliberately *not* tinted cyan; the accent discipline holds
even for light. ② **The tooth**, bound to the surface and never to the glass: two
turbulence layers on `.leaf::before` / `.card::before` with a real
`background-size: 168px, 720px` (the actual fix), `mix-blend-mode: overlay` so it
darkens as well as lifts, at opacity .036 leaf / .022 card / .014 chrome / **0 room**.
The grain now scrolls with the sheet. ③ **Ink density at the type level** — sixty per
cent of "texture" in a reading instrument is typographic.

> **Performance constraint:** once the reader is a page, `.leaf` is hundreds of
> thousands of pixels tall, and `mix-blend-mode` on a pseudo-element of that height
> forces backdrop compositing over the whole scroll extent. The leaf's tooth is
> therefore a `position: fixed` 100vh tile clipped to the leaf's band — the cost is
> one viewport, not one document. Verify with paint flashing before shipping.

**Contrast table — computed, WCAG 2.x sRGB.** Ground luminances: room .003805 ·
rail .005460 · leaf .006225 · card .009064 · card-lit .013655.

| token | on room | on leaf | on card | on card-lit | bar | verdict |
|---|---:|---:|---:|---:|---:|---|
| `--ink-high` | 16.21 | 15.51 | 14.76 | 13.70 | 4.5 | **AAA** |
| `--ink-read` (body) | 11.46 | **10.97** | 10.44 | 9.69 | 4.5 | **AAA**, inside the long-form band |
| `--ink-mid` | 8.35 | 7.99 | 7.60 | 7.05 | 4.5 | **AAA** |
| `--ink-low` | 6.01 | 5.75 | 5.47 | **5.08** | 4.5 | **AA** (retires 3.74) |
| `--rubric` as text | 9.54 | 9.13 | 8.69 | 8.06 | 4.5 | **AAA** |
| `--rubric-hi` ring | 12.46 | 11.92 | 11.35 | 10.53 | 3.0 | pass ×3.5 |
| `--rule-edge` control edge | 4.17 | 3.99 | 3.80 | **3.53** | 3.0 | **pass 1.4.11** (was 1.09–1.22) |
| all four binding edges | 4.05–5.59 | — | 3.69–5.09 | 3.43–4.72 | 3.0 | pass |

Composites: `--ink-high` on the mark wash over leaf = **11.08** (brighter than body's
10.97 — the hit *advances* where today it recedes at 7.34 against 14.58);
`--rubric-ink` on solid rubric = 8.16; selection ink = 10.24. A
`prefers-contrast: more` block lifts every ink token and thickens borders and rings.

### 3.5 Motion

Four curves, five durations, **no free values**. Today: four undeclared durations,
every curve the browser default `ease`, zero keyframes, and a `transform` transition
on `.text-card` that nothing ever changes.

```
--ease-leaf  cubic-bezier(.22,.61,.36,1)   arriving and settling — the default
--ease-lift  cubic-bezier(.32,.72,0,1)     large surfaces covering distance
--ease-quill cubic-bezier(.40,0,.20,1)     symmetric — pure colour/opacity
--ease-exit  cubic-bezier(.40,0,1,1)       leaving — accelerate away, no tail

--t-ink 90ms · --t-lift 150ms · --t-turn 240ms · --t-quire 320ms · --t-open 480ms
```

| name | trigger | motion |
|---|---|---|
| **leaf-lift** | card `:hover` **and** `:focus-visible`, identically | ground +3.5 L\*, shadow, binding edge dim→lit, −1px. Nothing turns cyan. Today the accent bar is mouse-only. |
| **page-turn** | view change — the highest-value addition | outgoing `opacity→0` at `--t-turn/2 / --ease-exit`; incoming offset 60ms, `opacity 0→1 + translateY(5px→0)`. **The rail frame never animates** — only its contents cross-fade. Vertical only; a horizontal slide would be a page-turn pun, nauseating and cheap. |
| **rubric-strike** | find-in-text jump — the one place motion is load-bearing | smooth scroll to centre; the landed `mark.current` holds its solid fill 420ms, then eases to the wash over 180ms |
| **quire-open** | drawer / sheet | transform at `--t-quire`; the scrim *fades* with it. Today the scrim is `display:none/block` and pops while the drawer glides. |
| **candle** | header scroll state (does not exist today — the header is byte-identical at scrollTop 0 and 40,000) | alpha .95→.72, blur 12→20px, base rule lifts, `--elev-chrome` reveals |

**Never animates:** filter change (filtering is a query, not a journey); the focus
ring (a ring that fades in arrives late for the person who needs it); the progress
fill — its current `transition: width .1s linear` exactly equals the 100ms scroll
throttle, so the bar is permanently one batch behind the scroll it reports.

**Reduced motion — designed, not disabled.** `prefers-reduced-motion` addresses
*vestibular* triggers: translation, parallax, scale, spin. A 90ms colour cross-fade
is none of those; it is the affordance telling a user a target is interactive. The
current blanket rule deletes seven transitions of which exactly one is a genuine
translation, makes every hover snap for precisely the calm/ADHD audience this product
claims, makes the progress bar jitter frame-to-frame in the periphery (*more*
perceived motion), and turns a 260px drawer from a glide into an instant
materialisation — arguably the worse vestibular event, because there is no cue at all
about where the panel came from.

> **Policy: remove translation, parallax, stagger and smooth-scroll. Preserve colour,
> opacity and shadow. Substitute a fade wherever a slide is removed.**

`--t-ink` and `--t-lift` survive intact; the drawer cross-fades *in place*; the
find-jump switches to `behavior:'auto'` and the landed mark holds 700ms instead of
420 — the destination cue is preserved by other means rather than deleted.

---

## 4. LAYOUT & IA

Structural commitments visible in every screen: **one scroll axis — the page**; **one
240px rail at a fixed x with three jobs** (browse facets / result facets / contents)
whose frame never moves and whose contents cross-fade; the paragraph model; and four
measured **extent tiers** — Fragment <3,000w = 38 · Tract 3k–25k = 57 · Book
25k–150k = 35 · Monument ≥150k = 21 (sums to 151), expressed as a **human duration
only** at 180 wpm — no glyph, no legend to learn.

### 4.1 The threshold (landing)

```
┌ header 64 · lifts on scroll ────────────────────────────────────────┐
│ ▤ The Source Corpus     [ ⌕ search the corpus                  / ]  │
└─────────────────────────────────────────────────────────────────────┘
                                                                       
   Humanity's wisdom,                  151          TEXTS              
   unmediated.                         12,875,937   WORDS              
   ── clamp 32→46, serif 400 ──        4            TRADITIONS         
                                       ≈1,192 h     TO READ IT ALL     
   No commentary. No summaries.        ── tabular, right-aligned to a  
   The actual public-domain texts.        decimal rule. NEVER cyan ──  
 ─────────────────────────────────────────────────────── --rule-hair ──
  C O N T I N U E          ← renders ONLY if tsc.pos.* exists          
  ┌──────────────────────┐ ┌──────────────────────┐                    
  │▍Bible (KJV)      41% │ │▍Zohar (Soncino)  07% │  the ONLY cyan here
  │ Judges 6 · ≈45 h left│ │ Prologue · ≈65 h left│                    
  │▂▂▂▂▂▂▂▂░░░░░░░░░░░░░ │ │▂░░░░░░░░░░░░░░░░░░░░ │                    
  └──────────────────────┘ └──────────────────────┘                    
 ──────────────────────────────────────────────────────────────────────
   ↓ the rail and the shelf begin ABOVE the fold on a 1360×800 display
```

~360px. A library's front door is the stacks. The "enter by tradition" door-cards
proposed by two candidate directions are **cut** — the rail lists all four with
counts two inches below, and a second larger copy of the same four links is a
content-site gesture. `CONTINUE` is kept in full: it is built from `tsc.pos.*` data
the product already collects and has never shown, it is the highest emotional-value
element available, and it costs no new content. On a filtered view the entire
threshold collapses to a 56px shelf header — the manifesto is never said twice.
First paint renders `—  TEXTS`, never a hard-coded number.

### 4.2 Browse

```
┌ rail 240 sticky ───┐┌─ main 960 · 3 × 304 · gap 24 ──────────────────┐
│ T R A D I T I O N S││ Eastern · 27 texts · 2,294,809 words · ≈212 h  │
│   All          151 ││ ─────────────────────────────────────────────  │
│ ▍Eastern        27●││ ┌─ MONUMENT · spans 2 tracks ──┐┌───────────┐  │
│   Abrahamic     90 ││ │▍ Mahabharata                 ││▍Upanishads│  │
│   Mythology     23 ││ │  1,808,000 words · ≈62 h     ││ ≈13 h     │  │
│   Esoteric      11 ││ │  "Om! Having bowed down to   ││ "Aum.     │  │
│ ────────────────── ││ │   Narayana, and Nara…"       ││  That…"   │  │
│ E X T E N T        ││ └──────────────────────────────┘└───────────┘  │
│ ▢ Fragment   <18m 4││ ┌─────────┐┌─────────┐┌─────────┐              │
│ ▢ Tract     <2.3h 9││ │▍Tao Te  ││▍Dhamma- ││▍Lotus   │  304 × 176   │
│ ▣ Book       <14h 8││ │ Ching   ││ pada    ││ Sutra   │              │
│ ▣ Monument   >14h 6││ │ ≈33 m   ││ ≈2 h    ││ ≈18 h   │              │
│ ────────────────── ││ │"The Tao ││"All that││"Thus    │              │
│ S O R T            ││ │ that…"  ││ we are…"││ have I…"│              │
│ ● Tradition        ││ │▁▁▁░░░░░░│└─────────┘└─────────┘ ← resume     │
│ ○ Title A–Z        ││ └─────────┘                                    │
│ ○ Extent ↓         ││ F R A G M E N T S · 4 under 18 minutes         │
│ ○ Recently opened  ││ ┌────────────────────────────────────────────┐ │
│ 27 of 151 shown    ││ │▍Heart Sutra ≈3 m  │▍Fire Sermon ≈7 m       │ │
└────────────────────┘└────────────────────────────────────────────────┘
```

**Card anatomy — six slots** replacing four rows spanning a 3px size range:
① a 2px full-height **binding edge** in the tradition tint (the badge chip dies) ·
② **title**, 20.2px `--face-read` 600, `text-wrap: balance`, the only 600-weight on
the card · ③ **extent row** — word count + human duration, tabular, on its own row;
**`size_human` is deleted** — it is a filesystem property with no reading meaning ·
④ **epigraph**, 15.6px serif at `--ink-read`, 3 lines (4 on Monuments) · ⑤ **resume
underline**, 1px rubric along the base edge, width = stored position · ⑥ Monuments
span two tracks; Fragments leave the grid for a compact shelf.

Because previews cannot be regenerated (see §6), the epigraph is **filtered
client-side**: a preview matching the apparatus signature (Gutenberg producer lines,
wiki scaffolding, `Title:`/`Release Date:` headers, bare URLs) is suppressed rather
than displayed, and the card composes without it.

### 4.3 The reader

```
┌ chrome bar 56 sticky ───────────────────────────────────────────────┐
│ ←  Corpus │ Bible (KJV) · Judges 6      ⌕ Find   A− A+          ⁘   │
└─────────────────────────────────────────────────────────────────────┘
┌ rail 240 ────────────┐ │ ┌── THE LEAF · --leaf · tooth .036 ───────┐
│ C O N T E N T S      │ │ │  no border · no radius · no max-height   │
│   Genesis            │ │ │  --elev-leaf: lamp-lip + cast shadow     │
│ ▍Judges   ← active   │ ▍ │                                          │
│   ● Judges 6 ← here  │ │ │      T H E   O L D   T E S T A M E N T   │
│   Ruth               │ │ │                                          │
│   TWO-LINE WRAP, no  │ │ │           The Book of Judges             │
│   ellipsis (today:   │ │ │      ── 32px --face-read 400 ──          │
│   ~30 chars)         │ │ │      ───────  ⁘  ≈76 h  ───────          │
│ ──────────────────── │ │ │                                          │
│ 41 % · ≈45 h left    │ │ │  NOW AFTER THE DEATH of Joshua it came   │
│ ↑ the rail KEEPS its │ │ │  to pass, that the children of Israel…   │
│   own overflow-y —   │ │ │      ↑ incipit: 4 words, lapidary        │
│   "one scroll axis"  │ │ │                                          │
│   governs the        │ │ │  1:2 │ And the LORD said, Judah shall    │
│   READING SURFACE,   │ │ │      │ go up: behold, I have delivered   │
│   not the chrome     │ │ │   ↑ vref: 3.4em gutter, OUTSIDE the      │
└──────────────────────┘ │ │     measure, tabular, --ink-low          │
   │ = THE QUIRE RULE:   │ │                                          │
   1px --rule down the   │ │      Valiant and tried,                  │
   full column; its      │ │        ready this day to die             │
   filled segment is     │ │   ↑ .verse — 27em, 1.46, hanging 1.6em   │
   --rubric and shows    │ └──────────────────────────────────────────┘
   position IN THE WORK   19.4 / 1.60 / 33em ≈65 chars · hyphens:auto
   — words-before ÷       ONE SCROLL CONTEXT: the page.
   total words, NOT pixels.
```

**Consequences of deleting the box:** the quire rule lives where it is always
visible; window scroll drives progress *and* resume, so both work identically on
desktop and phone (today neither works on phone at all); the measure stops being
63ch-or-68ch depending on whether a regex found ten headings; spacebar, PageDown,
native ⌘F and browser scroll restoration all return; and 200%-zoom reading stops
being a two-line letterbox.

**TOC anchors vs. the router — a real collision, handled.** Plain `href="#h-12"`
would fire `hashchange`, `parseHash()` would match neither `/read/` nor `/c/` nor
`/q/`, and **every TOC click would eject the reader to the browse grid**. Entries
are therefore `href="#/read/<id>/§12"`; `parseHash` gains one branch that sets an
anchor and **does not re-render**, and `history.replaceState` is used while scrolling.
This also kills `javascript:void 0`, unblocks a strict CSP, and moves the AT virtual
cursor. An `IntersectionObserver` drives the active entry.

**Position is a block anchor, not a percentage:** `{b, o, h, s}` — block index, char
offset, heading id, first 40 chars. It survives a text-size change, rotation, and a
different device; a percentage survives none of those, and under `content-visibility`
a document-height percentage is an estimate that drifts as sections render. The
`pct > 0.01 && pct < 0.99` guard is removed — finishing a text should record that you
finished it. Legacy floats are migrated once.

Saved on `scrollend` + `visibilitychange` + `pagehide` — three writes a session,
not a synchronous `localStorage` write at 10 Hz through momentum scroll.

**The colophon**, after the last block — the product's identity claim as an object:

```
            ────────────────────  ⁘  ────────────────────
                      C O L O P H O N
 abrahamic/bible-kjv.txt · 4,452,069 bytes · 99,598 lines
 821,514 words · ≈76 h at 180 wpm
 sha-256   a3f19c04 8b7e2d61 5c0a94ff 1e6b73da
           29c8e015 47bd3a92 fe081c6b d5741e39
 verify    shasum -a 256 abrahamic/bible-kjv.txt
 Rendered: source line-wraps rejoined into paragraphs. The bytes
 above are unmodified; the command verifies them.
 Public domain. Served as retrieved.
            ─────────────────────────────────────────────
```

All 64 characters in 4×16 groups so a human can actually compare them. **The
"Rendered:" line is mandatory** — it is what converts the paragraph model from silent
mediation into a declared transformation, in a product named *unmediated*.

### 4.4 The reader on a phone (the primary surface)

```
  first paint              after scrolling          Contents sheet
┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐
│ ‹  Judges 6   ⌕  Aa │ │▂▂▂▂▂▂▂░░░░░░░░ 41 % │ │       ▁▁▁▁▁▁        │
│▂▂▂▂▂▂░░░░░░░░░ 41 % │ ├─────────────────────┤ │ C O N T E N T S   ✕ │
├─────────────────────┤ │▍ and the children   │ │ ─────────────────── │
│▍ T H E   O L D      │ │▍ of Israel asked    │ │   Genesis           │
│▍ T E S T A M E N T  │ │▍ the LORD, saying,  │ │ ▍Judges           ● │
│▍                    │ │▍ Who shall go up    │ │   ● Judges 6        │
│▍ The Book of Judges │ │▍ for us against     │ │     Judges 7        │
│▍ ──── ⁘ ≈76 h ────  │ │▍ the Canaan-ites…   │ │   Ruth              │
│▍ NOW AFTER THE      │ ├─────────────────────┤ └─────────────────────┘
│▍ DEATH of Joshua…   │ │ ⌃ Judges 6 · 41 % ☰ │  bottom sheet, thumb-
└─────────────────────┘ └─────────────────────┘  reachable, 44px targets
```

18.2px / 1.66 / 20px gutters → **335px of measure ≈ 40 characters**, against 291px
today (375 − 48 container − 36 card inset). Killing the reading card returns the 36px
its inset was consuming. Forty characters is short, but 40ch *is* a phone, and
`hyphens: auto` — only possible because the paragraphs are now real — matters ten
times more here than on desktop. The header auto-hides on scroll-down (≈7% more text
per screen) and returns on any upward scroll. Contents returns as a bottom sheet at
exactly the width where a 909,011-word Bible most needs a map.

### 4.5 Search

```
┌ rail 240 — result facets ─┐┌─ main 960 ─────────────────────────────┐
│ I N   T R A D I T I O N   ││ 12 texts contain "archon" · BM25 ·      │
│   All                 12  ││ showing 1–12                            │
│ ▍Abrahamic         ●  11  ││ ─────────────────────────────────────── │
│ ▍Eastern               1  ││ ┌─────────────────────────────────────┐ │
│ ▍Mythology             —  ││ │▍The Apocryphon of John   ABRAHAMIC  │ │
│ ▍Esoteric              —  ││ │ 7,720 words · ≈43 m · 16+ matches   │ │
│ ───────────────────────── ││ │ …and the ARCHONS created seven      │ │
│ E X T E N T               ││ │  powers for themselves…             │ │
│ ▢ Fragment             —  ││ │ …the chief ARCHON saw the virgin…   │ │
│ ▢ Tract                8  ││ └─────────────────────────────────────┘ │
│ ▣ Book                 3  ││                                         │
│ ▣ Monument             1  ││                                         │
└───────────────────────────┘└─────────────────────────────────────────┘
```

**Honesty rules — correctness requirements, not polish.** The shipped index stores a
**quantised** term frequency: the client already reads `tf = 2^(q−1)` (`:730`), so an
exact occurrence count **is not derivable**. `archon` occurs in exactly **12**
documents with buckets 32/16/4/2/2/2/2/2/1/1/1/1.

- The total is the **document frequency** — *"12 texts contain «archon»"*. Never a
  truncation reported as a total.
- Per-result strength prints as **`"16+ matches"`** — the bucket is a mathematical
  lower bound and the `+` says so. For results whose full text is already fetched for
  excerpts, the exact count is computed and printed **without** the `+`. Nothing is
  invented. In a product whose identity is verified provenance, fabricated precision
  is the one failure mode that cannot ship.
- Two excerpts per result, chosen by highest local term **density**, not `indexOf` on
  the first hit.
- Facets **scope** the query.
- **`"Loading excerpt…"` as a terminal state is deleted** — every unresolved excerpt
  falls back to the epigraph, which always exists.
- Index warming is a designed state, not a silent answer change seconds later.

### 4.6 Details

**Logo mark.** Retire the ring-and-dot — it is the most-cloned mark in software, and
the DOM version and `favicon.svg` are not even the same geometry. Replace with **four
bottom-aligned bars on a 24×24 grid**, heights proportional to √(90/27/23/11) →
22/12/11/8px, each in its tradition binding colour. It is unique, it is derived from
the collection so it *means* something, it teaches the colour code at a glance, and
four heavy bars survive 16px where a thin ring plus a floating dot does not.
`favicon.svg` takes the identical geometry.

**Icons.** All five emoji/dingbat glyphs are replaced by a 6-symbol inline SVG sprite
on one 20px/1.5px grid. **Selection** is styled for the first time. **Scrollbars**
get a `--rule-edge` thumb on a *transparent* track — the current `--bg` track is
darker than the panel it sits in and punches a black trench down the reading surface.
**Focus rings** get a `box-shadow` halo so they survive against an adjacent card, and
both `outline: none` declarations are scoped to `:focus:not(:focus-visible)`.
**Focus is returned** on reader exit to the card that opened it — today it is managed
on entry and abandoned on every exit. Empty, loading and failure states are designed:
skeletons at the exact final heights, **no shimmer** (a library does not sparkle).
`forced-colors` and `prefers-contrast` blocks ship with the palette.

---

## 5. PHASED BUILD PLAN

Each phase is independently shippable, leaves the product fully working, and is
verified by `python3 corpus.py verify` + the golden-path Playwright script
(26 checks, desktop + phone, zero console errors) before it is committed.

| # | Phase | What lands | Must still work |
|---|---|---|---|
| **1** | **Foundations** | Token system: ramp, ink, rubric, spacing scale, radius, elevation, motion tokens. Type scale + `@font-face` normalisation + tracking law. Contrast fixes. Grain repaired and bound to surfaces. Bloom. Selection, scrollbars, focus rings, `color-scheme`, `forced-colors`, `prefers-contrast`. SVG icon sprite replacing emoji. New logo + favicon. The stale `159` removed. | everything — this phase is CSS + tokens, no structural change |
| **2** | **The reader becomes a page** | Delete every `max-height: calc(100vh − N)` and the reader's border/radius/card. Window scroll drives progress **and** resume. `--header-h` via `ResizeObserver`; `scroll-padding-top`. Quire rule replaces the hidden 3px bar. Anchor-based resume + legacy migration. Rail keeps its own overflow. | reader, TOC (still line-based this phase), find, A±, drawer, routing |
| **3** | **`segmentText()` — the paragraph model** | Adaptive per-file classification; prose reflow / verse preservation / heading detection; verse refs to the gutter; sections with `content-visibility`; incipit; hyphenation; measure in `em`; the reading dial as a coupled index. **Find-within rebuilt over block strings.** | find-within (rebuilt), TOC, resume, A±, no-`innerHTML` |
| **4** | **Contents** | TOC from real block anchors; the `/§N` router branch; `IntersectionObserver` active state; front-matter suppression; phone contents sheet. | routing, back/forward, reader |
| **5** | **Browse** | Grid ladder (3–4 cols, `repeat(N, minmax(0,1fr))`); card rebuild — binding edge, extent duration, epigraph with apparatus suppression, resume underline; Monument span; Fragment shelf; threshold + `CONTINUE`; phone index rows. | filter, routing, cards open the reader |
| **6** | **Search** | Honest df-based totals; `N+ matches`; density excerpts; **`Loading excerpt…` deleted**; rail facets that scope the query; index-warming state; pagination. | BM25 ranking, highlighting, live count |
| **7** | **Motion & a11y** | The five named motions; the designed reduced-motion variant; `inert` drawer + focus trap + focus return; touch targets ≥44px under `pointer: coarse`; live regions; landscape/zoom cases. | all of the above under both motion preferences |
| **8** | **Colophon & the details pass** | The colophon with the full 64-char hash and the mandatory "Rendered:" line; reader title page; empty/loading/failure states; final contrast audit. | everything |

Phases 1–2 are the largest visible change for the least risk. Phase 3 is the
highest-risk phase and is gated on the measurements in §3.3. Phases 5–6 depend on
nothing in 3–4 and could be reordered if needed.

---

## 6. CONSTRAINT DECISIONS

**Hard constraints — all respected, none crossed.**

- **Single `index.html`, no build step, no framework, no npm, no external CDN or font
  host.** Everything below ships inline. The `@font-face` rules use `local()` sources
  only — **no font file, no network request, zero bytes on the wire**. The icon sprite
  is inline SVG. The grain is inline data-URI SVG. `favicon.svg` is an existing
  same-origin file whose geometry is updated in place.
- **No tracking, no analytics.** Nothing added.
- **Dark-first, navy + cyan lineage, film grain.** The palette is *developed*, not
  replaced: hue locked at the existing 222–228° navy axis, and the cyan moves
  189°→187° at 75% saturation instead of 94.5%. The grain is kept and repaired
  (`background-size`, `mix-blend-mode`, bound to surfaces). **No light theme, and no
  light/sepia reading mode is proposed** — `--ink-read` at 13% saturation delivers the
  warmth that a sepia mode would have been for, inside the dark identity, at zero
  cost in modes to maintain.
- **Never break the working product.** Every phase is gated on `corpus.py verify`
  staying PASS and the 26-check golden path staying green on desktop *and* phone,
  with zero console errors.
- **Pure DOM rendering.** The segmenter, the verse spans, the marks and the incipit
  are all `createElement` + `textContent`. No `innerHTML` is introduced.

**Deviations from the synthesised spec, and why.**

1. **`corpus.py` is not touched** — the handoff forbids changing its logic. The
   synthesis proposed a build-time `seg` classification field and a build-time
   epigraph field in `catalog-summary.json`. Both are dropped. Classification moves to
   runtime instead, which the measurements make free (8–33ms parse on the worst file),
   and the epigraph problem is handled by client-side apparatus suppression (§4.2).
   The card's proposed "edition/translator" line is cut outright — there is no field
   for it and inventing one would be fabrication.
2. **Punctuation normalisation is deferred, not adopted.** Curling 62,968 straight
   apostrophes and resolving 50,340 double-hyphens (first 40 files alone) is a real
   typographic gain, but apostrophes carry meaning in this corpus — avagraha in
   Sanskrit transliteration, glottal stops in transliterated Arabic and Hebrew — and a
   wrong curl is a fidelity error in a product named *unmediated*. It is not in the
   eight phases; it is flagged for a later pass with a per-script guard.
3. **Collection cards** (folding 53 Nag Hammadi tractates into one expandable object)
   are described in §4.2 as the right end-state but are **not** in the phase plan.
   The grouping is derivable client-side, but it changes what "151 texts" means on
   screen, which is a product decision rather than a design one.

**Soft-constraint asks: none.** Everything specified above ships inside the single
`index.html` with no new files, no webfont, no bundler, and no third-party host. The
one thing that would have required an ask — a self-hosted text serif — was considered
and **rejected on the merits**, not just on constraint: a good text face is 100–300 KB
inline in a file that must paint immediately, and `size-adjust`-normalised Iowan Old
Style / Georgia / Noto Serif is genuinely excellent for this at zero cost. The
remaining known crossing in the repo is GAMEPLAN's FLAG 2 (a service worker for
offline reading), which is unchanged and still awaiting a decision.

**One data issue for the owner, outside this pass's mandate:** the catalog previews
are a blind head-of-file grab, so at least 11 of 151 show apparatus or a *different
work entirely* — the *Epic of Gilgamesh* card currently opens on *The Pathfinder* by
James Fenimore Cooper. This design suppresses them at render time so nothing broken is
displayed, but the fix is a preview regeneration in `corpus.py`, which this pass is
not permitted to touch.
