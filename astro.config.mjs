import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GANTI ke domain final kamu kalau sudah terpasang di Cloudflare Pages
  site: 'https://stephanieknaturals.com',

  // URL tanpa .html dan tanpa trailing slash → bersih untuk SEO
  // contoh: /about bukan /about.html atau /about/
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },

  integrations: [
    sitemap({
      // filter halaman yang tidak ingin masuk sitemap
      filter: (page) => !page.includes('/404'),
    }),
  ],

  // build output ke folder dist/, dipakai oleh wrangler pages deploy
  output: 'static',

  // kompres HTML output untuk load lebih cepat (bagus untuk Core Web Vitals)
  compressHTML: true,

  // prefetch link saat hover untuk navigasi instan
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
