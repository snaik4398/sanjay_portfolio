import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// A .ts config so the site URL comes from the one config file rather than being
// duplicated here. This is the only reason this file is TypeScript.
import { IS_CLOUDFLARE, SITE } from './src/data/portfolio';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  // Cloudflare Pages serves the custom domain at the root; GitHub Pages serves this repo
  // as a project site at /sanjay_portfolio/. IS_CLOUDFLARE picks the right one for whichever
  // host is running this build — see the comment on it in src/data/portfolio.ts. Every
  // internal href/src is prefixed with import.meta.env.BASE_URL so both resolve correctly.
  base: IS_CLOUDFLARE ? '/' : '/sanjay_portfolio/',
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { format: 'directory' },
});
