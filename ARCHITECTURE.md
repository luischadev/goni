# Architecture

Guía corta para quien entra al repo. El sitio es SSG (Astro): no hay servidor
de aplicación en runtime.

## Flujo de datos

```
page (src/pages/*)
  └─ await cms.*()          ← único entrypoint público
       └─ content/*         ← datos locales curados (hoy)
       └─ media.ts          ← resuelve URLs relativas → R2/CDN
```

- **Páginas** no importan `content/*` salvo helpers puros (p. ej.
  `formatPublicationDate`). Preferir siempre `cms`.
- **Componentes de presentación** pueden recibir datos ya resueltos por props,
  o llamar helpers sync de `content` cuando hace falta un lookup local
  (p. ej. hero image por slug dentro de un `.map()`).
- Cuando se conecte Strapi, solo cambia el cuerpo de los métodos en `cms.ts`.
  Los tipos en `types.ts` se mantienen.

## Dónde va cada cosa

| Quieres… | Ve a… |
| --- | --- |
| Nueva página / ruta | `src/pages/` |
| Sección reutilizable de marketing | `src/components/<dominio>/` |
| Botón, link, sheet, avatar | `src/components/ui/` |
| Copy, equipo, áreas, publicaciones | `src/lib/content/<dominio>.ts` |
| Fetch / resolución CMS | `src/lib/cms.ts` |
| URL de video/imagen (R2) | `src/lib/media.ts` + `PUBLIC_MEDIA_BASE_URL` |
| Animación scroll / form JS | `src/scripts/` |
| Color, tipografía, radius | `src/styles/tokens.css` |
| Layout util (`.container-x`, `.reveal`) | `src/styles/components.css` |

## Estilos

`global.css` solo orquesta imports, en este orden:

1. `tailwindcss`
2. `tokens.css` — primitivos + `@theme` semántico
3. `base.css` — resets / tipografía base
4. `components.css` — utilidades de layout y features CSS compartidas

No hardcodear hex en componentes; usar utilities de token (`bg-surface`,
`text-fg-muted`, etc.).

## Motion / scripts cliente

Los `<script>` de Astro se bundlean como módulos. Convención:

- Inicializar en load + re-inicializar en `astro:page-load` (por si hay view
  transitions a futuro).
- Preferir `data-*` hooks en el markup (`data-scroll-scene`,
  `data-contact-form`) en vez de selectores frágiles por clase.

Scripts activos hoy:

- `scroll-background.ts` / `scroll-text-reveal.ts` — CTA e intro
- `horizontal-scroll.ts` — testimonios (componente listo; no montado en home)
- `contact-form.ts` — formulario de `/contacto`
- GSAP inline en `TrustIndicatorsSection.astro` — escena de trayectoria

## Medios

- Videos e imágenes de equipo / áreas: Cloudflare R2
  (`PUBLIC_MEDIA_BASE_URL`).
- Astro `Image` (`astro:assets`) optimiza remotos en build cuando el dominio
  está en `astro.config.mjs` → `image.domains`.
- El poster del hero se genera con `scripts/generate-hero-poster.mjs` (ffmpeg).
- `public/videos/*.mp4` está en `.gitignore`; en local el video se sirve desde
  R2 si la env var está definida.

## Qué no hacer

- No agregar una segunda fuente de verdad de contenido fuera de `cms` /
  `content`.
- No dejar componentes “V2” o versiones comentadas en el árbol activo.
- No importar primitivos `--palette-*` desde componentes de página.
