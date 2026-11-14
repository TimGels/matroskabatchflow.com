// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkDirective from 'remark-directive';
import { remarkAsides } from './src/plugins/remark-asides.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://matroskabatchflow.com',
  // Preserve whitespace between inline elements from earlier Astro versions.
  compressHTML: true,
  integrations: [svelte(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkDirective, remarkAsides],
    }),
  },
});