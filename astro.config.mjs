import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const previewBase = process.env.ASTRO_BASE || '/';
const siteUrl = process.env.ASTRO_SITE || 'https://bkaccountingtax.com';

export default defineConfig({
  site: siteUrl,
  base: previewBase,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
