// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://goniabogados.cl',
  image: {
    // Permite que <Image>/getImage() de astro:assets optimice (resize +
    // AVIF/WebP + srcset) imágenes remotas en build time, sin depender de
    // un servicio de resizing en el CDN de origen.
    domains: [
      'pub-396ba7766f0a49cba86800f9d74523ad.r2.dev',
      'images.pexels.com',
      'images.unsplash.com',
      'randomuser.me',
    ],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});