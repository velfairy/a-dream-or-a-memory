# Asset Catalog

**Last updated:** 2026-08-26 — added the four About "More Photos" images and `pjatk.png`; `me2.jpeg`/`misty.jpeg` removed from the repo; `placeholder-kitten.jpg` is now orphaned.

## Images (Raster)

| File | Type | Status | Used On | Notes |
|------|------|--------|---------|-------|
| `assets/images/logo.png` | Logo | ✅ Done | All pages (header) | Current final logo |
| `assets/images/logo1.PNG` | Logo | ❌ Orphaned | — | Intermediate iteration, not referenced |
| `assets/images/logo2.png` | Logo | ❌ Orphaned | — | Intermediate iteration, not referenced |
| `assets/images/logo_1234.png` | Logo | ❌ Orphaned | — | Intermediate iteration, not referenced |
| `assets/images/me1.jpeg` | Photo | ✅ Done | about.html (profile card, click-to-enlarge) | Real photo |
| `assets/images/britbrit.jpg` | Photo | ✅ Done | about.html ("More Photos", card 1 — label "hehe") | Replaced a kitten placeholder 2026-08-26; portrait, center-cropped by `object-fit: cover` |
| `assets/images/buffy.jpg` | Photo | ✅ Done | about.html ("More Photos", card 2 — label "so fun!!") | Replaced a kitten placeholder 2026-08-26; portrait, center-cropped |
| `assets/images/aali.jpg` | Photo | ✅ Done | about.html ("More Photos", card 3 — label "luv this") | Replaced a kitten placeholder 2026-08-26; portrait, center-cropped |
| `assets/images/courtney.jpg` | Photo | ✅ Done | about.html ("More Photos", card 4 — label "omg!!") | Replaced a kitten placeholder 2026-08-26; portrait, center-cropped |
| `assets/images/pjatk.png` | Logo | ✅ Done | project-info.html (side photo card, click-to-enlarge) | PJATK university emblem, 554×554; given inline `height:auto` + `aspect-ratio:1/1` (plus `object-fit:contain` and white backing) so the square emblem renders at its true ratio, uncropped, instead of the card default 183×150 `cover` letterbox. Image renders 182×182; card is 200×221 because the "PJATK" caption adds 21px — caption kept deliberately for consistency with every other card on the site. |
| `assets/images/asset1.1.png` | Decoration | ✅ Done | index.html, about.html, gallery.html, construction.html, music.html | Used as `.deco-flower` |
| `assets/images/asset2.1.png` | Decoration | ✅ Done | index.html, about.html, gallery.html, construction.html, music.html | Used as `.deco-starburst` |
| `assets/images/asset1.PNG` | Decoration | ❌ Orphaned | — | Superseded by `asset1.1.png` |
| `assets/images/asset2.PNG` | Decoration | ❌ Orphaned | — | Superseded by `asset2.1.png` |
| `assets/images/33.jpeg` | Photo | ✅ Done | index.html (Featured Pics, click-to-enlarge), gallery.html ("In her room", acrylics) | Real photo |
| `assets/images/55.jpeg` | Photo | ✅ Done | index.html (Featured Pics, click-to-enlarge), gallery.html ("Still life 2k", acrylics) | Real photo |
| `assets/images/3.jpeg` | Photo | ✅ Done | index.html (Featured Pics, click-to-enlarge), gallery.html ("The carnival", acrylics) | Real photo |
| `assets/images/4.jpeg` | Photo | ✅ Done | index.html (Featured Pics, click-to-enlarge), gallery.html ("I can see you", acrylics, oils) | Real photo |
| `assets/images/5.jpeg` | Photo | ✅ Done | gallery.html ("Who are you now?", acrylics) | Real photo |
| `assets/images/6.jpeg` | Photo | ✅ Done | gallery.html ("Lava lamps", acrylics) | Real photo |
| `assets/images/7.jpeg` | Photo | ✅ Done | gallery.html ("Little self portrait", acrylics) | Real photo |
| `assets/images/1.jpeg` | Photo | ❌ Orphaned | — | Superseded by `33.jpeg` on the homepage |
| `assets/images/2.jpeg` | Photo | ❌ Orphaned | — | Superseded by `55.jpeg` on the homepage |
| `assets/images/underconstruction.gif` | Decoration | ✅ Done | construction.html | Animated GIF worker |
| `assets/images/GGDstarlineanimation1.gif` | Decoration | ✅ Done | All pages (nav bar background, tiled) | Replaces original nav button styling |
| `assets/images/placeholder-kitten.jpg` | Photo | ❌ Orphaned | — | From cataas.com, 400×300 — last uses replaced 2026-08-26; no page references it now |

---

## SVGs (Vector)

| File | Type | Status | Used On | Notes |
|------|------|--------|---------|-------|
| `assets/svgs/menu-header.svg` | Nav banner | ✅ Done | All pages (top nav strip) | Flat #330033 fill, magenta border lines |
| `assets/svgs/divider.svg` | Layout | ✅ Done | Between sections, all pages | Zigzag cyan line between two magenta rules |
| `assets/svgs/logo-placeholder.svg` | Logo | ❌ Orphaned | — | Replaced by `logo.png`; not referenced by any page |
| `assets/svgs/flower-neon.svg` | Decoration | ❌ Orphaned | — | Replaced by `asset1.1.png`; not referenced by any page |
| `assets/svgs/starburst.svg` | Decoration | ❌ Orphaned | — | Replaced by `asset2.1.png`; not referenced by any page |

---

## Fonts

| File | Type | Status | Used On | Notes |
|------|------|--------|---------|-------|
| `assets/fonts/Zenfix-Demo.ttf` | Display font | ✅ Done | All pages (`--font-display`, headings/nav via `@font-face`) | Approved 2026-08-24 as the site's signature display font; `design-references.md` updated to allow it. |

---

## Asset Types Legend

- **Logo** — site identity, appears in every page header
- **Nav banner** — top strip graphic, contains or frames navigation
- **Decoration** — purely ornamental, scattered around content areas
- **Layout** — structural visual aids (dividers, borders)
- **Photo** — real content images supplied by user
- **Display font** — custom typeface loaded for headings/nav text

---

## Status Key

| Symbol | Meaning |
|--------|---------|
| ✅ | File exists, referenced, and ready |
| ⏳ | Planned, not yet created |
| 🔄 | Placeholder, to be replaced |
| ❌ | Orphaned / not referenced by any page (candidate for deletion) |
