# AGENTS.md

## Propósito

Portfolio personal de Axel Larrea construido con Astro. El objetivo del proyecto es presentar identidad profesional, proyectos destacados y stack técnico con una estética "Cyber-Professional": dark mode, superficies translúcidas, acentos cyan/violeta, tipografía precisa y microinteracciones sobrias.

## Stack

- Astro 5
- Tailwind CSS 4
- CSS global en `src/styles/global.css`
- Assets estáticos en `public/`
- Componentes e iconos Astro en `src/components/` y `src/assets/icons/`

## Estructura Del Proyecto

- `DESIGN.md`: design system fuente del proyecto.
- `src/pages/index.astro`: home principal del portfolio.
- `src/layouts/Layout.astro`: layout global, metadatos y shell base.
- `src/components/`: secciones y componentes reutilizables.
- `src/assets/icons/`: iconografía SVG encapsulada como componentes Astro.
- `src/styles/global.css`: tokens, utilidades globales y estilos base.
- `public/`: imágenes del perfil, screenshots y favicon.

## Convenciones

- Mantener el idioma principal del contenido en español.
- Priorizar fidelidad al `DESIGN.md` por encima de implementaciones previas.
- Favorecer composición en Astro con datos locales simples antes que complejidad innecesaria.
- Reutilizar assets existentes de `public/` cuando ayuden al brief visual.
- Mantener contraste alto, navegación sticky, y responsive desde mobile a desktop.
- Evitar efectos excesivos: el look debe sentirse técnico, limpio y premium.

## Comandos Útiles

- `npm run dev`: servidor de desarrollo.
- `npm run host`: servidor accesible en red local.
- `npm run build`: build de producción.
- `npx astro check`: validación del proyecto Astro.

## Skills Disponibles

Skills detectadas en `.agents/skills/`:

- `accessibility`
- `astro`
- `deploy-to-vercel`
- `frontend-design`
- `nodejs-backend-patterns`
- `nodejs-best-practices`
- `seo`
- `tailwind-css-patterns`
- `typescript-advanced-types`

## Guía De Trabajo Para Agentes

- Antes de rediseñar secciones, revisar `DESIGN.md`.
- Si se modifica la experiencia visual principal, validar responsive en hero, grid de proyectos y navbar.
- Si se agregan nuevos componentes, mantener nombres descriptivos y responsabilidad única.
- Si se introducen cambios sustanciales, ejecutar al menos `npx astro check` y, si aplica, `npm run build`.
