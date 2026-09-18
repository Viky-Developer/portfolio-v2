# Vignesh S Backend Portfolio — Design Requirements

## Source of truth

- Stitch project: `Vignesh S Backend Portfolio-final`
- Stitch project ID: `17414711940940340164`
- Primary screen: `Vignesh S — Backend Software Engineer Portfolio`
- Target: responsive, single-page SvelteKit portfolio
- Primary reference viewport: 1280px desktop; the exported design is a long-form page
- Design-system name: `Engineered Precision`

This document translates the Stitch design into implementation requirements. When the broad theme metadata and the rendered screen differ, follow the rendered screen and the explicit tokens below.

## Creative direction

The portfolio should communicate disciplined backend engineering rather than generic personal branding. Its visual language is minimalist, technical, calm, and reliable—closer to an observability console or architecture document than a decorative marketing site.

The experience should feel:

- precise and grid-aligned;
- credible for payments, fintech, and distributed-systems work;
- information-dense without becoming cramped;
- restrained, with small operational details used as personality;
- fast and deterministic, without ornamental animation or layout shift.

Avoid neon effects, oversized gradients, glass-heavy styling, excessive rounded cards, and decorative imagery. The live trace panel, technical labels, architecture topology, metrics, and status indicators provide the visual identity.

## Color system

Use CSS custom properties or Tailwind theme tokens rather than repeating literal colors throughout components.

### Core surfaces

| Token                 | Value                               | Use                                          |
| --------------------- | ----------------------------------- | -------------------------------------------- |
| `--background`        | `#f9f9f9`                           | Page canvas                                  |
| `--surface`           | `#f9f9f9`                           | Header and seamless page regions             |
| `--surface-lowest`    | `#ffffff`                           | Cards, panels, buttons, metadata tiles       |
| `--surface-low`       | `#f3f3f3`                           | Soft grouped regions and card headers        |
| `--surface-container` | `#eeeeee`                           | Tags, chips, compact controls                |
| `--surface-high`      | `#e8e8e8`                           | Stronger tonal separation                    |
| `--surface-highest`   | `#e2e2e2`                           | Highest neutral surface level                |
| `--code-surface`      | `#171717` or Tailwind `neutral-900` | Terminal and architecture panels             |
| `--border`            | `#e2e4e8`                           | Subtle 1px structural hairlines where needed |

### Text and actions

| Token            | Value     | Use                                        |
| ---------------- | --------- | ------------------------------------------ |
| `--text-primary` | `#1a1c1c` | Main copy                                  |
| `--text-strong`  | `#191919` | Headlines, primary buttons                 |
| `--text-muted`   | `#444748` | Descriptions and metadata                  |
| `--text-subtle`  | `#747878` | Low-priority labels                        |
| `--accent`       | `#0060ac` | Section indices, links, technical emphasis |
| `--accent-hover` | `#004883` | Accent hover state                         |
| `--focus`        | `#4a90e2` | Keyboard focus ring                        |
| `--on-dark`      | `#ffffff` | Text on charcoal controls                  |

### Operational colors

- Healthy/success: `#10b981`.
- Warning/degraded: `#f59e0b`.
- Error/offline: `#ef4444`.
- Idle/staged: `#94a3b8`.
- HTTP `GET`: blue-tinted background and blue text.
- HTTP `POST`: emerald-tinted background and emerald text.
- Event/queue/cache tags may use muted purple, sky, and indigo variants, but only inside the trace console.

Color must never be the only status cue. Pair it with text, an icon, or both.

## Typography

Load and use:

- **Geist** at 400, 500, and 600 for headings, navigation, prose, labels, and buttons.
- **JetBrains Mono** at 400, 500, and 600 for endpoints, metrics, stack tags, dates, section numbers, architecture diagrams, and technical metadata.

Enable tabular numerals for latency, percentages, dates, throughput, and other metrics.

### Type scale

| Style               | Desktop | Mobile | Weight / line height            | Use                             |
| ------------------- | ------- | ------ | ------------------------------- | ------------------------------- |
| Hero heading        | 48px    | 36px   | 600 / 56px desktop, 44px mobile | Name                            |
| Section CTA heading | 32px    | 26px   | 600 / 40px desktop              | Contact heading                 |
| Medium heading      | 24px    | 24px   | 500 / 32px                      | Major subsection title          |
| Card heading        | 20px    | 20px   | 500–600 / 28px                  | Roles and project names         |
| Lead body           | 18px    | 18px   | 400–500 / 28px                  | Hero positioning statement      |
| Body                | 15px    | 15px   | 400 / 24px                      | Primary prose                   |
| Small body          | 13px    | 13px   | 400 / 20px                      | Supporting descriptions         |
| Code/body           | 13px    | 13px   | 400–500 / 20px                  | Technical metadata              |
| Code/label          | 11px    | 11px   | 500 / 16px, `0.02em` tracking   | Section indices, compact badges |

Headlines use tight tracking from `-0.01em` to `-0.03em`. Do not use display text as decoration or center-align long body copy.

## Layout and spacing

- Use an 8px spacing grid with 4px micro-increments.
- Main content max width: approximately `1024px` (`max-w-5xl` in the reference).
- Desktop page margins: 32px.
- Mobile page margins: 16px.
- Standard section vertical padding: 32px.
- Standard grid/card gap: 16px or 24px.
- Card padding: 24px; compact tiles use 16px.
- Desktop layouts use a 12-column grid where useful.
- Tablet layouts may use 8 conceptual columns.
- Mobile layouts collapse to one column, with a 4-column conceptual grid.

The desktop hero and About content use a 7/5 split. Content should remain readable and never stretch to a full widescreen width.

## Shape, borders, and elevation

- Default interactive radius: 4px.
- Inputs and small controls: 4–6px.
- Cards and major panels: 8px maximum.
- Pills are reserved for availability/status indicators.
- Prefer tonal surface changes to strong outlines.
- Where a boundary is necessary, use a 1px `#e2e4e8` hairline.
- Standard card shadow: `0 1px 3px rgba(0, 0, 0, 0.05)`.
- Hovered card shadow: subtle `0 2px 4px -1px rgba(30, 41, 59, 0.04)` plus `0 1px 2px -1px rgba(30, 41, 59, 0.02)`.
- Header shadow: `0 1px 8px rgba(0, 0, 0, 0.04)`.
- Avoid heavy shadows, broad blur glows, and floating-card effects.

## Page structure

Build one long-form page in this order. Navigation should use real section anchors and update its active state as the reader moves through the page.

### 1. Fixed header

- Fixed, 64px-tall header with a translucent light surface and restrained backdrop blur.
- Left: `Vignesh S` in JetBrains Mono and an availability badge on wider screens.
- Center/right desktop navigation: About, Experience, Projects, Skills, Contact.
- Right: Resume action and compact circular profile mark/avatar.
- Hide the full navigation on small screens and provide an accessible mobile menu trigger.
- Preserve visible keyboard focus and offset anchor scrolling for the fixed header.

### 2. Hero

Use a responsive 7/5 desktop split and a single-column mobile stack.

Left column:

- availability chip: “Available for high-impact backend roles”;
- name: “Vignesh S”;
- role: “Backend Software Engineer”;
- positioning statement about reliable backend systems for payments, fintech, and distributed applications;
- concise biography mentioning 2+ years, Go, payment orchestration, banking integrations, asynchronous processing, financial workflows, and cloud infrastructure;
- technical specialty row: Go, Payment Systems, Distributed Systems, AWS;
- primary CTA: View Experience;
- secondary CTA: View Resume;
- GitHub, LinkedIn, and email links in compact monospaced notation.

Right column:

- a dark observability/terminal panel titled `vignesh/backend • live trace`;
- macOS-style red/amber/green window dots;
- rows for GET `/payments/:id`, POST `/payouts`, `payment.completed`, `payout.processing`, and `merchant:config`;
- status, latency, acknowledgement, cache-hit, and health metadata;
- footer showing `Go • PostgreSQL • Redis • AWS` and `99.99% Uptime`;
- only subtle status pulse/cursor animation, disabled under `prefers-reduced-motion`.

### 3. About

- Section label format: `02 / ABOUT` in small monospaced blue text followed by a fine neutral rule.
- Left: two short paragraphs and a white quote panel.
- Right: four compact key-value tiles for location, primary language, domain, and focus.
- Desktop layout is 7/5; tiles form a 2×2 grid. Stack cleanly on narrow screens.

### 4. Experience

- Section label: `03 / EXPERIENCE`.
- Use vertically stacked white experience cards.
- Each card has a lightly tinted header strip containing role/company and date/location.
- Body contains a concise role summary, outcome-oriented bullet points, and a technical stack row.
- Quantified results such as latency and query-load improvements receive strong text emphasis, not oversized decorative metrics.
- Cards may gain a slight shadow on hover but must not translate or scale.

### 5. Personal projects

- Section label: `04 / PERSONAL PROJECTS` plus a one-line description.
- Feature the URL Shortener Platform as a white technical case-study card.
- Include stack tags, summary, technical highlights, architecture topology, repository link, and architecture action.
- The topology preview is a dark monospaced panel and must remain horizontally scrollable on small screens.
- Treat the project as evidence of concurrency, performance, caching, rate limiting, TTL cleanup, and asynchronous analytics—not simply as a screenshot showcase.

### 6. Technical stack

- Section label: `05 / TECHNICAL STACK` plus a one-line description.
- The Backend Core card spans the full grid width and identifies itself as the primary focus.
- Remaining cards form a two-column desktop grid:
  - Data & Caching;
  - Messaging & Queues;
  - Cloud & DevOps;
  - Security & Standards.
- Use compact monospaced skill chips. Go/Golang is the sole dark, primary-highlight chip.
- Use small colored dots to differentiate categories; do not turn every skill into a brightly colored badge.

### 7. Contact

- Section label: `06 / CONNECT`.
- Large white panel with copy and direct contact links on the left.
- Resume download CTA and freshness metadata on the right.
- Stack content on mobile and keep all contact methods selectable/clickable.

### 8. Footer

- White/lowest surface with a faint top shadow.
- Left: concise identity statement.
- Right: GitHub, LinkedIn, and Email links separated by monospaced slashes.
- Stack and center on small screens; align horizontally on desktop.

## Interaction requirements

- Use native anchor links for section navigation and external profile links.
- Provide smooth scrolling only when reduced motion is not requested.
- Use 150–200ms color and shadow transitions.
- Do not animate layout dimensions or introduce content shifts.
- Interactive cards need an actual action; purely informational cards must not imply clickability.
- Resume buttons must point to a real downloadable PDF when the asset is available. Until then, expose a clearly marked placeholder rather than a dead `#resume` loop.
- External links open in a new tab with `rel="noreferrer"` or `rel="noopener noreferrer"`.

## Responsive requirements

### Desktop: 1024px and above

- Show full fixed navigation.
- Use 7/5 hero and About grids.
- Use two-column technical-stack grid.
- Experience and project cards remain full-width within the content container.

### Tablet: 768–1023px

- Preserve 24px outer spacing where possible.
- Allow hero console to stack if the available width makes either column cramped.
- Keep metadata and skill groups at two columns only when labels do not wrap excessively.

### Mobile: below 768px

- Use 16px margins and 12px grid gutters.
- Replace desktop navigation with an accessible menu.
- Stack all section columns.
- Reduce hero name to 36px and section CTA heading to approximately 26px.
- Make primary and resume actions easy to tap; allow wrapping or full-width buttons.
- Preserve code blocks with horizontal scrolling instead of shrinking monospace text below 11px.
- Convert dense metadata to readable key-value cards.

## Accessibility and quality bar

- Use semantic landmarks: `header`, `nav`, `main`, section headings, and `footer`.
- Maintain one `h1`; follow a logical heading hierarchy.
- All icon-only controls require accessible names.
- Minimum interactive target size: 40×40px, preferably 44×44px on mobile.
- Every interactive element must have visible hover, focus-visible, active, and disabled states where applicable.
- Ensure text contrast meets WCAG AA; muted copy should not be lighter than the specified muted token on the light canvas.
- Respect `prefers-reduced-motion` for pulse, smooth-scroll, and menu transitions.
- Decorative status dots are `aria-hidden`; their meaning must also appear as text.
- Do not disable scrollbars globally.
- Avoid loading the page from CDN-only runtime dependencies in production; install fonts/assets appropriately or self-host them.

## Implementation notes for this repository

- Implement in Svelte 5 using runes where component state is required.
- Keep route composition in `src/routes/+page.svelte` and extract reusable, presentational pieces into `src/lib/components/`.
- Use Tailwind CSS tokens mapped to the design variables above.
- Use `$app/paths` `resolve()` for internal SvelteKit links.
- Keep portfolio content in typed data structures rather than duplicating card markup.
- Use inline SVG or an installed icon library rather than relying on Google Material Symbols at runtime.
- Add unit coverage for data/formatting utilities and Playwright coverage for navigation, mobile menu behavior, external links, and resume download behavior.

## Explicit non-goals

- No dashboard sidebar.
- No dark-mode-first treatment.
- No animated particle field, 3D scene, or decorative hero illustration.
- No carousel for experience or projects.
- No skill-percentage bars or self-rated proficiency meters.
- No excessive gradients, glassmorphism, or neon glow.
- No backend-console gimmicks beyond the single focused live-trace panel.
