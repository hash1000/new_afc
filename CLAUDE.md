@AGENTS.md

# AFC Website — Americas Food Court

Multi-brand food court company website rebuilt from Figma. Pages: Home, Menu, Franchising, Career, Contact.

## Project Overview

- **Stack**: Next.js 16 (App Router) — NOT 15; see AGENTS.md warning above — + TypeScript + Tailwind CSS v4 + Framer Motion
- **Design source**: Figma file via the `open-figma-mcp` server
- **Folder structure**:
  - `src/app/` — routes (one folder per page)
  - `src/components/` — shared components (Header, Footer)
  - `src/components/sections/` — page sections (one component per Figma section)
  - `src/components/ui/` — small reusable pieces (buttons, cards)
  - `public/images/` — exported assets, organized by page subfolder (`public/images/home/`, `public/images/menu/`)

## Tech Rules

- **Tailwind v4 syntax only**: design tokens via `@theme` in `src/app/globals.css`. There is NO `tailwind.config.js` — do not create one.
- **Server Components by default.** Add `"use client"` ONLY when the component uses hooks, Framer Motion, or event handlers.
- **`next/image` for ALL images** with explicit `width`/`height`/`alt`. Never plain `<img>`.
- **`next/font` for fonts** (Google Fonts). No `<link>` tags.
- **TypeScript strict** — no `any` types.
- Next.js APIs may differ from training data — check `node_modules/next/dist/docs/` before using unfamiliar APIs; heed deprecation notices.

## Image Export Rules (CRITICAL)

- All photos/raster images exported from Figma MUST be **JPG**, resized to **1920px max width** (maintain aspect ratio).
- Icons and logos stay **SVG** — never rasterize icons.
- After downloading any raster asset from Figma, convert it:
  ```
  npx sharp-cli --input <file> --output public/images/<name>.jpg resize 1920 --format jpeg --quality 85
  ```
  (or a node script using `sharp`: resize width 1920, format jpeg, quality 85 — `sharp` is already a dependency)
- **Naming**: kebab-case, descriptive — `hero-burger.jpg`, `franchising-storefront.jpg`
- **Location**: `public/images/`, page subfolders as needed.

## Figma-to-Code Workflow (follow this order for EVERY section)

1. `figma_get_screenshot` on the target Figma node FIRST — see the visual before anything else.
2. `figma_get_design_context` / `figma_get_metadata` / `figma_get_variable_defs` — extract exact colors, font sizes, spacing, border radius.
3. Download that section's image assets; convert per Image Export Rules above.
4. Build the component using extracted values mapped to Tailwind tokens.
5. Compare rendered output against the Figma screenshot before moving on.

Rules:
- **NEVER guess colors or spacing** — always pull from Figma variables/metadata.
- **Build ONE section at a time**, top to bottom of the page. Never generate an entire page in one shot.
- Match the design pixel-close but keep code clean: extract repeated card patterns into reusable components (e.g. `BrandCard`, `MenuItemCard`, `FormatCard`).

## Design Tokens

- Extract the Figma color palette ONCE at project start; define in `globals.css` `@theme` as `--color-*` variables.
- Extract font families; register via `next/font`.
- Reuse tokens everywhere — **no hardcoded hex values in components**.

## Responsive Rules

- Figma frames are desktop-first (1920px) but **code mobile-first** with Tailwind breakpoints.
- Test at: 375px, 768px, 1024px, 1440px, 1920px.
- Grids collapse gracefully: 4-col → 2-col → 1-col.

## Animation Rules

- Framer Motion for scroll reveals: fade-up with slight stagger for card grids.
- Keep animations subtle — duration 0.5–0.7s, ease out.
- Wrap animated sections in a reusable `<AnimatedSection>` client component so pages stay server components.

## Commands

- `npm run dev` — development server
- `npm run build` — MUST pass with zero errors before considering any task complete
- `npm run lint` — lint
