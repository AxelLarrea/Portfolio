---
name: Code Dark + Run Green
version: 3.0.0
colors:
  base: '#0F172A'
  surface: '#1E293B'
  surface-elevated: '#334155'
  surface-hover: '#1E293B'
  border: 'rgba(148,163,184,0.12)'
  border-strong: 'rgba(148,163,184,0.22)'
  text: '#F8FAFC'
  text-muted: '#94A3B8'
  text-soft: '#64748B'
  accent: '#22C55E'
  accent-glow: 'rgba(34,197,94,0.25)'
  accent-soft: 'rgba(34,197,94,0.10)'
typography:
  display:
    fontFamily: Onest Variable
    fontSize: clamp(3rem, 8vw, 5rem)
    fontWeight: '800'
    lineHeight: '1.08'
    letterSpacing: '-0.04em'
  heading:
    fontFamily: Onest Variable
    fontSize: clamp(1.75rem, 4vw, 2.5rem)
    fontWeight: '700'
    lineHeight: '1.2'
  body:
    fontFamily: Onest Variable
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.7'
  mono:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    letterSpacing: '0.08em'
rounded:
  sm: 0.375rem
  md: 0.5rem
  lg: 0.75rem
  xl: 1rem
spacing:
  container-max: 1200px
  gutter: 24px
  section-gap: 96px
---

## Brand & Style — Code Dark + Run Green

A developer-first portfolio aesthetic rooted in the terminal. Deep navy-slate surfaces with a single vibrant green accent — like a successful `npm run build`. The design is minimal, precise, and motion-driven.

### Key Principles

- **Terminal Heritage**: Dark backgrounds, monospaced accents, and the green "success" color evoke the developer's natural environment.
- **Motion with Restraint**: Scroll-triggered reveals and micro-interactions reward exploration without overwhelming.
- **Typographic Clarity**: Onest Variable unifies display and body with geometric precision; JetBrains Mono grounds in code.
- **Solid Surfaces**: No glassmorphism. Cards are solid `#1E293B` with subtle borders — substantial and professional.

### Style DNA

| Layer | Technique |
|-------|-----------|
| **Base** | Deep navy-slate `#0F172A` — terminal canvas |
| **Surfaces** | Solid `#1E293B` cards with `1px` border `rgba(148,163,184,0.12)` |
| **Accent** | Single green `#22C55E` for CTAs, status, highlights |
| **Motion** | IntersectionObserver reveals, smooth 200-300ms transitions |
| **Mono** | JetBrains Mono for labels, tags, code indicators |

## Colors

### Dark Mode (Default)

| Token | Value | Usage |
|-------|-------|-------|
| `--base` | `#0F172A` | Page background |
| `--surface` | `#1E293B` | Cards, panels |
| `--surface-elevated` | `#334155` | Hover states, elevated cards |
| `--border` | `rgba(148,163,184,0.12)` | Subtle borders |
| `--border-strong` | `rgba(148,163,184,0.22)` | Active/hover borders |
| `--text` | `#F8FAFC` | Primary text |
| `--text-muted` | `#94A3B8` | Secondary text |
| `--text-soft` | `#64748B` | Meta/label text |
| `--accent` | `#22C55E` | CTAs, links, highlights |
| `--accent-glow` | `rgba(34,197,94,0.25)` | Hover glow |
| `--accent-soft` | `rgba(34,197,94,0.10)` | Background wash |

### Light Mode

| Token | Value |
|-------|-------|
| `--base` | `#F8FAFC` |
| `--surface` | `#FFFFFF` |
| `--surface-elevated` | `#F1F5F9` |
| `--border` | `#E2E8F0` |
| `--text` | `#0F172A` |
| `--text-muted` | `#475569` |
| `--accent` | `#16A34A` |

## Typography

| Role | Font | Weights |
|------|------|---------|
| Display | Onest Variable | 800 |
| Body | Onest Variable | 400, 500 |
| Mono | JetBrains Mono | 500 |

## Components

### Cards
Solid surface `#1E293B`, `1px` border, `8px` radius. On hover: border brightens, subtle lift.

### Buttons
- **Primary**: Solid `#22C55E` bg, `#0F172A` text, glow on hover
- **Secondary**: `#1E293B` bg, `#22C55E` border

### Tags/Pills
JetBrains Mono, uppercase, `#1E293B` bg with green-tinted border.

## Pre-Delivery Checklist
- [ ] No emoji icons — SVG only
- [ ] `cursor-pointer` on all interactive elements
- [ ] Hover transitions 200-300ms
- [ ] Dark mode text contrast ≥ 4.5:1
- [ ] Focus rings visible
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375, 768, 1024, 1440px
