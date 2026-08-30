# Goal — Desired Final State

## What we are building

A personal multi-page website with an authentic Y2K / late-90s web aesthetic. It should feel like a real site from 1999–2001 — neon colors on black, loud typography, decorative SVG accents — but built with modern HTML/CSS so it is maintainable and works on mobile.

---

## Pages (built)

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Landing page, intro, Featured Pics, latest updates |
| About Me | `about.html` | Personal info, photo, bio, quick facts, faves, photo grid |
| Project Info | `project-info.html` | Diploma statement — why the project exists — and supervisor credits |
| Gallery | `gallery.html` | Grid of real artworks, captioned with title + medium, click-to-enlarge |
| Music | `music.html` | Winamp-style YouTube playlist player |

Nav order across the site is Home → About Me → Project Info → Gallery → Music.

## Pages (not yet built)

Guestbook, Downloads, Links, Privacy Policy and Terms are linked from the nav and footer but have no page of their own yet — every one of those links points at `construction.html`.

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

> **Note (2026-08-26):** these bullets originally described a dark neon-on-black
> direction. The site was redesigned into a lighter pastel palette during 2026-08-22
> and the list below now describes what actually exists. The Y2K goal is unchanged —
> only the palette moved.

- Looks unmistakably Y2K at first glance — someone should recognize the era immediately
- Bright pastel palette: pale yellow page background (`#fdf0a0`), baby-blue nav and cards (`#a8d8f0`), deep pink (`#cc1870`) and hot pink (`#ff66cc`) accents, with cyan, lime and yellow used as highlight colors
- Logo: the "a dream or a memory" wordmark (`logo.png`), top-left of every page
- Top nav bar: full-width strip tiled with an animated star GIF
- Decorative accents (flowers, starbursts) scattered around pages
- Content cards with baby-blue backgrounds and rounded frames
- Flat colors, hard 2px drop shadows, no gradients or glow blur — period accurate
- Zenfix display font for headings and nav; Arial for body text

## Technical Goals

- Zero JS frameworks, zero build tools — open `index.html` in a browser and it works
- Single `style.css` shared across all pages
- Responsive: desktop-first, degrades gracefully to mobile at 768px
- Mobile nav: hamburger menu (vanilla JS, ~15 lines)
- Assets cleanly separated: `assets/images/` for photos, `assets/svgs/` for vectors

## Quality Bar

- Passes a visual "does this look Y2K?" check
- All pages share consistent nav, footer, and color scheme
- No broken image links (all placeholders replaced with real photos as of 2026-08-26)
- Mobile layout is usable, not broken
