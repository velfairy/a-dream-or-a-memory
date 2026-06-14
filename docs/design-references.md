# Design References & Principles

## Inspiration

**Source:** GenerationGirl.com screenshot (~1999–2000)
**Aesthetic:** Late 90s / Y2K web — neon on black, table-based grid feel, image-text headers, animated GIF accents

---

## Authenticity First — What Real Y2K Sites Actually Used

> This section overrides any "modern retro" instincts. The dead giveaways of fake retro are: CSS glow shadows, SVG with filters, CSS gradients, smooth animations, and border-radius. None of these existed in browser CSS in 1999–2001.

### What existed in ~1999 CSS (CSS1 / early CSS2):
- `color`, `background-color` — flat solid hex only
- `font-family`, `font-size`, `font-weight`, `font-style`
- `border: 1px solid #color` — solid, no radius, no shadow
- `background-image: url()` + `background-repeat: tile` — the main way to do "textured" backgrounds
- `width`, `height` in pixels (fixed layouts)
- `<table>` for all layout (not CSS Grid/Flexbox)
- `<font>` tags inline in HTML
- No `box-shadow`, no `text-shadow`, no `border-radius`, no `gradients`, no `transition`, no `animation`

### What achieved visual richness instead:
- **Text as images**: headers and nav labels were GIF/JPG files made in Photoshop with bevel, emboss, drop shadow baked into pixels
- **Animated GIFs**: spinning logos, blinking icons, "under construction" workers, hit counters
- **Tiled background images**: small repeating patterns (stars, dots, gradients baked into a 4px PNG tile)
- **Image slices**: full nav bars and decorative banners were single image files, cut into table cells
- **Low-res JPEG artifacts**: photos were heavily compressed, artifacts were normal and expected

---

## Our Modern Approximation Strategy

We use modern HTML/CSS but must *look* like the above. Rules:

### Colors — flat, loud, no gradients
```css
/* YES — flat solid colors */
background-color: #000000;
color: #ff00ff;
border: 2px solid #00ffff;

/* NO — these scream "modern retro" */
background: linear-gradient(...);
box-shadow: 0 0 20px #ff00ff;
text-shadow: 0 0 8px #ff00ff;
```

Exception: a single very subtle `text-shadow: 1px 1px 0 #000` (hard offset, no blur) is period-accurate — it mimics the Photoshop drop shadow burned into image-text. No blur radius.

### Typography — system fonts, image-text simulation
- Body/nav text: `font-family: Impact, "Arial Black", Arial, sans-serif`
- For section headers that need the "image-text" look: create actual GIF-style PNGs in the assets pipeline, OR use SVG text with **no filters** — just flat fill color + hard 1px stroke, no glow
- Mixed color text (each word different color): done via `<span>` with inline color, not gradients

### Borders and depth — hard edges only
```css
/* Period-accurate depth effects */
border: 2px solid #ff00ff;
outline: 1px solid #000;

/* Table-cell bevel (classic Windows 98 look) */
border-top: 2px solid #ffffff;
border-left: 2px solid #ffffff;
border-bottom: 2px solid #808080;
border-right: 2px solid #808080;
```

### Backgrounds — tiled patterns
- Page bg: solid near-black `#080008` OR a small tiling dark texture (4–16px repeating image)
- Nav bar bg: solid flat magenta-purple `#330033`, no gradient
- Content card bg: flat teal `#006666` or dark navy, solid border

### Images — embrace compression
- Keep placeholder JPEGs at low quality (60–70%) — artifacts are authentic
- Images should be small fixed pixel dimensions (200px, 150px) with no `object-fit` smoothing
- Add `image-rendering: pixelated` on decorative pixel-art images

### Layout — fixed width, table feel
- Max content width: `960px`, centered
- Use CSS Grid only for the overall page scaffold; inside content areas use fixed-pixel columns like table layout would have
- No `gap` larger than 4–8px between cells; content should feel packed

### Animations — GIF-style, not smooth
```css
/* YES — stepped, like a GIF */
animation: blink 1s steps(1) infinite;

/* NO — smooth transitions are modern */
animation: glow 2s ease-in-out infinite;
transition: all 0.3s ease;
```

Allowed animations:
- `steps(1)` blinking (text, borders)
- `steps(4)` or `steps(8)` cycling — mimics animated GIF frames
- Marquee scroll (horizontal scroll text) via CSS animation — this is period accurate
- No easing curves, no fades, no smooth color transitions

---

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Page background | Near-black purple | `#080008` |
| Nav bar background | Flat magenta-purple | `#330033` |
| Primary accent | Flat magenta | `#ff00ff` |
| Secondary accent | Flat lime green | `#00cc00` |
| Tertiary accent | Flat cyan | `#00cccc` |
| Highlight | Flat yellow | `#ffff00` |
| Hot pink links | Nav hover | `#ff66cc` |
| Content card bg | Flat teal | `#006666` |
| Body text | Near-white | `#eeeeee` |
| Hard shadow | Pure black | `#000000` |

All colors: high saturation, flat. No alpha/opacity on colored elements (just use the flat color).

---

## Font Stack

```css
font-family: Impact, "Arial Black", "Franklin Gothic Heavy", Arial, sans-serif;
```

Secondary (body copy): `font-family: Arial, Helvetica, sans-serif;`

Comic Sans is period-accurate for informal/fun sections but use sparingly.

---

## Typography Rules

- Nav links: uppercase, italic, `color: #ffff00` or `#00ff00`, no underline, `font-family: Impact`
- Hover: color swap only (e.g. yellow → hot pink). No transition, instant change.
- Section headers: mixed `<span>` colors, all-caps, Impact
- Body copy: Arial, 14px (period-accurate small size), white or light cyan
- Hard drop shadow only: `text-shadow: 2px 2px 0 #000000` — no blur

---

## Decorative Elements

- **"Under Construction" GIF** → CSS stepped animation simulating an animated GIF worker/sign
- **Horizontal rules** → `<hr>` styled with flat neon color border, or a 1px tiled line image
- **Flower/starburst accents** → flat colored SVG shapes, NO filters, NO glow — just solid fill + 1px stroke
- **Hit counter aesthetic** → a row of segmented "LED" digits (CSS or image)
- **Blinking elements** → `animation: blink 1s steps(1) infinite` on `*` or borders

---

## What to Avoid (Modern Tells)

| Modern element | What to use instead |
|---|---|
| `box-shadow` glow | `border: 2px solid #ff00ff` |
| `text-shadow` blur | `text-shadow: 2px 2px 0 #000` (hard only) |
| CSS `gradient` | Flat `background-color` |
| SVG with `filter` / `feGaussianBlur` | Plain SVG flat fill + stroke |
| `border-radius` | No radius, sharp corners |
| `transition` / `ease` | Instant state change or `steps()` |
| Large `gap` whitespace | Packed, dense layouts |
| `object-fit: cover` smooth scaling | Fixed pixel sizes, pixelated rendering |
| Web fonts (Google Fonts) | System fonts only |
| Smooth scroll | None, or anchor jump |
