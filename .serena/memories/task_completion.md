# Task Completion Checklist

When a coding task is completed, follow these steps:

## 1. Verify the build
```bash
npm run build
```
Ensure there are no build errors. This is the primary validation since there are no linters or test suites.

## 2. Visual check (if applicable)
If the change affects the UI, suggest running:
```bash
npm run dev
```
And verify the change at `http://localhost:4321`.

## 3. Commit message

**Follow [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) specification.**

### Format
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Required Types
- `feat:` — A new feature (correlates with MINOR in SemVer)
- `fix:` — A bug fix (correlates with PATCH in SemVer)

### Recommended Types
- `build:` — Changes to build system or dependencies
- `chore:` — Maintenance tasks
- `ci:` — CI/CD configuration changes
- `docs:` — Documentation changes
- `style:` — Code style/formatting changes (no functional changes)
- `refactor:` — Code refactoring without behavior change
- `perf:` — Performance improvements
- `test:` — Adding or updating tests
- `revert:` — Reverting a previous commit

### Scope (Optional)
Scopes represent **what the change is about** (functional/logical areas).

**Common scopes for this website repo:**

*Site sections:*
- `landing` — Landing page sections (Hero, Features, Showcase, Download)
- `docs` — Documentation content and docs layout
- `sponsor` — Sponsor page

*Components:*
- `header` — Header/navigation
- `footer` — Footer
- `theme` — Theme toggle, dark mode
- `carousel` — Image carousel

*Infrastructure:*
- `seo` — SEO, Open Graph, JSON-LD
- `styles` — Global CSS, Tailwind theme
- `config` — Astro config, content collections, version config
- `deps` — Package dependencies

*Tooling:*
- `ci` — GitHub Actions workflows
- `dev` — Development tooling

*Documentation:*
- `instructions` — AI assistant instructions (copilot-instructions.md, Serena memories)

> **Note:** `build`, `ci`, `docs`, and `test` are commit **types**, not scopes.

**When to use a scope:**
- Changes focus on a specific functional area or component
- Examples: `feat(docs): add settings page`, `fix(theme): persist dark mode preference`

**When to omit the scope:**
- Changes are truly repository-wide or don't fit a single category
- Examples: `chore: update all dependencies`, `docs: update README`

**Multiple scopes:**
- Use comma-separated scopes when changes span multiple areas: `refactor(header,footer): unify nav links`

**Expanding scopes:**
- The scopes above are common examples, not exhaustive. Create new scopes when needed for clarity.

### Breaking Changes
- **Option 1**: Add `!` after type/scope: `feat(config)!: redesign content collection schema`
- **Option 2**: Use footer: `BREAKING CHANGE: description` (MUST be uppercase)

### Body (Optional)
- Provide additional context after a blank line
- Free-form text, may contain multiple paragraphs
- **Project preference**: Use bullet points for clarity, without blank lines between items

### Footer(s) (Optional)
Footers follow git trailer format:
- `BREAKING CHANGE: <description>`
- `Refs: #123` — Reference issues
- `Closes: #123` / `Fixes: #123` / `Resolves: #123` — Close issues

### Examples

**Simple feature:**
```
feat(docs): add FAQ page
```

**Bug fix with body:**
```
fix(theme): prevent flash of unstyled content on page load

- Move theme initialization script to head
- Check localStorage before body renders
```

**Documentation update:**
```
docs: update README with deployment instructions
```

## Notes
- No ESLint, Prettier, or automated tests are configured
- The `src/config/version.ts` file is auto-updated by CI — do not modify manually
- Content in `src/content/docs/` requires valid frontmatter (`title`, `description`, `order`)

> **Cross-reference**: Commit message standards are also in `.github/copilot-instructions.md`. Keep both locations synchronized.
