// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://yegweabikola.github.io',
  base: '/',
  integrations: [sitemap()],
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app'],
    },
  },
});
