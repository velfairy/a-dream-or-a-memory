# Goal — Desired Final State

## What we are building

A personal multi-page website with an authentic Y2K / late-90s web aesthetic. It should feel like a real site from 1999–2001 — neon colors on black, loud typography, decorative SVG accents — but built with modern HTML/CSS so it is maintainable and works on mobile.

---

## Pages (minimum viable)

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Landing page, intro, featured content |
| About Me | `about.html` | Personal info, photo, bio |

## Pages (planned extensions)

| Page | File | Purpose |
|------|------|---------|
| Gallery | `gallery.html` | Photo grid of real PNG images |
| (more TBD) | | |

## Under Construction Page

| Page | File | Purpose |
|------|------|---------|
| Under Construction | `construction.html` | Shown for any route/link that isn't implemented yet |

All nav links pointing to unbuilt pages must link to `construction.html` instead of a dead link or 404.

### Visual requirements for construction.html
- Full Y2K "UNDER CONSTRUCTION" aesthetic — this is a genre unto itself in the era
- CSS stepped-animation simulating the classic animated GIF construction worker/hard hat
- Animated blinking "UNDER CONSTRUCTION" text (steps-based, not smooth)
- Tiled caution-stripe border (yellow/black diagonal)
- "Come back soon!" or similar period-accurate message
- Link back to home

---

## Visual Goals

- Looks unmistakably Y2K at first glance — someone should recognize the era immediately
- Neon palette (magenta, cyan, lime, yellow) on near-black backgrounds
- Logo: oval neon badge (SVG), top-left of every page
- Top nav bar: full-width magenta/purple strip with neon link text
- Decorative SVG accents (neon flowers, starbursts) scattered around pages
- Content cards with teal/dark bg and glowing neon borders
- Neon glow pulse animation on logo and key accents

## Technical Goals

- Zero JS frameworks, zero build tools — open `index.html` in a browser and it works
- Single `style.css` shared across all pages
- Responsive: desktop-first, degrades gracefully to mobile at 768px
- Mobile nav: hamburger menu (vanilla JS, ~15 lines)
- Assets cleanly separated: `assets/images/` for photos, `assets/svgs/` for vectors

## Quality Bar

- Passes a visual "does this look Y2K?" check
- All pages share consistent nav, footer, and color scheme
- No broken image links before real photos are provided (placeholder kitten used)
- Mobile layout is usable, not broken
