# Directory Structure

## Planned Layout

```
v1/
├── docs/                          # Planning and reference documents
│   ├── directory-structure.md     # This file
│   ├── asset-catalog.md           # All assets: status, type, usage
│   ├── design-references.md       # Visual principles and Y2K design rules
│   └── action-log.md              # Chronological build log
│
├── assets/
│   ├── images/                    # Raster images (PNG/JPG)
│   │   └── placeholder-kitten.jpg # Temporary placeholder photo
│   └── svgs/                      # Vector assets (decorative + structural)
│       ├── logo-placeholder.svg   # Site logo (oval neon badge style)
│       ├── menu-header.svg        # Top navigation banner graphic
│       ├── flower-neon.svg        # Decorative starburst/flower accent
│       ├── starburst.svg          # Secondary neon accent
│       └── divider.svg            # Horizontal section divider
│
├── style.css                      # Single shared stylesheet (all pages)
├── index.html                     # Home / main page
├── about.html                     # About Me page
└── construction.html              # "Under Construction" — all unbuilt routes link here
```

## Conventions

- One `style.css` shared by all pages — no per-page stylesheets
- New pages (gallery.html, etc.) are added at root level and linked in the shared nav
- All images go in `assets/images/`, all vectors in `assets/svgs/`
- SVG files are standalone files (not inlined in HTML) unless a one-off decorative element
- No JS frameworks, no build step — plain HTML/CSS + minimal vanilla JS for mobile nav
