# Asset Catalog

**Last updated:** 2026-08-24 — rewritten to match actual repo state (was stale since 2026-06-14; only listed the original kitten placeholder + 5 original SVGs).

## Images (Raster)

| File | Type | Status | Used On | Notes |
|------|------|--------|---------|-------|
| `assets/images/logo.png` | Logo | ✅ Done | All pages (header) | Current final logo |
| `assets/images/logo1.PNG` | Logo | ❌ Orphaned | — | Intermediate iteration, not referenced |
| `assets/images/logo2.png` | Logo | ❌ Orphaned | — | Intermediate iteration, not referenced |
| `assets/images/logo_1234.png` | Logo | ❌ Orphaned | — | Intermediate iteration, not referenced |
| `assets/images/me1.jpeg` | Photo | ✅ Done | about.html (profile card, click-to-enlarge) | Real photo |
| `assets/images/asset1.1.png` | Decoration | ✅ Done | index.html, about.html, gallery.html, construction.html, music.html | Used as `.deco-flower` |
| `assets/images/asset2.1.png` | Decoration | ✅ Done | index.html, about.html, gallery.html, construction.html, music.html | Used as `.deco-starburst` |
| `assets/images/asset1.PNG` | Decoration | ❌ Orphaned | — | Superseded by `asset1.1.png` |
| `assets/images/asset2.PNG` | Decoration | ❌ Orphaned | — | Superseded by `asset2.1.png` |
| `assets/images/33.jpeg` | Photo | ✅ Done | index.html (Featured Pics), gallery.html (Artwork 1) | Real photo |
| `assets/images/55.jpeg` | Photo | ✅ Done | index.html (Featured Pics), gallery.html (Artwork 2) | Real photo |
| `assets/images/3.jpeg` | Photo | ✅ Done | index.html (Featured Pics), gallery.html (Artwork 3) | Real photo |
| `assets/images/4.jpeg` | Photo | ✅ Done | index.html (Featured Pics), gallery.html (Artwork 4) | Real photo |
| `assets/images/5.jpeg` | Photo | ✅ Done | gallery.html (Artwork 5) | Real photo |
| `assets/images/6.jpeg` | Photo | ✅ Done | gallery.html (Artwork 6) | Real photo |
| `assets/images/7.jpeg` | Photo | ✅ Done | gallery.html (Artwork 7) | Real photo |
| `assets/images/1.jpeg` | Photo | ❌ Orphaned | — | Superseded by `33.jpeg` on the homepage |
| `assets/images/2.jpeg` | Photo | ❌ Orphaned | — | Superseded by `55.jpeg` on the homepage |
| `assets/images/underconstruction.gif` | Decoration | ✅ Done | construction.html | Animated GIF worker |
| `assets/images/GGDstarlineanimation1.gif` | Decoration | ✅ Done | All pages (nav bar background, tiled) | Replaces original nav button styling |
| `assets/images/placeholder-kitten.jpg` | Photo | 🔄 Placeholder | about.html ("More Photos" section, 4x) | From cataas.com, 400×300 — only remaining placeholder use, needs real photos |

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
