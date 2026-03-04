# Project Structure

```
astro.config.mjs          # Astro config: site URL, integrations (svelte, mdx, sitemap), Tailwind via Vite, remark plugins
package.json               # Dependencies and scripts
svelte.config.js           # Svelte preprocessor config (vitePreprocess)
tsconfig.json              # Extends astro/tsconfigs/strict

public/
├── CNAME                  # Custom domain for GitHub Pages
├── robots.txt
└── images/
    └── og-banner.png      # Open Graph banner image

src/
├── content.config.ts      # Astro Content Collections: docs collection with title, description, order fields
├── assets/
│   └── screenshots/       # App screenshots (Audio-Config-Page.jpg, Input-Page.jpg, Results-Page.jpg, Settings-Page.jpg)
├── components/
│   ├── Carousel.svelte    # Image carousel (Svelte island)
│   ├── Download.astro     # Download section
│   ├── Features.astro     # Features section
│   ├── Footer.astro       # Footer
│   ├── Header.astro       # Sticky header with nav links
│   ├── Hero.astro         # Hero section with logo, tagline, CTA
│   ├── MobileMenu.svelte  # Mobile hamburger menu (Svelte island)
│   ├── Screenshots.astro  # Screenshots section
│   ├── Showcase.astro     # Showcase section
│   ├── Sponsors.astro     # Sponsors section
│   └── ThemeToggle.svelte # Light/dark theme toggle (Svelte island)
├── config/
│   └── version.ts         # latestVersion constant (auto-updated by GitHub Actions)
├── content/
│   └── docs/              # Documentation Markdown files with frontmatter (title, description, order)
│       ├── faq.md
│       ├── getting-started.md
│       ├── settings.md
│       └── user-guide.md
├── layouts/
│   ├── BaseLayout.astro   # Root layout: SEO, Open Graph, JSON-LD, theme init script
│   └── DocsLayout.astro   # Docs layout: sidebar nav + content area
├── pages/
│   ├── index.astro        # Landing page
│   ├── sponsor.astro      # Sponsor page
│   └── docs/
│       └── [slug].astro   # Dynamic docs route
├── plugins/
│   └── remark-asides.mjs  # Custom remark plugin for :::note/tip/caution/danger asides
└── styles/
    └── global.css         # Tailwind v4 imports, custom theme colors, prose styles, aside styles
```
