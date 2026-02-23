# Xelma Brand Guide

## Brand Identity

**Xelma** is a decentralized prediction market built on the Stellar blockchain. The brand communicates **trust, momentum, and community** — a modern fintech platform where collective intelligence meets accessible DeFi.

---

## Logo Concepts

Three concepts have been provided for team review. Each is available in color (with gradient), monochrome, and at multiple sizes.

### Concept A — "Abstract Token"

A stylized **X** formed by two crossing arcs, with a small token circle at the center.

- **Symbolism**: Token exchange, blockchain transactions, the "X" in Xelma
- **Shape**: Squircle (rounded square)
- **Best for**: Formal/corporate contexts, app icon

### Concept B — "Upward Momentum"

A bold **upward chevron** with a trailing echo — suggesting market predictions and price movement.

- **Symbolism**: Bullish momentum, growth, price prediction
- **Shape**: Circle
- **Best for**: Energetic/marketing contexts, social media avatars

### Concept C — "Community Cluster"

Three **connected nodes** forming an upward triangle — a decentralized network of community participants.

- **Symbolism**: Community, decentralization, network consensus
- **Shape**: Rounded square
- **Best for**: Community/DAO contexts, partnerships

---

## Color System

### Primary Palette

| Swatch | Name                | Hex       | Usage                                       |
| ------ | ------------------- | --------- | ------------------------------------------- |
| 🔵     | **Xelma Blue**      | `#2C4BFD` | Primary buttons, active nav, links, logo bg |
| 🔷     | **Xelma Blue Dark** | `#1E3FD4` | Hover states, pressed states                |
| 💜     | **Indigo Accent**   | `#6366F1` | Gradient endpoints, secondary accents       |
| 🩵     | **Blue Light**      | `#BEC7FE` | Borders, badges, subtle backgrounds         |

### Semantic Colors

| Swatch | Name                | Hex       | Usage                            |
| ------ | ------------------- | --------- | -------------------------------- |
| 🟢     | **Positive / UP**   | `#22C55E` | Price up, success, wins          |
| 🩷     | **Negative / DOWN** | `#EC4899` | Price down, errors, losses       |
| ⚫     | **Text Primary**    | `#292D32` | Headings, body text (light mode) |
| ⚪     | **Text Inverse**    | `#F3F4F6` | Headings, body text (dark mode)  |
| 🩶     | **Muted**           | `#9B9B9B` | Secondary text, placeholders     |

### Surface & Background

| Name           | Light Mode | Dark Mode |
| -------------- | ---------- | --------- |
| **Background** | `#FAFAFA`  | `#111827` |
| **Surface**    | `#FFFFFF`  | `#1F2937` |
| **Border**     | `#E5E7EB`  | `#374151` |

### Gradient

```
Primary Gradient:  linear-gradient(90deg, #2C4BFD 0%, #6366F1 100%)
Dark Gradient:     linear-gradient(90deg, #1E3A8A 0%, #4338CA 100%)
```

---

## Typography

| Role              | Font    | Weight        | Fallback   |
| ----------------- | ------- | ------------- | ---------- |
| **Headings**      | DM Sans | 700 (Bold)    | sans-serif |
| **Body**          | DM Sans | 400 (Regular) | sans-serif |
| **Accent/Labels** | Poppins | 500–600       | sans-serif |

**Import:**

```css
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap");
```

---

## Logo Usage Rules

### Minimum Size

- **Digital**: 24×24 px minimum
- **Print**: 10mm minimum width

### Clear Space

Maintain clear space around the logo equal to **25% of the logo height** on all sides. No text, graphics, or borders should encroach into this zone.

### Do's

✅ Use the provided color or monochrome versions  
✅ Use on solid backgrounds (white, `#FAFAFA`, `#111827`, `#1F2937`)  
✅ Scale proportionally

### Don'ts

❌ Do not stretch or skew the logo  
❌ Do not alter the colors or gradient direction  
❌ Do not place on busy/patterned backgrounds without the monochrome version  
❌ Do not add effects (drop shadows, outer glow, 3D)  
❌ Do not rotate the logo

### Background Pairing

| Context                     | Logo Version                                              |
| --------------------------- | --------------------------------------------------------- |
| White / light background    | Color gradient version                                    |
| Dark background (`#111827`) | Color gradient version or monochrome (white mark on dark) |
| Photograph / complex bg     | Monochrome version                                        |

---

## File Reference

### Concept A — Abstract Token

| File                                      | Size              |
| ----------------------------------------- | ----------------- |
| `concept-a/xelma-logo-concept-a.svg`      | Vector (scalable) |
| `concept-a/xelma-logo-concept-a-512.png`  | 512 × 512 px      |
| `concept-a/xelma-logo-concept-a-256.png`  | 256 × 256 px      |
| `concept-a/xelma-logo-concept-a-64.png`   | 64 × 64 px        |
| `concept-a/xelma-logo-concept-a-mono.svg` | Monochrome vector |

### Concept B — Upward Momentum

| File                                      | Size              |
| ----------------------------------------- | ----------------- |
| `concept-b/xelma-logo-concept-b.svg`      | Vector (scalable) |
| `concept-b/xelma-logo-concept-b-512.png`  | 512 × 512 px      |
| `concept-b/xelma-logo-concept-b-256.png`  | 256 × 256 px      |
| `concept-b/xelma-logo-concept-b-64.png`   | 64 × 64 px        |
| `concept-b/xelma-logo-concept-b-mono.svg` | Monochrome vector |

### Concept C — Community Cluster

| File                                      | Size              |
| ----------------------------------------- | ----------------- |
| `concept-c/xelma-logo-concept-c.svg`      | Vector (scalable) |
| `concept-c/xelma-logo-concept-c-512.png`  | 512 × 512 px      |
| `concept-c/xelma-logo-concept-c-256.png`  | 256 × 256 px      |
| `concept-c/xelma-logo-concept-c-64.png`   | 64 × 64 px        |
| `concept-c/xelma-logo-concept-c-mono.svg` | Monochrome vector |

### Shared Assets

| File                | Description                          |
| ------------------- | ------------------------------------ |
| `favicon.svg`       | Favicon (vector, based on Concept A) |
| `favicon-64.png`    | Favicon (64×64 raster)               |
| `color-palette.svg` | Visual color swatch reference        |

---

## Accessibility

- All primary text on white backgrounds meets **WCAG AA** contrast (≥ 4.5:1)
- `#2C4BFD` on white = **4.6:1** ratio ✅
- `#292D32` on `#FAFAFA` = **13.9:1** ratio ✅
- `#F3F4F6` on `#111827` = **15.3:1** ratio ✅
- Semantic green `#22C55E` on white = functional indicator, paired with icon/text

---

_Prepared for Xelma / TevaLabs — February 2026_
