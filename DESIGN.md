---
name: Nebula Professional
version: 2.0.0
colors:
  base: '#09090B'
  surface: '#18181B'
  surface-elevated: '#27272A'
  surface-glass: 'rgba(255,255,255,0.04)'
  border: 'rgba(255,255,255,0.08)'
  border-strong: 'rgba(255,255,255,0.14)'
  text: '#FAFAFA'
  text-muted: '#A1A1AA'
  text-soft: '#71717A'
  primary: '#3B82F6'
  primary-glow: 'rgba(59,130,246,0.25)'
  secondary: '#8B5CF6'
  secondary-glow: 'rgba(139,92,246,0.25)'
  accent: '#06B6D4'
  accent-glow: 'rgba(6,182,212,0.25)'
  success: '#10B981'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: clamp(3rem, 8vw, 5.5rem)
    fontWeight: '700'
    lineHeight: '1.05'
    letterSpacing: '-0.04em'
  heading-xl:
    fontFamily: Archivo
    fontSize: clamp(2rem, 5vw, 3.5rem)
    fontWeight: '600'
    lineHeight: '1.15'
    letterSpacing: '-0.03em'
  heading-lg:
    fontFamily: Archivo
    fontSize: clamp(1.5rem, 3.5vw, 2.25rem)
    fontWeight: '600'
    lineHeight: '1.25'
  body-lg:
    fontFamily: Archivo
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Archivo
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.65'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: '0.12em'
    textTransform: uppercase
rounded:
  sm: 0.375rem
  md: 0.625rem
  lg: 0.875rem
  xl: 1.25rem
  full: 9999px
spacing:
  base: 8px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style — Nebula Professional

A dark-first portfolio design system that fuses **Motion-Driven** interaction, **Glassmorphism** depth, and **Dark Mode OLED** foundations with subtle **Aurora UI** atmospheric elements. The aesthetic is technical, premium, and immersive — like looking into deep space through frosted glass.

### Key Principles

- **Depth through Glass**: `backdrop-blur-xl` surfaces layered over deep blacks create a sense of infinite space.
- **Luminous Precision**: Electric Blue (#3B82F6) and Violet (#8B5CF6) accents cut through glass with controlled glow.
- **Motion with Purpose**: Scroll-triggered reveals, subtle parallax, and micro-interactions that reward exploration without overwhelming.
- **Typographic Authority**: Space Grotesk headlines command attention; Archivo body text ensures effortless reading; JetBrains Mono labels ground the design in developer craft.

### Style DNA

| Layer | Technique |
|-------|-----------|
| **Base** | Deep zinc black (#09090B) — infinite canvas |
| **Atmosphere** | Fixed radial blobs (blue + violet) at 8-12% opacity |
| **Grid** | Subtle dot pattern overlay at 4-6% opacity |
| **Surfaces** | Glass panels with `backdrop-blur-xl` and `bg-white/[0.04]` |
| **Accents** | Glow borders on hover, scanner-line dividers |
| **Motion** | IntersectionObserver reveals, parallax blobs, stagger delays |

## Colors — Nebula Palette

### Dark Mode (Default)

| Token | Hex | Usage |
|-------|-----|-------|
| `--base` | `#09090B` | Page background |
| `--surface` | `#18181B` | Solid surfaces |
| `--surface-elevated` | `#27272A` | Elevated cards |
| `--surface-glass` | `rgba(255,255,255,0.04)` | Glass panels |
| `--border` | `rgba(255,255,255,0.08)` | Subtle borders |
| `--border-strong` | `rgba(255,255,255,0.14)` | Active borders |
| `--text` | `#FAFAFA` | Primary text |
| `--text-muted` | `#A1A1AA` | Secondary text |
| `--text-soft` | `#71717A` | Tertiary/meta text |
| `--primary` | `#3B82F6` | Actions, links, primary glow |
| `--primary-soft` | `rgba(59,130,246,0.15)` | Primary background wash |
| `--primary-glow` | `rgba(59,130,246,0.25)` | Hover glow |
| `--secondary` | `#8B5CF6` | Creative accents, highlights |
| `--secondary-soft` | `rgba(139,92,246,0.15)` | Secondary background wash |
| `--secondary-glow` | `rgba(139,92,246,0.25)` | Hover glow |
| `--accent` | `#06B6D4` | Tags, tech indicators |
| `--accent-soft` | `rgba(6,182,212,0.15)` | Accent background wash |
| `--success` | `#10B981` | Positive states |

### Light Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `--base` | `#FAFAFA` | Page background |
| `--surface` | `#FFFFFF` | Solid surfaces |
| `--surface-glass` | `rgba(255,255,255,0.75)` | Glass panels |
| `--border` | `#E4E4E7` | Subtle borders |
| `--text` | `#09090B` | Primary text |
| `--text-muted` | `#52525B` | Secondary text |
| `--text-soft` | `#71717A` | Tertiary text |
| `--primary` | `#2563EB` | Actions (darker for light bg) |
| `--secondary` | `#7C3AED` | Creative accent |
| `--accent` | `#0891B2` | Tech indicators |

## Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| **Display** | Space Grotesk | 700 | Hero headlines, section titles |
| **Body** | Archivo | 400, 500, 600 | Paragraphs, UI labels, navigation |
| **Mono** | JetBrains Mono | 500 | Code, tags, metadata, kickers |

**Google Fonts Import:**
```
Space+Grotesk:wght@400;500;600;700
Archivo:wght@400;500;600;700
JetBrains+Mono:wght@500
```

## Layout & Spacing

- **Container**: `max-width: 1280px` with `24px` side padding
- **Grid**: 12-column desktop, 2-column project cards
- **Vertical rhythm**: Sections separated by `80px` with scanner-line dividers
- **Glass panels**: `24px` border-radius, `24-40px` internal padding

## Elevation & Depth

| Level | Technique |
|-------|-----------|
| **L0 — Base** | `#09090B` solid background |
| **L1 — Surface** | `bg-white/[0.04]` with `backdrop-blur-xl`, `1px` border `white/[0.08]` |
| **L2 — Elevated** | Same as L1 + subtle glow on hover (`box-shadow` with primary/secondary) |
| **L3 — Floating** | Higher blur (`backdrop-blur-2xl`), stronger border, outer glow |

## Components

### Glass Panel
```css
.glass-panel {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(16px);
  border-radius: 1.25rem;
}
```

### Scanner Line
```css
.scanner-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary) 20%, var(--secondary) 80%, transparent);
}
```

### Buttons
- **Primary**: Solid `--primary` bg, dark text, glow on hover
- **Secondary**: Glass bg with `--primary` border
- **Ghost**: Text-only with bg reveal on hover

### Cards (Projects)
- Glass surface with `backdrop-blur`
- Image with gradient overlay
- On hover: border shifts to primary color, subtle glow

### Tags/Pills
- Mono font, uppercase, tracking-wide
- Border-only style with accent-colored soft bg

---

## Pre-Delivery Checklist

- [ ] No emoji icons — SVG only
- [ ] `cursor-pointer` on all interactive elements
- [ ] Hover transitions 200-300ms ease-out
- [ ] Dark mode: text contrast ≥ 4.5:1
- [ ] Focus rings visible (2px primary, 3px offset)
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] All images have alt text
- [ ] No horizontal scroll on mobile
