# matroskabatchflow.com — Copilot Instructions

## What This Is

This is the website and documentation repository for **Matroska Batch Flow**, a .NET desktop application for batch editing Matroska (`.mkv`) file container properties. The application lives in a separate repository: [`TimGels/Matroska-Batch-Flow`](https://github.com/TimGels/Matroska-Batch-Flow).

## About the Application

Matroska Batch Flow lets users batch-modify container properties (track names, languages, default/forced flags) across multiple `.mkv` files at once. It uses MediaInfo for metadata extraction and MKVToolNix's `mkvpropedit` for fast, direct container property editing.

### Key Features
- **Batch Editing** — Modify properties across multiple files simultaneously
- **Drag-and-Drop** — Add files or folders by dragging them into the app
- **Flexible Validation** — Three modes: Strict, Lenient, and Custom
- **Track Availability Indicators** — Visual indicators showing track coverage across files
- **Theme Support** — Light, Dark, or System theme

### App Tech Stack
- .NET 10, WinUI 3 / Uno Platform
- MediaInfo (file analysis), mkvpropedit (container editing)
- Windows-only (experimental cross-platform Skia target exists)

## External Links
- **GitHub Releases**: https://github.com/TimGels/Matroska-Batch-Flow/releases
- **GitHub Sponsors**: https://github.com/sponsors/TimGels
- **Buy Me a Coffee**: https://buymeacoffee.com/timgels
- **Application Repository**: https://github.com/TimGels/Matroska-Batch-Flow

## Website Tech Stack
- **Astro** — Static site generator
- **Svelte** — Interactive island components (theme toggle, mobile menu)
- **Tailwind CSS v4** — Utility-first styling with `class` dark mode strategy
- **MDX** — Documentation content via Astro Content Collections

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at localhost:4321
npm run build     # Build static output to dist/
npm run preview   # Preview the production build locally
```

## Deployment
- GitHub Actions builds and deploys to GitHub Pages on pushes to `main`
- Custom domain: `matroskabatchflow.com` (CNAME in `public/`)

## Site Structure

```
src/
├── components/       # Astro + Svelte components (Header, Hero, Features, etc.)
├── content/
│   └── docs/         # Markdown documentation pages (getting-started, user-guide, settings, faq)
├── layouts/          # BaseLayout (SEO/OG), DocsLayout (sidebar + content)
├── pages/
│   ├── index.astro   # Landing page
│   └── docs/
│       └── [slug].astro  # Dynamic docs route
└── styles/
    └── global.css    # Tailwind imports + custom theme
```

## Content Guidelines
- When updating documentation, reference the main repo's README, `appsettings.json`, and in-app UI for accuracy
- Documentation is in `src/content/docs/` as Markdown with frontmatter (`title`, `description`, `order`)
- The `order` field controls sidebar navigation order

## SEO
- Full Open Graph and Twitter Card meta tags in `BaseLayout.astro`
- JSON-LD structured data for `SoftwareApplication` schema
- Canonical URLs on all pages
- Theme color: `#6d24ff`

## Licenses
- **Website**: CC BY-NC-ND 4.0
- **Application**: GPL-3.0

## Commit Messages
Follow [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).
