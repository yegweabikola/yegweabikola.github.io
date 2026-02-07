// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Detect CI (GitHub Actions) to configure GitHub Pages settings
const isCI = !!process.env.GITHUB_ACTIONS;
const repoSlug = process.env.GITHUB_REPOSITORY; // e.g. "owner/repo"
const repoOwner = repoSlug ? repoSlug.split('/')[0] : undefined;

export default defineConfig({
  // Only set `site` on CI to avoid invalid local URLs
  site: isCI && repoOwner ? `https://${repoOwner}.github.io` : undefined,
  // Use root base locally; use repo name as base on GitHub Pages
  base: isCI ? '/boda' : '/',
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app'],
    },
  },
});
