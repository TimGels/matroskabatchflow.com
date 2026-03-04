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

## Commit Message Standards

**Copilot MUST follow [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) specification when generating commit messages.**

### Format
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Required Types
- `feat:` - A new feature (correlates with MINOR in SemVer)
- `fix:` - A bug fix (correlates with PATCH in SemVer)

### Recommended Types
Additional types from @commitlint/config-conventional (Angular convention):
- `build:` - Changes to build system or dependencies
- `chore:` - Maintenance tasks
- `ci:` - CI/CD configuration changes
- `docs:` - Documentation changes
- `style:` - Code style/formatting changes (no functional changes)
- `refactor:` - Code refactoring without behavior change
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `revert:` - Reverting a previous commit

### Scope (Optional)
Scopes represent **what the change is about** (functional/logical areas), not just physical project locations.

**Common scopes used in this codebase:**

*Site sections:*
- `landing` - Landing page sections (Hero, Features, Showcase, Download)
- `docs` - Documentation content and docs layout
- `sponsor` - Sponsor page

*Components:*
- `header` - Header/navigation
- `footer` - Footer
- `theme` - Theme toggle, dark mode
- `carousel` - Image carousel

*Infrastructure:*
- `seo` - SEO, Open Graph, JSON-LD
- `styles` - Global CSS, Tailwind theme
- `config` - Astro config, content collections, version config
- `deps` - Package dependencies

*Tooling:*
- `ci` - GitHub Actions workflows
- `dev` - Development tooling

*Documentation:*
- `instructions` - AI assistant instructions (copilot-instructions.md, Serena memories)

> **Note:** `build`, `ci`, `docs`, and `test` are commit **types**, not scopes. Use them as types (e.g., `build: update project files`, `docs: update README`).

**When to use a scope:**
- Changes focus on a specific functional area or component
- Examples: `feat(docs): add settings page`, `fix(theme): persist dark mode preference`

**When to omit the scope:**
- Changes are truly repository-wide or don't fit a single category
- Examples: `chore: update all dependencies`, `docs: update README`

**Multiple scopes:**
- Use comma-separated scopes when changes span multiple areas: `refactor(header,footer): unify nav links`

**Expanding scopes:**
- The scopes above are common examples, not an exhaustive list
- Create new scopes when needed for clarity (e.g., `feat(carousel): add autoplay support`)

### Breaking Changes
- **Option 1**: Add `!` after type/scope: `feat(config)!: redesign content collection schema`
- **Option 2**: Use footer: `BREAKING CHANGE: description` (MUST be uppercase)
- Breaking changes correlate with MAJOR in SemVer

### Body (Optional)
- Provide additional context after a blank line
- Free-form text, may contain multiple paragraphs
- **Project preference**: Use bullet points for clarity, without blank lines between items

### Footer(s) (Optional)
Footers follow git trailer format (token: value or token #value):
- `BREAKING CHANGE: <description>` - Breaking change details
- `Refs: #123` - Reference issues
- `Closes: #123` or `Fixes: #123` or `Resolves: #123` - Close issues
- `Reviewed-by:`, `Acked-by:`, `See-also:` - Other standard git trailers

### Examples

**Simple feature:**
```
feat(docs): add FAQ page
```

**Bug fix with body and footer:**
```
fix(theme): prevent flash of unstyled content on page load

- Move theme initialization script to head
- Check localStorage before body renders

Closes: #12
```

**Breaking change with scope:**
```
feat(config)!: redesign content collection schema

- Replace glob loader with file-based loader
- Update all frontmatter to match new schema
- Migration guide added to README

BREAKING CHANGE: content collection schema changed, existing docs need frontmatter updates
Refs: #25
```

**Documentation update:**
```
docs: update README with deployment instructions

Refs: #42
```

### Important Rules
- Type and description are REQUIRED
- Description MUST immediately follow the colon and space
- Scope MUST be a noun in parentheses if provided
- BREAKING CHANGE footer MUST be uppercase
- Breaking changes can use `!` in prefix OR footer (or both)
- Tokens other than BREAKING CHANGE are case-insensitive

> **Cross-reference**: Detailed Conventional Commits standards are also in Serena's memory (`.serena/memories/task_completion.md`). Keep both locations synchronized.
