# NINJA Software House

Frontend foundation for the bilingual NINJA Software House website. The repository currently contains architecture, design tokens, localization, assets, and reusable UI primitives; the approved homepage UI is intentionally not implemented yet.

## Stack

- Next.js 16 with the App Router and React Server Components
- React 19 and strict TypeScript
- Tailwind CSS 4
- shadcn/ui (`base-nova`) with Base UI primitives
- React Icons
- ESLint with Next.js Core Web Vitals rules

## Local development

```bash
npm install
Copy-Item .env.example .env.local # optional on Windows
npm run dev
```

Open `http://localhost:3000`. The root redirects to Arabic at `/ar`; English is available at `/en`.

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

Set `SITE_URL` to the canonical production origin in Vercel. Without it, metadata uses `http://localhost:3000` for local development.

## Structure

```text
src/
├── app/[locale]/        # Locale root layout, metadata, page, loading UI
├── components/ui/       # shadcn primitives
├── components/layout/   # Navbar, footer, and mobile-menu modules
├── components/sections/ # Homepage sections added in the next phase
├── components/shared/   # Cross-section components and providers
├── config/              # Site, navigation, assets, and constants
├── data/                # Content models kept outside presentation
├── hooks/               # Reusable client hooks when needed
├── i18n/                # Locale rules and server-only dictionaries
├── lib/                 # Shared utilities
├── styles/              # Future non-global style modules
├── types/               # Shared TypeScript contracts
└── proxy.ts             # Locale routing and Arabic default redirect
```

## Conventions

- Prefer Server Components; add `"use client"` only for interaction.
- Keep translated copy in `src/i18n/dictionaries` and content collections in `src/data`.
- Use logical CSS/Tailwind properties (`start`, `end`, `ps`, `pe`) so layouts work in RTL and LTR.
- Use tokens from `globals.css`; do not scatter color values through components.
- Reference files through centralized asset configuration where practical and use `next/image` for raster content.
- Use `.site-container` and `.section-spacing` for consistent responsive layout rhythm.

## Assets

All supplied files live under `public/assets`, grouped by purpose: `brand`, `hero`, `backgrounds`, `mockups`, `projects`, `decor`, `icons`, and `images`. Asset paths begin with `/assets/...`.
