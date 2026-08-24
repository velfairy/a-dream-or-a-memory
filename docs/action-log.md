# Action Log

Chronological record of all build steps. Updated as work is completed.

---

## 2026-06-14 — Session 1 — Planning & Setup

- [x] Discussed technology choice — decided on plain HTML + CSS + minimal vanilla JS (no framework, no build step)
- [x] Analyzed GenerationGirl.com (~1999) screenshot as visual reference
- [x] Defined two asset types: SVG (geometric/decorative/logos) and PNG/JPG (real photos)
- [x] Downloaded kitten placeholder image from cataas.com → `assets/images/placeholder-kitten.jpg`
- [x] Decided on typography approach: SVG text for logos/headers, Impact + CSS neon text-shadow for nav/body
- [x] Created full `docs/` folder:
  - `docs/directory-structure.md`
  - `docs/asset-catalog.md`
  - `docs/design-references.md`
  - `docs/action-log.md` (this file)
  - `docs/goal.md`
  - `docs/current-state.md`
  - `docs/plan.md`
- [x] Created `.claude/CLAUDE.md` — project rules for Claude (session start ritual, doc update rules, design constraints)
- [x] Added `construction.html` to goal, plan, and directory structure docs — all unbuilt routes link here
- [x] Overhauled `design-references.md` with authentic Y2K constraints: flat colors only, no CSS shadows/gradients/glow, hard drop shadows (2px 0-blur), steps() animations, system fonts, fixed pixel layouts, low-res JPEG aesthetic
- [x] Decided against SVG→JPEG build pipeline (sharp/puppeteer) — raster assets will be hand-authored instead. Keeps project free of Node/build tooling.
- [x] Phase 1 complete — all 5 SVGs created (flat fills, no filters, hard drop shadows only):
  - `assets/svgs/logo-placeholder.svg`
  - `assets/svgs/menu-header.svg`
  - `assets/svgs/flower-neon.svg`
  - `assets/svgs/starburst.svg`
  - `assets/svgs/divider.svg`
- [x] Phase 2 complete — `style.css` created (see previous entry)
- [x] Phase 3 + 4 + 5 complete — all HTML pages and nav JS created:
  - `index.html` — home, sidebar, marquee, card grid, hit counter
  - `about.html` — profile, facts table, faves, photo grid
  - `construction.html` — CSS worker, caution stripes, blink animation
  - `assets/js/nav.js` — hamburger toggle
  - Fixed `menu-header.svg` — removed baked-in text (was duplicating HTML nav links)
  - Verified all three pages in browser at 1024px desktop width
- [x] Phase 5 — review and polish:
  - Fixed nav links vertical centering (align-self: stretch on .site-nav)
  - Fixed mobile sidebar height (hide deco SVGs at ≤768px)
  - Verified index, about, construction at 1024px and 375px
  - v1 marked complete

- [x] Phase 2 complete — `style.css` created:
  - CSS custom properties (colors, fonts, shadows, borders)
  - Reset and base styles
  - Layout scaffolding (page-wrapper, site-header, site-body, sidebar, main, footer)
  - Nav bar (logo strip, nav links, hamburger button, mobile overlay)
  - Content cards (teal bg, bevel borders, grid)
  - Typography (heading-neon classes, color utilities, sidebar-nav, marquee)
  - Decorative (flower/starburst sizing, divider, caution stripe, blink, hit counter, badge-new)
  - Footer
  - steps()-only animations (blink, logo-pulse, marquee-scroll, caution-scroll)
  - 768px responsive breakpoint (flat fills, no filters, hard drop shadows only):
  - `assets/svgs/logo-placeholder.svg`
  - `assets/svgs/menu-header.svg`
  - `assets/svgs/flower-neon.svg`
  - `assets/svgs/starburst.svg`
  - `assets/svgs/divider.svg`

---

## 2026-08-22 — Session (undocumented) — Major expansion, not logged at the time

> **Note added retroactively on 2026-08-24:** 38 commits landed on this date without corresponding action-log/current-state/plan/asset-catalog updates, in violation of this project's own doc-update rules. Reconstructed here from `git log` only — no session narrative is available, just what shipped:

- [x] Replaced placeholder logo with final "a dream or a memory" logo (`logo.png`), after several intermediate iterations (`logo1.PNG`, `logo2.png`, `logo_1234.png` — left in `assets/images/` unused)
- [x] Redesigned colors, fonts, and assets; added custom `Zenfix-Demo.ttf` display font via `@font-face` — **this conflicts with `design-references.md`'s explicit "system fonts only, no web fonts" rule** and has not been reconciled
- [x] Added real photos (`1.jpeg`–`7.jpeg`, `33.jpeg`, `55.jpeg`) replacing some kitten placeholders; swapped 1.jpeg/2.jpeg → 33.jpeg/55.jpeg on the homepage
- [x] Added `gallery.html` — lightbox-enabled photo grid, 7 artworks (page-local `<style>` block, not in shared `style.css`)
- [x] Added `music.html` — YouTube playlist player page (not in `directory-structure.md`, `plan.md`, or `goal.md`)
- [x] Replaced nav buttons with a tiled star-gif background (`GGDstarlineanimation1.gif`) across the nav bar on all pages
- [x] Added `underconstruction.gif` to `construction.html`
- [x] Various layout/color fixes: sidebar full-height stretch, card rounded corners + baby-blue frames, darkened body text and update dates for legibility, removed dot row from nav header, fixed sidebar/footer Gallery links
- [x] Fixed an encoding-corruption incident where smart quotes broke CSS class names in `index.html`; repaired via direct byte replacement
- [ ] `docs/plan.md` and `docs/asset-catalog.md` still do not reflect any of the above — carried forward as open work

---

## 2026-08-24 — Session 2 — Featured Pics layout fix & About Me content pass

- [x] Fixed `index.html` "Featured Pics!!" card grid: 4 cards were fixed-width and wrapping unevenly inside the main column, leaving dead space. Added a `.card-grid--fill` modifier (CSS Grid, `repeat(4, 1fr)`, 2 columns under 768px) in `style.css` and applied it only to that section — other `.card-grid` usages (about.html) untouched.
- [x] `about.html`: changed page heading "All About Us!!" → "All About Me!!" (text only, same spans/classes/colors)
- [x] `about.html`: replaced profile photo placeholder (`placeholder-kitten.jpg`) with `assets/images/me1.jpeg`; made it clickable to open a fullscreen lightbox
- [x] Moved the lightbox CSS (previously a page-local `<style>` block duplicated only in `gallery.html`) into the shared `style.css` so it can be reused across pages without violating the single-stylesheet rule; added the lightbox markup/script to `about.html` following the same pattern as `gallery.html`
- [x] `about.html` Quick Facts table: changed label color from `#ffff00` to `#b8860b` (dark goldenrod) for legibility against the translucent `.content-block` background — same warm-yellow already used for homepage update dates. Filled in real values: Name (Julia), Age (24), Location (Warsaw), Sign (Leo Sun, Virgo Moon, Libra Rising); Mood and Status left unchanged.
- [x] Rewrote `docs/current-state.md` from scratch to match actual repo state (see that file for full detail)
- [ ] **Carried over — not done this session:** `docs/plan.md` and `docs/asset-catalog.md` still need the same catch-up pass. See `current-state.md` "Known Issues" for the full list.
