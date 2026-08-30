# Plan

> Ordered list of actions to reach the goal. Each step should be small enough to complete in one sitting. Update status as work progresses. When a step is done, mark it and update `current-state.md` and `action-log.md`.

**Last updated:** 2026-08-26

---

## Phase 1 — SVG Assets

All decorative and structural SVG files. These must exist before HTML is written so they can be referenced correctly.

- [x] **1.1** Create `assets/svgs/logo-placeholder.svg` *(superseded — no longer referenced, see Phase 8)*
- [x] **1.2** Create `assets/svgs/menu-header.svg`
- [x] **1.3** Create `assets/svgs/flower-neon.svg` *(superseded — no longer referenced, see Phase 8)*
- [x] **1.4** Create `assets/svgs/starburst.svg` *(superseded — no longer referenced, see Phase 8)*
- [x] **1.5** Create `assets/svgs/divider.svg`

---

## Phase 2 — CSS Foundation

`style.css` only. No HTML yet.

- [x] **2.1** Define CSS custom properties (all colors, font stack, shadow values)
- [x] **2.2** Reset / base styles (box-sizing, margin, body bg, default font)
- [x] **2.3** Layout scaffolding (page wrapper, header, nav, main, footer)
- [x] **2.4** Nav bar styles (logo, nav strip, link styles, hover, hamburger)
- [x] **2.5** Content card styles (teal bg, bevel borders, image grid)
- [x] **2.6** Typography styles (heading classes, color utility spans, sidebar nav, marquee)
- [x] **2.7** Decorative element styles (flower/starburst sizing, divider, caution stripe, blink, hit counter, badge)
- [x] **2.8** Footer styles
- [x] **2.9** Responsive breakpoint (768px): mobile layout, hide desktop nav, show hamburger
- [x] **2.10** *(added 2026-08-22, undocumented at the time)* Custom `Zenfix` display font via `@font-face` — see Phase 8.3, conflicts with `design-references.md`
- [x] **2.11** *(added 2026-08-24)* Shared `.lightbox` styles (moved out of gallery.html's page-local `<style>` block so about.html could reuse it)
- [x] **2.12** *(added 2026-08-24)* `.card-grid--fill` modifier for evenly-filled card rows

---

## Phase 3 — HTML Pages

- [x] **3.1** Create `index.html`
- [x] **3.2** Create `about.html`
- [x] **3.3** Create `construction.html`

---

## Phase 4 — Mobile Nav JS

- [x] **4.1** `assets/js/nav.js` — hamburger toggle, ~7 lines vanilla JS

---

## Phase 5 — Review & Polish

- [x] **5.1** Visual check all 3 pages at 1024px desktop — passes
- [x] **5.2** Mobile check at 375px — passes
- [x] **5.3** Fixed nav links not vertically centered; fixed mobile sidebar height (hid decorative SVGs on mobile)
- [x] **5.4** Update `asset-catalog.md`
- [x] **5.5** Final `current-state.md` update

---

## Phase 6 — Gallery Page *(done 2026-08-22, undocumented until 2026-08-24)*

- [x] **6.1** Create `gallery.html` — photo grid + click-to-enlarge lightbox, 7 artworks

---

## Phase 7 — Music Page *(done 2026-08-22, not originally planned; added retroactively)*

- [x] **7.1** Create `music.html` — YouTube playlist embed page
- [x] **7.2** *(added 2026-08-26)* Added 2 tracks (Jeff Buckley, Natasha Bedingfield) — playlist now 12; hardcoded header count updated to match

---

## Phase 8 — Cleanup & Open Decisions *(new, 2026-08-24)*

- [x] **8.1** Replace remaining `placeholder-kitten.jpg` uses in `about.html` "More Photos" section (4 cards) with real photos — done 2026-08-26 with `britbrit.jpg`, `buffy.jpg`, `aali.jpg`, `courtney.jpg`
- [ ] **8.2** Decide fate of orphaned assets: `logo-placeholder.svg`, `flower-neon.svg`, `starburst.svg`, `logo1.PNG`, `logo2.png`, `logo_1234.png`, `asset1.PNG`, `asset2.PNG`, and now `placeholder-kitten.jpg` — none are referenced by any page anymore
- [x] **8.3** Resolve the Zenfix custom font vs. `design-references.md`'s "system fonts only" rule — user approved keeping it 2026-08-24; `design-references.md` amended to allow a self-hosted display font
- [x] **8.4** Bring `directory-structure.md` and `asset-catalog.md` current
- [x] **8.5** *(added 2026-08-24)* Homepage Featured Pics made click-to-enlarge via the shared lightbox
- [x] **8.6** *(added 2026-08-24)* `gallery.html` heading renamed "Photo Gallery" → "Artwork Gallery"; all 7 artworks captioned with real titles + medium instead of placeholder "Artwork N"

---

## Phase 9 — Project Info Page *(new, 2026-08-26)*

- [x] **9.1** Create `project-info.html` — "My Diploma" statement + supervisor credits, `pjatk.png` as the side photo, shared lightbox
- [x] **9.2** Add "Project Info" to every nav (mobile, sidebar, footer) on all pages, positioned between About Me and Gallery
- [x] **9.3** `pjatk.png` rendered at true 1:1 ratio, uncropped (`height:auto` + `aspect-ratio:1/1`)
- [x] **9.4** Corrected main supervisor title to "prof. dr hab. Jacek Staszewski"
- [ ] **9.5** *(optional, observed 2026-08-26)* Supervisor table has a wide gap between the label and value columns; "PJATK" card caption (`c-lime` on light blue) reads faint. Neither requested — left as-is pending a decision.

---

## Future Phases (not planned in detail yet)

- **Phase 10** — Additional pages as needed (e.g. Guestbook, Downloads, Privacy Policy, Terms — all currently link to `construction.html`)
