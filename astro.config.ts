import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// A .ts config so the site URL comes from the one config file rather than being
// duplicated here. This is the only reason this file is TypeScript.
import { SITE } from './src/data/portfolio';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { format: 'directory' },
});
