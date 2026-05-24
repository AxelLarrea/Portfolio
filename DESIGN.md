---
name: Cyber-Professional Portfolio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#dcb8ff'
  on-secondary: '#480081'
  secondary-container: '#7701d0'
  on-secondary-container: '#dcb7ff'
  tertiary: '#f7f8f8'
  on-tertiary: '#2f3131'
  tertiary-container: '#dbdbdb'
  on-tertiary-container: '#5e6060'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#efdbff'
  secondary-fixed-dim: '#dcb8ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6700b5'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

This design system is engineered for the high-end creative developer. The aesthetic moves beyond traditional minimalism into a **"Cyber-Professional"** movement—a fusion of rigorous engineering and avant-garde digital art. It evokes a sense of technical mastery and forward-thinking innovation.

The visual style leverages **Subtle Glassmorphism** and **Luminous Accents**. Surfaces are deep and immersive, utilizing layering and light to guide the user's eye rather than heavy ornamentation. The emotional response should be one of "sophisticated power"—feeling like a high-performance terminal that is simultaneously refined and approachable.

**Key Principles:**
- **Depth through Luminance:** Use glows and blurs to define hierarchy.
- **Precision Engineering:** Clean borders and strict alignment represent code quality.
- **Atmospheric Immersion:** A "Midnight" base provides a canvas where accents feel electric, not overwhelming.

## Colors

The palette is anchored by **Deep Midnight Black (#0a0a0a)** to ensure infinite depth and maximum contrast for glowing elements.

- **Electric Cyan (#00f2ff):** Used for primary actions, success states, and data visualization. It represents the "logic" and "flow" of the developer's work.
- **Neon Violet (#8a2be2):** Used for creative highlights, secondary accents, and hover states. It represents the "creative" and "experimental" side of the portfolio.
- **Functional Gradients:** Use a linear gradient from Cyan to Violet (45 degrees) sparingly for hero typography or primary call-to-action buttons to signify the intersection of technology and art.
- **Glass Surfaces:** Backgrounds for cards and modals should use a semi-transparent dark tint with a `backdrop-filter: blur(12px)` to maintain legibility over background glows.

## Typography

This design system utilizes a high-contrast typographic hierarchy to emphasize technical authority.

- **Sora** is the voice of the brand, used for large-scale displays and headlines. Its geometric construction feels futuristic and architectural.
- **Inter** provides high legibility for body copy, ensuring that long-form project descriptions or technical blog posts remain effortless to read.
- **JetBrains Mono** (or generic monospaced fallback) is used for labels, metadata, and code snippets, grounding the design in the developer's craft.

**Usage Notes:**
- Use **Display LG** with a subtle text-shadow glow (`0 0 20px rgba(0, 242, 255, 0.3)`) for hero section headers.
- Maintain wide line-heights for body text (1.6) to provide breathing room against the dark background.

## Layout & Spacing

The layout follows a **Fixed-Grid System** for desktop to ensure a gallery-like presentation of work, transitioning to a fluid model for mobile.

- **Desktop (1280px+):** 12-column grid with 24px gutters. Use large margins (80px+) to separate distinct portfolio sections.
- **Tablet (768px - 1024px):** 8-column grid with 20px gutters.
- **Mobile (<767px):** 4-column grid with 16px gutters and 16px side margins.

**Rhythm:**
Spacing should follow a base-8 scale. Larger gaps (`xl`) should be used to separate "Context" (text/description) from "Content" (work/images) to prevent the dark UI from feeling cramped or claustrophobic.

## Elevation & Depth

In a dark-base design system, depth is created through **Luminance and Translucency** rather than traditional black shadows.

1.  **Level 0 (Base):** The #0a0a0a background.
2.  **Level 1 (Cards/Sections):** Semi-transparent surfaces (`rgba(255, 255, 255, 0.03)`) with a `1px` solid border (`rgba(255, 255, 255, 0.1)`).
3.  **Level 2 (Interactive/Floating):** Use backdrop-blur (12px) and a subtle Cyan or Violet outer glow (`box-shadow: 0 0 30px rgba(0, 242, 255, 0.15)`).
4.  **The "Scanner" Effect:** Use 1px thin lines that span the width of the container to act as section dividers, occasionally using a gradient stroke that fades to transparent.

**Soft Blurs:** Use large, low-opacity "blob" gradients in the background (positioned absolutely) to create atmospheric depth behind content.

## Shapes

The design system uses a **"Soft-Geometric"** shape language. 

- **Corners:** Use a consistent `0.25rem` (4px) radius for standard UI elements like inputs and small cards. This keeps the aesthetic feeling "precise" and "technical" rather than "bubbly."
- **Interactive Elements:** Buttons may use slightly higher rounding (8px) to distinguish them as touchpoints, but never fully pill-shaped, to maintain the architectural vibe.
- **Containers:** Large project cards should use the `rounded-lg` (8px) setting.

## Components

### Buttons
- **Primary:** Solid Electric Cyan background with black text. On hover, add a `0 0 20px` glow of the same color.
- **Secondary:** Transparent background with a 1px Cyan border. Text is Cyan.
- **Ghost:** Text only (Violet) with a subtle background reveal on hover.

### Cards (Project Showcase)
- Background: `rgba(255, 255, 255, 0.03)` with backdrop-filter.
- Border: `1px solid rgba(255, 255, 255, 0.1)`.
- Interaction: On hover, the border color transitions to the Primary Cyan, and the background opacity increases slightly.

### Inputs
- Dark backgrounds (`#141414`) with a bottom-only 2px border that glows when focused.
- Labels should use `JetBrains Mono` at `label-sm` size, positioned above the field.

### Chips/Tags
- Small, uppercase labels using monospaced font. 
- Border-only style with low-opacity fills (e.g., `rgba(138, 43, 226, 0.1)` for Violet tags).

### Data Visualizers (Unique Component)
- For showing "Skills" or "Stats", use thin progress bars with a glow-cap (a 4px circle at the end of the progress line that has a high-intensity glow).

---

## Light Mode — Lumina Cyber-Professional

This section extends the base design system for light mode presentation. It follows the same structural principles but shifts to a "laboratory-clean" aesthetic that replaces dark neon with clinical precision.

### Brand & Style

**Cyber-Minimalism**: A light-mode evolution that replaces emissive glows with pigment-rich depth. The emotional response is clarity, efficiency, and premium quality.

Key visual drivers:
- **Clinical Precision:** Hairline strokes and monospaced accents denote technical rigor.
- **Translucent Depth:** Light-mode glassmorphism that feels like frosted acrylic rather than deep glass.
- **Architectural Layout:** Rigorous adherence to grid lines and structural alignment.

### Colors — Light Mode Palette

The palette shifts from emissive glows to pigment-rich depth.

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#f7f9fb` | Page background |
| `surface` | `#f7f9fb` | Base surface |
| `surface-dim` | `#d8dadc` | Muted/dimmer surface |
| `surface-bright` | `#f7f9fb` | Bright surface |
| `surface-container-lowest` | `#ffffff` | Cards, containers |
| `surface-container-low` | `#f2f4f6` | Secondary containers |
| `surface-container` | `#eceef0` | Tertiary containers |
| `surface-container-high` | `#e6e8ea` | Quaternary containers |
| `surface-container-highest` | `#e0e3e5` | Elevated containers |
| `on-surface` | `#191c1e` | Primary text |
| `on-surface-variant` | `#464555` | Secondary text |
| `inverse-surface` | `#2d3133` | Inverted surfaces |
| `inverse-on-surface` | `#eff1f3` | Text on inverted surface |
| `outline` | `#777587` | Borders, dividers |
| `outline-variant` | `#c7c4d8` | Subtle borders |
| `primary` | `#3525cd` | Primary actions (Indigo) |
| `primary-container` | `#4f46e5` | Primary container fill |
| `on-primary` | `#ffffff` | Text on primary |
| `on-primary-container` | `#dad7ff` | Text on primary container |
| `inverse-primary` | `#c3c0ff` | Primary in inverted context |
| `secondary` | `#712ae2` | Secondary accents (Violet) |
| `secondary-container` | `#8a4cfc` | Secondary container fill |
| `on-secondary` | `#ffffff` | Text on secondary |
| `on-secondary-container` | `#fffbff` | Text on secondary container |
| `tertiary` | `#00505f` | Tertiary accents (Cyan) |
| `tertiary-container` | `#006a7c` | Tertiary container fill |
| `on-tertiary` | `#ffffff` | Text on tertiary |
| `on-tertiary-container` | `#93e8ff` | Text on tertiary container |

**Key differences from dark mode:**
- Primary shifts from Electric Cyan (#00f2ff) to Indigo (#3525cd)
- Secondary remains Violet (#712ae2) for consistency
- Tertiary becomes a teal-cyan (#00505f) for "cyber heritage" nod
- Background is stark White (#ffffff) with Neutral-50 (#f7f9fb) secondary

### Typography — Light Mode

Same as base system with adjustments:
- **Headlines:** Set with tight letter-spacing for "blocky" structural feel
- **Labels:** Always uppercase in JetBrains Mono to mimic code comments
- **Body:** Generous line-height (1.6) for readability against white

| Style | Font | Size | Weight | Line Height |
|-------|------|------|--------|-------------|
| `display-lg` | Sora | 64px | 700 | 1.1 |
| `display-lg-mobile` | Sora | 40px | 700 | 1.2 |
| `headline-md` | Sora | 32px | 600 | 1.3 |
| `headline-sm` | Sora | 24px | 600 | 1.4 |
| `body-lg` | Sora | 18px | 400 | 1.6 |
| `body-md` | Sora | 16px | 400 | 1.6 |
| `label-mono` | JetBrains Mono | 12px | 500 | 1.0 |

### Layout & Spacing

Same as base system:
- **Desktop:** 12-column grid, 24px gutters, 80px margins
- **Tablet:** 8-column grid, 20px gutters
- **Mobile:** 4-column grid, 20px margins
- **Base unit:** 8px
- **Container max:** 1280px

### Elevation & Depth — Light Mode

**Frosted Layering** instead of traditional shadows:
- **Glass Effect:** `backdrop-filter: blur(12px)` with `rgba(255, 255, 255, 0.7)` fill
- **Soft Depth:** `0 20px 40px rgba(79, 70, 229, 0.05)` — hint of primary color
- **Structural Outlines:** 1px gradient borders (Neutral-200 to transparent) for light hitting sharp edge

### Shapes

Same as base system:
- `radius-sm`: 0.125rem (2px)
- `radius-md`: 0.25rem (4px) — standard
- `radius-lg`: 0.375rem (6px) — interactive
- `radius-xl`: 0.5rem (8px) — cards
- `radius-full`: 9999px

### Components — Light Mode

#### Buttons
- **Primary:** Solid Indigo fill (#3525cd), white text, slight lift on hover
- **Secondary:** Frosted glass with 1px Indigo border
- **Ghost:** Text only (Violet), subtle background reveal on hover

#### Cards
- Frosted glass background with `backdrop-filter: blur(12px)`
- On hover: border shifts from Neutral-200 to Primary Indigo gradient

#### Chips/Tags
- Small, rectangular with light indigo background (#EEF2FF)
- Indigo text, monospaced font

#### Terminal Lists (Experience/Skills)
- "01", "02" prefix in JetBrains Mono with tertiary cyan (#00505f)
- Maintains technical narrative

### CSS Implementation Reference

```css
:root.light {
  --background: #f7f9fb;
  --surface: #f7f9fb;
  --surface-dim: #d8dadc;
  --on-surface: #191c1e;
  --on-surface-variant: #464555;
  --outline: #777587;
  --outline-variant: #c7c4d8;
  --primary: #3525cd;
  --primary-container: #4f46e5;
  --on-primary: #ffffff;
  --on-primary-container: #dad7ff;
  --secondary: #712ae2;
  --secondary-container: #8a4cfc;
  --on-secondary: #ffffff;
  --on-secondary-container: #fffbff;
  --tertiary: #00505f;
  --tertiary-container: #006a7c;
  --on-tertiary: #ffffff;
  --on-tertiary-container: #93e8ff;
  --surface-container-lowest: #ffffff;
  --surface-container-low: #f2f4f6;
  --surface-container: #eceef0;
}

:root.light .glass-panel {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #e2e8f0;
  box-shadow: 0 20px 40px rgba(79, 70, 229, 0.05);
  backdrop-filter: blur(12px);
}
```