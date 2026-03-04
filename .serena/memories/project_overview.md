# Project Overview

## Purpose
This is the **website and documentation** for **Matroska Batch Flow**, a .NET desktop application for batch editing Matroska (`.mkv`) file container properties. The application itself lives in a separate repository: [TimGels/Matroska-Batch-Flow](https://github.com/TimGels/Matroska-Batch-Flow).

This repository contains:
- A landing page (homepage) with hero, features, showcase, download, and sponsor sections
- Documentation pages (getting-started, user-guide, settings, FAQ) served via Astro Content Collections
- A sponsor page

## Tech Stack
- **Astro 5** — Static site generator (SSG)
- **Svelte 5** — Used for interactive "island" components (ThemeToggle, MobileMenu, Carousel)
- **Tailwind CSS v4** — Utility-first styling, using `class` dark mode strategy via `@custom-variant dark`
- **MDX** — Documentation content authored as Markdown with frontmatter, loaded via Astro Content Collections with a glob loader
- **TypeScript** — Strict mode (extends `astro/tsconfigs/strict`)
- **remark-directive + custom remark-asides plugin** — Transforms `:::note`, `:::tip`, `:::caution`, `:::danger` directives into styled aside elements

## Deployment
- GitHub Actions builds and deploys to **GitHub Pages** on pushes to `main`
- Custom domain: `matroskabatchflow.com` (CNAME in `public/`)
- Sitemap generation via `@astrojs/sitemap`

## External Links
- GitHub Releases: https://github.com/TimGels/Matroska-Batch-Flow/releases
- GitHub Sponsors: https://github.com/sponsors/TimGels
- Buy Me a Coffee: https://buymeacoffee.com/timgels

## Licenses
- Website: CC BY-NC-ND 4.0
- Application: GPL-3.0
