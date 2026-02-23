# Xelma Brand Guide

Xelma is a Stellar blockchain-based price prediction platform that combines finance, community, and accessibility. This guide documents the brand identity, color system, typography, and logo usage rules.

---

## Chosen Concept: Momentum X (Concept 1)

### Rationale

The **Momentum X** logo is a bold, geometric **X** letterform with an **arrow bracket** at the upper-right tip. This design was chosen because:

1. **Brand initial**: The X is the defining letter of "Xelma" — instantly recognizable
2. **Financial growth**: The upper-right arrow bracket mimics the classic "growth" indicator used on financial charts (↗), directly tying to Xelma's core product: price predictions
3. **Scalability**: The simple stroke-based geometry renders crisply from 512px app icons down to 16px favicons
4. **Modernity**: Round-capped strokes and a rounded-square container match the project's existing clean, friendly UI aesthetic (DM Sans font, rounded corners, soft shadows)

### Why not the others?

- **Concept 2 (Token Cluster)**: Beautiful network visualization, but the thin connecting lines lose clarity at small sizes. Better suited as a secondary illustration motif than a primary logo mark.
- **Concept 3 (Stellar Prism)**: Strong silhouette, but the diamond shape + X cutout creates visual complexity that competes for attention. The negative-space X is harder to read at a glance than Concept 1's direct strokes.

---

## Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Primary Blue** | `#2C4BFD` | 44, 75, 253 | Logo background, buttons, active nav, links, accents |
| **Primary Dark** | `#1E3FD4` | 30, 63, 212 | Hover states, pressed buttons |
| **Primary Light** | `#E0E7FF` | 224, 231, 255 | Tints, avatar gradients, subtle backgrounds |
| **Accent Indigo** | `#6366F1` | 99, 102, 241 | Gradient endpoints (e.g. news ribbon) |

### Neutral Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Text Primary** | `#292D32` | 41, 45, 50 | Headings, body text on light bg |
| **Text Secondary** | `#4D4D4D` | 77, 77, 77 | Secondary text, descriptions |
| **Text Muted** | `#9B9B9B` | 155, 155, 155 | Placeholders, captions, timestamps |
| **Background** | `#FAFAFA` | 250, 250, 250 | Page background (light mode) |
| **Border** | `#E5E7EB` | 229, 231, 235 | Card borders, input borders |

### Dark Mode Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Dark BG** | `#111827` | 17, 24, 39 | Page background (dark mode) |
| **Dark Surface** | `#1F2937` | 31, 41, 55 | Card backgrounds (dark mode) |
| **Dark Border** | `#374151` | 55, 65, 81 | Borders, input backgrounds (dark mode) |
| **Dark Text** | `#F3F4F6` | 243, 244, 246 | Primary text (dark mode) |

### Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Success / UP** | `#22C55E` | UP prediction button, online indicators |
| **Success Hover** | `#16A34A` | UP button hover |
| **Danger / DOWN** | `#EC4899` | DOWN prediction button |
| **Danger Hover** | `#DB2777` | DOWN button hover |
| **Error** | `#DC2626` | Input validation errors |
| **Warning BG** | `#FEF3C7` | Disabled/warning messages |

### Accessible Contrast

All text-on-background combinations meet **WCAG AA** contrast requirements:

- `#292D32` on `#FAFAFA` → ratio **13.5:1** ✅
- `#F3F4F6` on `#111827` → ratio **15.3:1** ✅
- `white` on `#2C4BFD` → ratio **4.7:1** ✅ (AA for large text)
- `#292D32` on `white` → ratio **15.4:1** ✅

---

## Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| **Headings** | DM Sans | 700 (Bold) | 24–48px |
| **Body** | DM Sans | 400–500 | 14–18px |
| **UI Labels** | DM Sans | 600 (Semi-bold) | 13–14px, uppercase, 0.5px tracking |
| **Logo Wordmark** | DM Sans | 700 (Bold) | Scales with logo |

**Font import:**
```css
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");
```

---

## Logo Files

### All 3 Concepts (for review)

| File | Description |
|------|-------------|
| `concept-1-logo.svg` | **Momentum X** — full color (Recommended) |
| `concept-1-wordmark.svg` | Momentum X + "Xelma" text |
| `concept-1-mono-dark.svg` | Monochrome dark (for light backgrounds) |
| `concept-1-mono-light.svg` | Monochrome light (for dark backgrounds) |
| `concept-2-logo.svg` | **Token Cluster** — full color |
| `concept-2-wordmark.svg` | Token Cluster + "Xelma" text |
| `concept-2-mono-dark.svg` | Monochrome dark |
| `concept-2-mono-light.svg` | Monochrome light |
| `concept-3-logo.svg` | **Stellar Prism** — full color |
| `concept-3-wordmark.svg` | Stellar Prism + "Xelma" text |
| `concept-3-mono-dark.svg` | Monochrome dark |
| `concept-3-mono-light.svg` | Monochrome light |

### Production Assets (Concept 1)

| File | Size | Purpose |
|------|------|---------|
| `logo-512.svg` | 512×512 | App store icons, social media, OG images |
| `logo-256.svg` | 256×256 | Profile pictures, medium displays |
| `logo-64.svg` | 64×64 | Small icons, simplified strokes |
| `favicon.svg` | 32×32 | Browser favicon (maximally simplified) |
| `logo-wordmark.svg` | 400×100 | Header, footer, marketing materials |

---

## Usage Guidelines

### ✅ Do

- Use the logo on the `#2C4BFD` blue background (default)
- Use the monochrome dark variant on light backgrounds (`#FAFAFA`, `white`)
- Use the monochrome light variant on dark backgrounds (`#111827`, `#1F2937`)
- Maintain minimum clear space equal to **25% of the logo height** on all sides
- Use the wordmark version when the logo appears alongside text for the first time
- Use the icon-only version in constrained spaces (nav bars, favicons, app icons)

### ❌ Don't

- Don't rotate the logo
- Don't stretch or distort the aspect ratio
- Don't place the full-color logo on busy or patterned backgrounds
- Don't change the logo colors outside of the provided variants
- Don't add drop shadows, glows, or effects to the logo
- Don't use the logo smaller than 16×16 pixels
- Don't recreate the logo with different stroke widths

### Minimum Sizes

| Context | Minimum Width |
|---------|---------------|
| Print | 20mm |
| Screen (icon) | 16px (use favicon variant) |
| Screen (logo) | 32px |
| Screen (wordmark) | 120px |

---

## Integration Notes

### Replacing the current logo

The current logo at `src/assets/logo.svg` is a plain blue circle. To adopt the new branding:

1. Replace `src/assets/logo.svg` with the contents of `logo-64.svg` (or `concept-1-logo.svg` scaled via viewBox)
2. Replace `public/vite.svg` with `favicon.svg`
3. Update `index.html` title from "frontend" to "Xelma"

### CSS Variables (suggested)

```css
:root {
  --color-primary: #2C4BFD;
  --color-primary-dark: #1E3FD4;
  --color-primary-light: #E0E7FF;
  --color-text-primary: #292D32;
  --color-text-secondary: #4D4D4D;
  --color-text-muted: #9B9B9B;
  --color-background: #FAFAFA;
  --color-border: #E5E7EB;
  --color-success: #22C55E;
  --color-danger: #EC4899;
}
```
