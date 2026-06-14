# Plan

> Ordered list of actions to reach the goal. Each step should be small enough to complete in one sitting. Update status as work progresses. When a step is done, mark it and update `current-state.md` and `action-log.md`.

**Last updated:** 2026-06-14

---

## Phase 1 — SVG Assets

All decorative and structural SVG files. These must exist before HTML is written so they can be referenced correctly.

- [x] **1.1** Create `assets/svgs/logo-placeholder.svg`
- [x] **1.2** Create `assets/svgs/menu-header.svg`
- [x] **1.3** Create `assets/svgs/flower-neon.svg`
- [x] **1.4** Create `assets/svgs/starburst.svg`
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

## Future Phases (not planned in detail yet)

- **Phase 6** — `gallery.html` with real PNG photos
- **Phase 7** — Additional pages as needed
- **Phase 8** — Replace placeholder SVGs with final designed assets
