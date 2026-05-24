# Goñi & Cía. Abogados — Sitio corporativo

Sitio web institucional para Goñi & Cía. Abogados S.A., estudio jurídico boutique
especializado en seguros, responsabilidad civil y derecho de transporte
marítimo, aéreo y terrestre.

Construido con **Astro 6** y **Tailwind CSS 4**, pensado como un MVP rápido de
levantar y preparado para conectarse más adelante con **Strapi CMS** sin
reescribir las páginas.

## Stack

- **Astro 6** · sitio estático con Islands Architecture.
- **Tailwind CSS 4** · sistema de utilidades + tokens propios en `src/styles/global.css`.
- **TypeScript estricto**.
- **Tipografías**:
  - `Gilda Display` (Google Fonts) para títulos y voces editoriales.
  - `Geist` para textos largos e interfaz.

## Estructura del proyecto

```
src/
├── components/        # Header, Footer, SectionHeader compartidos
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   ├── cms.ts         # Adaptador único (preparado para Strapi)
│   ├── content.ts     # Datos curados (mock) e implementación local
│   └── types.ts       # Contratos TypeScript del contenido
├── pages/
│   ├── index.astro                       # Home
│   ├── areas-de-practica/
│   │   ├── index.astro                   # Listado
│   │   └── [slug].astro                  # Detalle por área
│   ├── publicaciones/
│   │   ├── index.astro                   # Listado
│   │   └── [slug].astro                  # Detalle por publicación
│   ├── nosotros.astro
│   └── contacto.astro
└── styles/
    └── global.css     # Tokens (colores, tipografías) + base + componentes
```

## Sistema de diseño

Definido como variables CSS en `src/styles/global.css` y expuestas como tokens
de Tailwind v4 vía `@theme`:

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-ink` | `#0f1822` | Texto principal, fondos oscuros |
| `--color-ink-soft` | `#2a3340` | Hover de fondos oscuros |
| `--color-stone-deep` | `#4a525d` | Texto secundario, leads |
| `--color-stone` | `#8a8f99` | Texto terciario, separadores activos |
| `--color-line` | `#e3e1dc` | Líneas y bordes sutiles |
| `--color-cream` | `#f6f3ee` | Bloques de respiro / fondos cálidos |
| `--color-paper` | `#fbfaf7` | Fondo de página |
| `--color-bronze` | `#8a6a3f` | Acentos editoriales |
| `--color-bronze-soft` | `#b89a6c` | Acentos sobre fondos oscuros |

Espaciado vertical generoso por defecto (`py-20`, `py-28`, `py-32`, `py-40`)
para imprimir el ritmo visual de tranquilidad pedido por el cliente.

## Capa de datos · preparada para Strapi

Todo el contenido se consume vía `cms` (`src/lib/cms.ts`). Hoy la implementación
delega en `src/lib/content.ts`, pero cada página ya `await`-ea las llamadas, por
lo que migrar a Strapi solo requiere reemplazar el cuerpo de los métodos en
`cms.ts` por llamadas `fetch` a la API REST de Strapi (manteniendo los tipos en
`src/lib/types.ts`).

Ejemplo de migración futura:

```ts
async getPracticeAreas(): Promise<PracticeArea[]> {
  const res = await fetch(
    `${import.meta.env.STRAPI_URL}/api/practice-areas?populate=*`,
    { headers: { Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}` } }
  );
  const data = await res.json();
  return data.data.map(mapPracticeArea);
}
```

## Páginas implementadas

- `/` · Home (hero, indicadores de confianza, áreas, testimonios, reconocimientos, publicaciones, CTA).
- `/areas-de-practica` · Listado completo.
- `/areas-de-practica/[slug]` · Detalle por área con servicios e industrias.
- `/publicaciones` · Listado con publicación destacada.
- `/publicaciones/[slug]` · Detalle largo y sidebar de contacto.
- `/nosotros` · Identidad, valores, socio fundador y equipo con foto y bio.
- `/contacto` · Datos de contacto, formulario y ubicación.

## Cómo correr el proyecto

```bash
# Node 22 o superior recomendado
nvm use 22

npm install
npm run dev      # http://localhost:4321
npm run build    # genera ./dist
npm run preview  # previsualiza el build
```

## Créditos de medios

- **Hero (video):** [Scenic view of cargo ships on calm sea](https://www.pexels.com/video/scenic-view-of-cargo-ships-on-calm-sea-34533819/) — Video by Evgenij Mikhailov from Pexels.
- **Hero (poster):** imagen de respaldo vía Unsplash mientras carga el video.

## Próximos pasos sugeridos

1. Conectar el adaptador `cms` con la API de Strapi (REST o GraphQL).
2. Optimizar `public/videos/cargo-ships-hero.mp4` (hoy ~22 MB; ideal &lt; 8 MB con ffmpeg).
3. Reemplazar las fotos del equipo (hoy desde Unsplash) por imágenes propias.
4. Implementar el endpoint del formulario de contacto (`/api/contact`).
5. Definir un sitemap y robots, y registrar dominio en Search Console.
6. Añadir analítica (idealmente respetuosa de privacidad como Plausible).
