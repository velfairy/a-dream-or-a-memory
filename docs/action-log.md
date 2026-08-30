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
- [x] Caught up `docs/plan.md`, `docs/directory-structure.md`, and `docs/asset-catalog.md` to match actual repo state
- [x] Resolved the Zenfix font decision — user chose to keep it; amended `design-references.md` to allow a self-hosted display font
- [x] Committed and pushed to `origin/main` as [`35d2e02`](https://github.com/velfairy/a-dream-or-a-memory.git) — About Me overhaul, homepage grid fix, doc catch-up

---

## 2026-08-24 — Session 3 — Featured Pics lightbox, gallery renaming, session handoff

- [x] `index.html`: homepage Featured Pics (all 4 images) now open the shared lightbox on click, same as gallery.html
- [x] `gallery.html`: heading changed "Photo Gallery" → "Artwork Gallery"; all 7 artworks recaptioned with real titles + medium (were placeholder "Artwork N" labels) — colors/font untouched
- [x] Committed and pushed to `origin/main` as [`3e5cd22`](https://github.com/velfairy/a-dream-or-a-memory.git)
- [x] Updated `plan.md`, `current-state.md`, `asset-catalog.md` to reflect the above
- [ ] **Handoff for next session:** user is starting a new conversation to add a new feature/page. Nothing is mid-flight or blocking — see `current-state.md` "Ready for Next Steps" for the standing backlog (kitten placeholders in About "More Photos", two unused real photos `me2.jpeg`/`misty.jpeg` sitting in `assets/images/`, orphaned asset cleanup).

---

## 2026-08-26 — Session 4 — About "More Photos" real images & new Project Info page

- [x] `about.html` "More Photos": replaced all 4 `placeholder-kitten.jpg` cards with real images — `britbrit.jpg` ("hehe"), `buffy.jpg` ("so fun!!"), `aali.jpg` ("luv this"), `courtney.jpg` ("omg!!"); generic `alt="photo"` replaced with per-image alt text. Card labels and colors untouched. `placeholder-kitten.jpg` is now referenced by no page (Phase 8.1 done).
- [x] Noted that `me2.jpeg` and `misty.jpeg` — listed as unused-but-available at session start — are no longer in `assets/images/`; the four new images appeared in their place. Recorded as removed from the repo; catalog rows replaced.
- [x] Created `project-info.html` — new "Project Info" page, built from the `about.html` skeleton so header/marquee/sidebar/footer/lightbox all match:
  - `<h1>` "My Diploma" using existing `c-cyan` / `c-hotpink` classes
  - Side photo card with `pjatk.png`, click-to-enlarge via the shared lightbox
  - Diploma statement paragraph in a standard `.content-block .body-text`
  - Supervisor credits (main / technical / theoretical) in the same table style as about.html's Quick Facts
  - Only existing color classes and inline colors already in use elsewhere — no new colors introduced
- [x] `pjatk.png` sizing, in two passes: first inline `object-fit: contain` + white backing (the card's default `cover` was cropping the top and bottom off the circular emblem), then — at the user's request for true original ratio — `height:auto` + `aspect-ratio:1/1` so the square 554×554 source renders uncropped at 182×182 instead of a 183×150 letterbox. Card ends up 200×221; the extra 21px is the "PJATK" caption, which the user chose to keep for consistency with every other card on the site.
- [x] Added "Project Info" to every nav on every page — mobile nav, sidebar nav, footer nav — positioned between About Me and Gallery (11 links across 5 existing pages, verified by parse: index 3, about/gallery/music/construction 2 each)
- [x] Verified via the running dev server: all pages return 200, all images load with real dimensions, no horizontal overflow, stylesheet and Zenfix font applied
- [x] Updated `directory-structure.md`, `asset-catalog.md`, `plan.md` (Phase 8.1 closed, new Phase 9), and `current-state.md`
- [x] Committed and pushed to `origin/main` as [`b561856`](https://github.com/velfairy/a-dream-or-a-memory.git) — Project Info page + real About photos

### Later in the same session

- [x] `project-info.html`: corrected MAIN SUPERVISOR from "prof. Jacek Staszewski" to "prof. dr hab. Jacek Staszewski". Text-only change inside the existing `<td>` — the `style` attribute is byte-for-byte unchanged, so color and font are untouched.
- [x] Confirmed `project-info.html` renders correctly in the browser at desktop width (first screenshot of the session — the preview pane had refused to composite frames earlier)
- [x] `music.html`: added two tracks to the `tracks` array — Jeff Buckley — Everybody Here Wants You (`hGzHCvkndnI`) and Natasha Bedingfield — Pocketful of Sunshine (`ztCMNHAT8uM`); matched the file's existing `Artist — Song` title format and column alignment
- [x] `music.html`: playlist header bumped "PLAYLIST — 10 TRACKS" → "12 TRACKS" (it was hardcoded and would otherwise have gone stale)
- [x] Verified in the running page: 12 rows render, array length 12, and clicking rows 11/12 loads the correct `youtube.com/embed/…` URLs with the track-name display updating
- [ ] **Observed, not fixed** (neither was requested): `project-info.html`'s supervisor table leaves a wide empty channel between the gold label column and the pink value column, because the label column sizes to the longest label while the value column absorbs the rest. Also the "PJATK" card caption is `c-lime` (pale green) on the light-blue card and reads faint compared to labels elsewhere.
- [x] Fixed `construction.html`'s mobile nav GALLERY link — pointed at `construction.html`, now `gallery.html`. Audited every nav on all six pages for the same bug (a link labelled with a page that exists but routed to the construction page); this was the only instance. The other `construction.html` targets are correct — those pages are genuinely unbuilt.
- [x] Committed and pushed to `origin/main` as [`355e0e4`](https://github.com/velfairy/a-dream-or-a-memory.git) — music tracks + supervisor title
- [ ] **Not done / open:** Orphaned-asset cleanup (Phase 8.2) still undecided, now including `placeholder-kitten.jpg`. `goal.md`'s page table still omits `music.html` and `project-info.html`. Optional polish in plan 9.5 (supervisor table gap, faint PJATK caption).
