# Current State

> This file is a snapshot. Update it at the end of every work session or whenever a meaningful milestone is reached. It should always reflect reality, not intent.

**Last updated:** 2026-08-26

---

## Project Phase

**Beyond v1** — v1 (index, about, construction) shipped 2026-06-14. Gallery and Music landed 2026-08-22, doc catch-up happened 2026-08-24, and Project Info was added 2026-08-26. All planning docs are now current; the last placeholder image is gone from the site.

---

## What Exists

### Docs
- [x] `docs/goal.md` — desired final state. **Slightly stale:** its page table still omits `music.html` and `project-info.html`, and lists Gallery as "planned" though it shipped.
- [x] `docs/current-state.md` — this file
- [x] `docs/plan.md` — current; Phase 9 (Project Info) added, 9.1–9.4 done, 9.5 open as an optional polish item
- [x] `docs/action-log.md` — current through Session 4 (2026-08-26)
- [x] `docs/directory-structure.md` — current
- [x] `docs/asset-catalog.md` — current
- [x] `docs/design-references.md` — color palette, typography rules, layout principles

### Pages
- [x] `index.html` — home, sidebar, marquee, "Featured Pics!!" grid (all 4 click-to-enlarge), "Latest Updates", hit counter
- [x] `about.html` — profile card (`me1.jpeg`, click-to-enlarge), Quick Facts (real data), Faves, "More Photos" (**now 4 real photos** — no placeholders left)
- [x] `project-info.html` — **new 2026-08-26.** "My Diploma" heading, `pjatk.png` side photo (click-to-enlarge, rendered square and uncropped at 182×182), diploma statement, supervisor credits table (prof. dr hab. Jacek Staszewski / mgr inż. Marcin Wichrowski / mgr Adam Trwoga). Built from the `about.html` skeleton; uses only existing color classes and needed no new CSS.
- [x] `construction.html` — CSS worker animation, caution stripes, blink text, `underconstruction.gif`
- [x] `gallery.html` — "Artwork Gallery", lightbox grid, 7 captioned artworks (has its own page-local `<style>` block — pre-existing exception to the single-stylesheet rule)
- [x] `music.html` — YouTube playlist player, **12 tracks** as of 2026-08-26 (Jeff Buckley and Natasha Bedingfield added). Note: the playlist header count is hardcoded in the markup, so it must be updated by hand whenever the `tracks` array changes.

### Navigation
Every page carries "Project Info" between "About Me" and "Gallery" in all three nav locations it has (mobile nav, sidebar nav where present, footer nav). Verified 2026-08-26: index 3 links, about/gallery/music/construction 2 each, project-info 3.

All nav links across all six pages were audited 2026-08-26 for the "labelled with a page that exists but routed to `construction.html`" bug. `construction.html`'s mobile GALLERY link was the only instance and is fixed. Remaining `construction.html` targets (MORE STUFF, Guestbook, Links, Downloads, Privacy Policy, Terms) are correct — those pages are genuinely unbuilt, which is what `goal.md` requires.

### Code
- [x] `style.css` — custom properties, reset, layout, nav, cards (+ `.card-grid--fill`), typography, decorative, footer, animations, shared lightbox, 768px breakpoint. **Unchanged this session** — the new page needed no new CSS.
- [x] `assets/js/nav.js` — hamburger toggle

### Assets — SVGs (`assets/svgs/`)
- [x] `menu-header.svg`, `divider.svg` — in use
- [ ] `logo-placeholder.svg`, `flower-neon.svg`, `starburst.svg` — **orphaned**

### Assets — Images (`assets/images/`)
- [x] `logo.png`, `me1.jpeg`, `asset1.1.png`, `asset2.1.png` — in use
- [x] `britbrit.jpg`, `buffy.jpg`, `aali.jpg`, `courtney.jpg` — about.html "More Photos" (added 2026-08-26)
- [x] `pjatk.png` — project-info.html side photo (added 2026-08-26)
- [x] `33.jpeg`, `55.jpeg`, `3.jpeg`, `4.jpeg` — homepage Featured Pics + gallery
- [x] `5.jpeg`, `6.jpeg`, `7.jpeg` — gallery only
- [x] `underconstruction.gif`, `GGDstarlineanimation1.gif` — in use
- [ ] `placeholder-kitten.jpg` — **now orphaned**, last uses replaced 2026-08-26
- [ ] `logo1.PNG`, `logo2.png`, `logo_1234.png`, `asset1.PNG`, `asset2.PNG`, `1.jpeg`, `2.jpeg` — **orphaned**
- **Removed:** `me2.jpeg` and `misty.jpeg` were present at the start of Session 4 and are no longer in the repo; the four new photos appeared in their place.

### Assets — Fonts (`assets/fonts/`)
- [x] `Zenfix-Demo.ttf` — loaded via `@font-face`, primary `--font-display`. Approved 2026-08-24.

### Config
- [x] `.claude/CLAUDE.md`, `.claude/launch.json` (Node, port 5500), `.claude/server.js`

---

## Open Decisions / Blockers

- **Orphaned assets** (Phase 8.2) — 3 SVGs + 7 PNGs/JPEGs including `placeholder-kitten.jpg`, none referenced by any page. Safe to delete; deletion not requested yet.
- **`gallery.html`'s page-local `<style>` block** — the lightbox portion is duplicated (harmlessly) in the shared `style.css`. Could be cleaned up.

## Known Issues

- `goal.md`'s page table omits `music.html` and `project-info.html`.
- The four "More Photos" images are portrait but render in 123×150 cards with `object-fit: cover`, so each is center-cropped. No distortion, but off-center subjects may clip — **still not visually confirmed**; the About page was never screenshotted.
- `project-info.html`'s supervisor table leaves a wide empty channel between the gold label column and the pink value column (label column sizes to the longest label, value column absorbs the remainder). Cosmetic; not fixed.
- `project-info.html`'s "PJATK" card caption uses `c-lime` (pale green) on the light-blue card and reads faint next to captions elsewhere. Not fixed.
- `music.html`'s playlist header track count is hardcoded, not derived from `tracks.length` — easy to leave stale.

## Ready for Next Steps

- Decide whether to delete the orphaned assets (Phase 8.2)
- Bring `goal.md`'s page table current
- Optionally make about.html's "More Photos" cards click-to-enlarge for consistency with the rest of the site
- Optionally tighten the project-info supervisor table gap and lift the "PJATK" caption contrast (plan 9.5)
