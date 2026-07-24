# The Source Corpus — Project Context

## What This Is
A static web reader + CLI for 159 ancient texts spanning every major world tradition. Layer 1 of a consciousness infrastructure protocol. No framework, no build step, no dependencies.

## Architecture
- `index.html` — Single-file web app (vanilla JS/CSS, dark mode, full-text search, reader view)
- `corpus.py` — Python CLI for search and browse (`python3 corpus.py stats|list|search|read`)
- `catalog.json` — Metadata for 159 texts (title, tradition, category, word count, SHA256, preview)
- `*.txt` — 158 plain text files (77 MiB) across 4 categories: abrahamic/, eastern/, esoteric/, mythology/
- Deployed to Vercel (static hosting, no server)

## Key Commands
- `python3 corpus.py stats` — corpus statistics
- `python3 corpus.py list -c eastern` — list texts by category
- `python3 corpus.py search "archon" -m 5` — full-text search
- `python3 corpus.py read "emerald tablet"` — read a text
- `vercel --prod --yes --scope point5ivejointlive-6501s-projects` — deploy

## Design Intent
- Dark navy (#0a0e1a) background, cyan (#06b6d4) accent, violet (#8b5cf6) for depth
- Film grain overlay (SVG noise, opacity 0.015)
- Flowing, not geometric. Premium, not flashy.
- ADHD-friendly: visually calm, cognitively dense
- No external dependencies. No CDN. No tracking. No analytics.

## Constraints
- Keep it dependency-free. No npm, no frameworks, no build step.
- The web app must remain a single `index.html` file.
- All text files are public domain. Tooling is MIT licensed.
- The .gitignore must not ignore catalog.json, index.html, corpus.py, README.md, LICENSE, AUDIT.md, CLAUDE.md.

## Current State
- Live at https://ancient-texts-weld.vercel.app
- GitHub: https://github.com/Point5ive/the-source-corpus
- Full audit completed: see AUDIT.md for all findings (0 P0, 9 P1, 25 P2, 8 P3)
- Verification: 159/159 SHA256 hashes verified, CLI passes all behavior checks
