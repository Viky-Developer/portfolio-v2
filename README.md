# Vignesh S - Portfolio

A high-performance personal engineering workspace and portfolio built with **SvelteKit**, **Svelte 5 (Runes)**, **TypeScript**, and **Tailwind CSS v4**, engineered around the **Near-Black Forest / Charcoal / Warm Cream** visual identity.

[![CI Status](https://img.shields.io/badge/build-passing-brightgreen)](#development--verification)
[![Svelte 5](<https://img.shields.io/badge/Svelte-5%20(Runes)-orange>)](#features--architecture)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](#features--architecture)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 🧭 Live Architecture & Portfolio Sections

The portfolio implements all 7 core sections specified in the system design contract:

### 01. Hero (`#hero`)

- Minimalist terminal engineering greeting with live operational status (`● Available for backend engineering roles`).
- High-impact positioning for **Go, Distributed Systems, Payment Orchestration (Disbursements & Collections), and Cloud Infrastructure**.
- Quick action buttons: `[ Explore My Work → ]` and `[ Get in Touch ]`.

### 02. About (`#about`)

- Narrative architectural background, systems thinking principles, and production engineering philosophy.
- Core focus on concurrency, idempotency, failure domain isolation, and high-throughput transaction pipelines.

### 03. Experience (`#experience`)

- **Elixir Global**: Backend Engineer - payment collection & disbursement infrastructure, distributed settlement engines, and banking partner integrations.
- **Flipopay Technology**: Software Engineer - transaction processing, collections (payins) & disbursements (payouts) engine, and reconciliation workflows.

### 04. Projects (`#projects`)

- Flagship Project: **LinkPulse** (`linkpulse`)
  - High-concurrency URL shortening platform with Go backend and responsive client.
  - Sub-10ms redirect latency powered by custom Base62 encoding, Redis caching, RabbitMQ asynchronous click analytics, and rate limiting.
  - Observability stack: **Prometheus** & **Grafana** metrics.
  - **Live Web App**: [linkpulse.netlify.app](https://linkpulse.netlify.app/)
  - **Interactive API Console**: In-portfolio simulated request trace (`[ View Request Trace ↓ ]` / `[ Hide Request Trace ↑ ]`) demonstrating the Go request lifecycle step-by-step.
  - **Source Code**: [GitHub Repository](https://github.com/Viky-Developer/url-shortner)

### 05. Stack (`#stack`)

- **Dual-View Interface**:
  - **YAML View**: High-contrast, syntax-highlighted `stack.yaml` code panel with schema validation (`v1.0.0`), UTF-8 encoding metadata, and copy helper.
  - **Categories View**: Filterable interactive chips organized into Backend Architecture, Database & Caching, Cloud & DevOps, and Frontend & UI Tooling.
- Technologies: Go, PostgreSQL, Redis, RabbitMQ, Docker, Kubernetes, AWS, gRPC, REST APIs, Prometheus, Grafana, TypeScript, SvelteKit, Tailwind CSS.

### 06. Background (`#background`)

- **Academic Credentials**: Bachelor of Engineering in Computer Science & Engineering (S. A. Engineering College, CGPA: 8.12).
- **Professional Certifications**: Docker & Kubernetes containerization and orchestration credentials.

### 07. Contact (`#contact`)

- Authentic terminal interface (`CONTACT / bash`) with window controls, status badge, and aligned monospace channels table (`github`, `linkedin`, `email`).
- Interactive terminal prompt (`vignesh@portfolio:~$`) with Soft Sage cursor supporting commands: `help`, `whoami`, `contact`, `stack`, `email`, `clear`.
- Direct action targets: `[ Email Me ]`, `[ Copy Email ]`, `[ LinkedIn ↗ ]`, `[ GitHub ↗ ]`.

---

## 🎨 Design System: Near-Black Forest

The visual theme strictly follows a constrained, dark forest palette designed for readability and low cognitive fatigue:

| Token                | Hex Value | Role                                                |
| :------------------- | :-------- | :-------------------------------------------------- |
| **Canvas Main**      | `#07110D` | Deepest near-black forest background                |
| **Canvas Secondary** | `#0A1712` | Elevated backdrop and code panel gutters            |
| **Surface Primary**  | `#0D1B15` | Default card surfaces and terminal panels           |
| **Surface Elevated** | `#11231B` | Hover states and interactive elements               |
| **Text Primary**     | `#F0EBDD` | Warm Cream headline typography                      |
| **Text Secondary**   | `#B8B9AE` | Soft Stone body copy                                |
| **Text Muted**       | `#667A70` | Secondary metadata and labels                       |
| **Accent Primary**   | `#8BCB9B` | Soft Sage interactive highlights (~3% density rule) |
| **Status Healthy**   | `#78C990` | Operational badges and terminal success state       |
| **Border Divider**   | `#172A21` | High-contrast structural dividers                   |

---

## 📄 Resume Preview UX

- **Canonical File**: [static/Vignesh_Resume.pdf](static/Vignesh_Resume.pdf)
- **Non-forcing Preview First**: Clicking **`Resume ↗`** in the navigation opens the PDF directly inside the browser's native PDF reader in a new tab without forcing an unwanted file download.
- Users can preview the document immediately and choose to download or print using the browser's built-in controls.

---

## 🛠️ Development & Verification

```sh
# Install dependencies
npm install

# Start local development server (with HMR)
npm run dev

# Run TypeScript diagnostic check
npm run check

# Execute Vitest unit test suites
npm run test:unit -- --run

# Run Prettier code formatting and ESLint
npm run lint

# Validate project directory structure
npm run validate:structure

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌿 Gitflow & Release Workflow

- **Development Branch**: `dev`
- **Release Branch**: `release/vMAJOR.MINOR.PATCH` (e.g. `release/v1.0.0`)
- **Production Branch**: `main`
- **Feature Branches**: `feat/<issue-no>-<name>`
- **Commit Convention**: Conventional Commits enforced via Husky hooks (`<type>(#<issue>): <emoji> <message>`).

---

## ⚖️ License

MIT © 2026 Vignesh S · Backend Software Engineer
