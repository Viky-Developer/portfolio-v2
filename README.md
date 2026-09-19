# Vignesh S — Portfolio v2

A high-performance personal engineering workspace portfolio built with **SvelteKit**, **Svelte 5 (Runes)**, **TypeScript**, and **Tailwind CSS v4**, engineered around the **Deep Forest / Charcoal / Warm Cream** visual identity.

---

## Features & Architecture

- **Svelte 5 Runes**: Modern reactive primitives (`$state`, `$props`, `$derived`, snippets) without legacy Svelte 4 reactivity.
- **Deep Forest Design System**:
  - **Near-Black Forest Canvas**: `#07110D` (main), `#0A1712` (secondary).
  - **Dark Moss Surfaces**: `#0D1B15` (primary surface), `#11231B` (elevated surface).
  - **Editorial Typography**: Warm Cream (`#F0EBDD` primary), Soft Stone (`#B8B9AE` body), JetBrains Mono for monospace code and labels.
  - **Restrained Accents**: Soft Sage (`#8BCB9B`) interactive accents (~3% density rule).
  - **Operational Status**: Operational Green (`#78C990`), Muted Terracotta (`#C98373`).
- **Responsive Navigation Bar**:
  - Clean brand mark (`VIGNESH.DEV`).
  - Active section scrollspy with Soft Sage underline.
  - Single-line responsive Resume CTA button (`Resume ↓`) optimized across mobile, 768px tablet, and desktop viewports.
  - Accessible slide-over drawer on mobile with backdrop blur.
- **Atomic Reusable UI Components** (`src/lib/components/ui/`):
  - `Button`, `Card`, `Tag`, `SectionHeader`, `KeyValueTile`, `CodePanel`, `StatusBadge`.
- **Demo Routes & Testing Suites**:
  - `/demo/components`: Interactive visual test suite for all design tokens and atomic components.
  - `/demo/portfolio`: Layout preview of full portfolio sections.
  - `/demo/playwright`: Baseline automated E2E testing route.

---

## Development & Verification

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Run type check
npm run check

# Run unit tests
npm run test:unit -- --run

# Format and lint
npm run format
npm run lint

# Validate project structure
npm run validate:structure

# Build for production
npm run build
```

---

## Branching & Commit Workflow

- **Branch naming**: `feat/<issue-number>-<description>` or `fix/<issue-number>-<description>`
- **Commit convention**: Conventional Commits (e.g., `feat(#5): 🎨 implement responsive navbar`)
- Pre-commit & commit-msg hooks enforced via **Husky**.
