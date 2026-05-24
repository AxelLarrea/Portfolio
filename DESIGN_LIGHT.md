---
name: Lumina Cyber-Professional
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#464555'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#712ae2'
  on-secondary: '#ffffff'
  secondary-container: '#8a4cfc'
  on-secondary-container: '#fffbff'
  tertiary: '#00505f'
  on-tertiary: '#ffffff'
  tertiary-container: '#006a7c'
  on-tertiary-container: '#93e8ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Sora
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Sora
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  button-text:
    fontFamily: Sora
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  container-max: 1280px
---

## Brand & Style
This design system balances technical precision with a high-end, gallery-like aesthetic. It is tailored for high-stakes creative professionals, developers, and architects who need to project both technical mastery and refined taste.

The style is **Cyber-Minimalism**: a light-mode evolution of the "cyberpunk" aesthetic. It replaces dark-mode neon tropes with a "laboratory-clean" environment. The emotional response is one of clarity, efficiency, and premium quality. Key visual drivers include:
- **Clinical Precision:** Use of hairline strokes and monospaced accents to denote technical rigor.
- **Translucent Depth:** Light-mode glassmorphism that feels like frosted acrylic rather than deep glass.
- **Architectural Layout:** Rigorous adherence to grid lines and structural alignment.

## Colors
The palette shifts from emissive glows to pigment-rich depth.
- **Primary (Indigo):** A deep, saturated Indigo (#4F46E5) serves as the core interactive color, ensuring high legibility and a professional "SaaS-plus" feel.
- **Surface:** The foundation is a stark White (#FFFFFF) supported by Neutral-50 (#F8FAFC) for secondary containers.
- **Accents:** A Secondary Violet (#7C3AED) is used for active states and gradients, while a Tertiary Cyan (#06B6D4) is reserved for small data points or "success" indicators to maintain the cyber heritage.
- **Borders:** Hairline strokes use a precise Light Grey (#E2E8F0) to define structure without adding visual weight.

## Typography
The system uses **Sora** for all primary communication to leverage its unique geometric construction and technical personality. To reinforce the "Cyber" aspect, **JetBrains Mono** is introduced for metadata, labels, and small technical callouts.

- **Headlines:** Set with tight letter-spacing to create a "blocky," structural feel.
- **Labels:** Always uppercase in JetBrains Mono to mimic code comments or instrumentation readouts.
- **Body:** Generous line-height ensures high readability against the white background.

## Layout & Spacing
The layout follows a **Strict Fluid Grid** model.
- **Grid:** 12-column layout for desktop with 24px gutters. Elements should align strictly to these columns to maintain the "engineered" look.
- **Rhythm:** An 8px base unit drives all padding and margins, ensuring mathematical consistency.
- **Whitespace:** Use aggressive whitespace (Level 8: 64px+) between sections to allow the glassmorphic elements to breathe.
- **Mobile:** Transition to a 4-column grid with reduced margins (20px). Headlines should scale down significantly to avoid awkward breaks.

## Elevation & Depth
Elevation is achieved through **Frosted Layering** rather than traditional shadows.
- **The Glass Effect:** Use `backdrop-filter: blur(12px)` with a semi-transparent white fill (`rgba(255, 255, 255, 0.7)`).
- **Soft Depth:** Instead of dark shadows, use very soft, large-radius shadows with a hint of the primary color: `0 20px 40px rgba(79, 70, 229, 0.05)`.
- **Structural Outlines:** Every card or floating element must have a 1px border. Use a subtle gradient for these borders (e.g., from Neutral-200 to transparent) to simulate light hitting a sharp edge.

## Shapes
The shape language is **Soft-Geometric**. 
- **Radius:** Standard components use a 0.25rem (4px) radius. This provides just enough softening to feel modern while maintaining the rigid, technical "grid" aesthetic.
- **Accents:** Use 45-degree chamfered corners on decorative elements or button hover states to reference "cyber" hardware interfaces.
- **Interactive:** Pill shapes are avoided except for small tags or chips to maintain the professional, rectangular architecture.

## Components
- **Buttons:** Primary buttons use a solid Indigo fill with white Sora text. Secondary buttons use the "Glass" effect with a 1px Indigo border. Use a slight "lift" on hover (shadow increase) rather than a color change.
- **Input Fields:** Minimalist design with only a bottom border that transitions from Grey to Indigo on focus. Include a JetBrains Mono label floating above.
- **Cards:** Use the frosted glass background. On hover, the 1px border should shift from Neutral-200 to a Primary Indigo gradient.
- **Chips/Tags:** Small, rectangular boxes with a light indigo background (#EEF2FF) and Indigo text. Use monospaced font for these.
- **Terminal Lists:** For experience or skill lists, use a monospaced "01", "02" prefix in a light tertiary cyan to maintain the technical narrative.
- **Breadcrumbs:** Connected by thin horizontal lines (hairline strokes) to emphasize the "connection" and "circuitry" of the site navigation.