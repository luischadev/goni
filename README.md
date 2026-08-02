# Goñi & Cía. Abogados — Sitio corporativo

Sitio web institucional para Goñi & Cía. Abogados S.A., estudio jurídico boutique
especializado en seguros, responsabilidad civil y derecho de transporte
marítimo, aéreo y terrestre.

Construido con **Astro 6** y **Tailwind CSS 4**. El contenido vive en módulos
locales detrás de un adaptador `cms` preparado para migrar a Strapi sin
reescribir las páginas.

Para un mapa mental del repo, ver [`ARCHITECTURE.md`](./ARCHITECTURE.md).

## Stack

- **Astro 6** · sitio estático (SSG).
- **Tailwind CSS 4** · utilidades + tokens semánticos en `src/styles/`.
- **TypeScript estricto** (`astro/tsconfigs/strict`).
- **GSAP** · animaciones scroll (hero indicators, text reveal, backgrounds).
- **Tipografías**:
  - Display: `Optima` (stack de sistema) para títulos.
  - Body/UI: `IBM Plex Sans` (Google Fonts).
  - Iconos: Material Symbols Sharp.

## Estructura del proyecto

```
src/
├── components/
│   ├── ui/              # Primitivos (Button, TextLink, Sheet, AvatarGroup…)
│   ├── header/          # Nav desktop/mobile
│   ├── home/            # Secciones exclusivas del home
│   ├── practice/        # Áreas de práctica
│   ├── publications/    # Cards / listados de publicaciones
│   ├── testimonials/    # Carrusel horizontal (listo, no montado en home hoy)
│   ├── PageHero.astro
│   ├── Header.astro / Footer.astro / CTASection.astro
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   ├── cms.ts           # Único punto de entrada de datos para las páginas
│   ├── content/         # Contenido curado por dominio (site, team, areas…)
│   ├── media.ts         # Resolución de URLs (R2 / CDN)
│   ├── types.ts         # Contratos TypeScript
│   ├── toast.ts
│   └── ui-classes.ts    # Variantes de Button / TextLink
├── pages/               # Rutas Astro
├── scripts/             # JS cliente (GSAP, formulario de contacto)
└── styles/
    ├── global.css       # Entry: importa tokens → base → components
    ├── tokens.css
    ├── base.css
    └── components.css
```

## Sistema de diseño

Definido en `src/styles/tokens.css`:

| Token semántico | Uso |
| --- | --- |
| `surface` / `surface-soft` | Fondos de página y secciones |
| `surface-inverse` | Bloques oscuros, footer, heroes |
| `fg` / `fg-muted` / `fg-subtle` | Jerarquía de texto |
| `fg-accent` | Acentos interactivos (azul) |
| `fg-on-inverse*` | Texto sobre fondos oscuros |
| `line` / `line-strong` | Bordes y separadores |

Los componentes deben usar tokens semánticos (`bg-surface`, `text-fg`), nunca
los primitivos `--palette-*` directamente.

## Capa de datos

Todo el contenido se consume vía `cms` (`src/lib/cms.ts`). Hoy delega en
`src/lib/content/*`. Las páginas ya hacen `await`, así que migrar a Strapi
solo requiere reemplazar la implementación dentro de `cms.ts`.

Los medios pesados (videos, fotos de equipo, heroes de áreas) viven en
**Cloudflare R2**. La base URL se configura con:

```bash
PUBLIC_MEDIA_BASE_URL=https://pub-….r2.dev
```

Ver `.env.example`.

## Páginas

- `/` · Home (hero, intro, trayectoria scroll, áreas, CTA)
- `/areas-de-practica` · Listado
- `/areas-de-practica/[slug]` · Detalle
- `/publicaciones` · Listado
- `/publicaciones/[slug]` · Detalle
- `/nosotros` · Equipo
- `/contacto` · Datos + formulario

## Cómo correr el proyecto

```bash
# Node 22+ (engines en package.json)
nvm use 22

npm install
npm run dev      # http://localhost:4321
npm run build    # genera ./dist (+ poster del hero si hace falta)
npm run preview  # previsualiza el build
```

## Scripts útiles

| Script | Qué hace |
| --- | --- |
| `npm run generate:hero-poster` | Extrae un frame JPG del video hero (requiere `ffmpeg`) |
| `predev` / `build` | Corren el poster automáticamente |

## Próximos pasos sugeridos

1. Conectar el adaptador `cms` con Strapi (REST o GraphQL).
2. Sitemap + robots + Search Console.
3. Analítica privacy-friendly (p. ej. Plausible).
4. Remontar testimonios / publicaciones en el home cuando el contenido esté listo
   (`TestimonialHorizontalSection` y `PublicationItem` ya existen).
