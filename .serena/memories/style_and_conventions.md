# Code Style & Conventions

## General
- **Language**: TypeScript (strict), with `.astro`, `.svelte`, `.mjs`, `.ts` files
- **Module system**: ESM (`"type": "module"` in package.json)
- **No linter/formatter configured** — follow existing code patterns

## Astro Components (`.astro`)
- Frontmatter (TypeScript) between `---` fences at the top
- Props defined via `interface Props { ... }` plus destructuring from `Astro.props`
- Use `astro:assets` `Image` component for optimized images
- Use Tailwind utility classes directly in `class` attributes
- Dark mode via `dark:` variant (Tailwind `class` strategy with `html.dark`)

## Svelte Components (`.svelte`)
- Svelte 5 syntax: `$state()`, `$effect()` runes
- `<script lang="ts">` for TypeScript
- Hydrated as Astro islands via `client:load` directive
- Tailwind classes used directly in markup

## CSS (Tailwind v4)
- Global styles in `src/styles/global.css`
- Custom theme colors defined in `@theme { ... }` block (primary, accent, surface palettes)
- Dark mode via `@custom-variant dark (&:where(.dark, .dark *));`
- Prose styles for docs content are manually defined (not using `@tailwindcss/typography`)
- Aside/admonition styles for note, tip, caution, danger

## Naming Conventions
- Components: PascalCase filenames (e.g., `Header.astro`, `ThemeToggle.svelte`)
- Config files: camelCase (e.g., `version.ts`, `content.config.ts`)
- CSS custom properties: kebab-case with category prefix (e.g., `--color-primary-500`)
- Documentation files: kebab-case (e.g., `getting-started.md`, `user-guide.md`)

## Documentation (Content Collections)
- Stored in `src/content/docs/` as Markdown files
- Required frontmatter: `title` (string), `description` (string), `order` (number)
- `order` field controls sidebar navigation order
- Uses remark-directive with custom `remark-asides` plugin for `:::note`, `:::tip`, `:::caution`, `:::danger` blocks

## Imports
- Use relative paths for local imports
- Use `astro:assets` for image imports
- Use `astro:content` for content collection APIs
