# Directory Structure

**Last updated:** 2026-08-26 — added `project-info.html`; catalogued the four About "More Photos" images and `pjatk.png`; `placeholder-kitten.jpg` is now orphaned.

## Actual Layout

```
y2k_website/
├── docs/                          # Planning and reference documents
│   ├── goal.md
│   ├── current-state.md
│   ├── plan.md
│   ├── action-log.md
│   ├── directory-structure.md     # This file
│   ├── asset-catalog.md
│   └── design-references.md
│
├── assets/
│   ├── images/                    # Raster images (PNG/JPG/GIF)
│   │   ├── logo.png                       # current site logo (all pages)
│   │   ├── logo1.PNG, logo2.png,
│   │   │   logo_1234.png                  # orphaned logo iterations — not referenced
│   │   ├── me1.jpeg                       # profile photo (about.html)
│   │   ├── britbrit.jpg, buffy.jpg,
│   │   │   aali.jpg, courtney.jpg         # about.html "More Photos" (replaced kitten placeholders)
│   │   ├── pjatk.png                      # side photo (project-info.html)
│   │   ├── asset1.1.png, asset2.1.png     # current decorative flower/starburst images
│   │   ├── asset1.PNG, asset2.PNG         # orphaned — superseded by the .1.png versions
│   │   ├── 3.jpeg – 7.jpeg, 33.jpeg,
│   │   │   55.jpeg                        # real photos (gallery.html + index.html Featured Pics)
│   │   ├── 1.jpeg, 2.jpeg                 # orphaned — superseded by 33.jpeg/55.jpeg, not referenced
│   │   ├── underconstruction.gif          # construction.html
│   │   ├── GGDstarlineanimation1.gif      # tiled nav-bar background, all pages
│   │   └── placeholder-kitten.jpg         # orphaned — no longer referenced by any page
│   ├── svgs/                      # Vector assets
│   │   ├── menu-header.svg                # in use — top nav banner graphic
│   │   ├── divider.svg                    # in use — section dividers
│   │   ├── logo-placeholder.svg           # orphaned — replaced by logo.png
│   │   ├── flower-neon.svg                # orphaned — replaced by asset1.1.png
│   │   └── starburst.svg                  # orphaned — replaced by asset2.1.png
│   ├── fonts/
│   │   └── Zenfix-Demo.ttf                # custom display font, loaded via @font-face
│   │                                      # (conflicts with design-references.md — see current-state.md)
│   └── js/
│       └── nav.js                         # hamburger toggle
│
├── .claude/
│   ├── CLAUDE.md                  # project rules for Claude
│   ├── launch.json                # dev server config (Node, port 5500)
│   └── server.js                  # static file server
│
├── style.css                      # Single shared stylesheet (all pages)
├── index.html                     # Home page
├── about.html                     # About Me page
├── project-info.html              # Project Info — diploma statement + supervisor credits
├── construction.html              # "Under Construction" — all unbuilt routes link here
├── gallery.html                   # Photo gallery with lightbox (has its own small page-local <style> block)
└── music.html                     # YouTube playlist page
```

## Conventions

- One `style.css` shared by all pages — no per-page stylesheets (exception: `gallery.html` has a small page-local `<style>` block predating this doc's last rewrite; not yet cleaned up)
- New pages are added at root level and linked in the shared nav
- All images go in `assets/images/`, all vectors in `assets/svgs/`, fonts in `assets/fonts/`
- SVG files are standalone files (not inlined in HTML) unless a one-off decorative element
- No JS frameworks, no build step — plain HTML/CSS + minimal vanilla JS for mobile nav and lightboxes
