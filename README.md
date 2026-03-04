<div align="center">

<img src="src/assets/logo.png" alt="Matroska Batch Flow logo" width="128" />

# matroskabatchflow.com

The website and documentation for **[Matroska Batch Flow](https://github.com/TimGels/Matroska-Batch-Flow)**, a desktop app for batch editing Matroska (.mkv) properties.

[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey?style=flat-square)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

</div>

## Tech Stack

| Technology                                  | Role                          |
| ------------------------------------------- | ----------------------------- |
| [Astro](https://astro.build/)               | Static site generator         |
| [Svelte](https://svelte.dev/)               | Interactive island components |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling         |
| [MDX](https://mdxjs.com/)                   | Documentation pages           |

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) 22 (see [`.node-version`](.node-version))

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at **<http://localhost:4321>**.

## Deployment

Pushes to `main` trigger a **GitHub Actions** workflow that builds the site and deploys it to **GitHub Pages** at [matroskabatchflow.com](https://matroskabatchflow.com/).

## License

This website and its content are licensed under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).
