// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Custom domain (GitHub Pages serves at the root via public/CNAME).
export default defineConfig({
  site: 'https://sanjaydev.online',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
