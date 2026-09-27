# Instant Play Mini Games

A vibrant, ad-free landing site for a browser mini-games portal. Browse a curated collection of instant-play game cards (puzzles, racing, action, word, memory, strategy), explore feature highlights, and jump straight into gameplay — no downloads, no installs, no accounts.

**Built by Girish Lade** — https://ladestack.in

## Features

- **Game catalog cards** — Puzzle Master, Speed Racer, Space Shooter, Word Quest, Memory Match, Strategy King — each with artwork, category badge, and hover effects.
- **Hero section** — full-width gradient hero with background imagery and call-to-action.
- **Feature highlights** — Instant Play, 100% Free Forever, Ad-Free Experience, New Games Weekly.
- **Stats & social proof section** — player counts and community metrics.
- **How-it-works section** — pick a game, click play, enjoy.
- **Testimonials** — player reviews carousel.
- **FAQ accordion** — answers to common questions.
- **Newsletter signup** — stay updated on new games.
- **Footer** — site links and socials (GitHub, Instagram, Mail).
- **Fully responsive** — mobile-first design, works on any screen size.
- **Dark-mode ready** — theming support via next-themes.

> Note: this repository is the portal's marketing landing page; the actual playable games live on the games platform itself.

## Tech stack

- Next.js 15 (App Router, static export), React 19, TypeScript
- Tailwind CSS v4 + shadcn/ui component library (Radix primitives)
- framer-motion — animations
- lucide-react / @tabler/icons-react / @heroicons/react / react-icons — icon sets
- embla-carousel, swiper — carousels
- sonner — toast notifications

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000 (Turbopack)
```

Build a production bundle:

```bash
npm run build    # static export -> out/
npm start        # serves the production build
```

## Project structure

```
instant-play-mini-games/
├── src/
│   ├── app/
│   │   ├── page.tsx         # landing page: hero, games grid, features, FAQ, footer
│   │   ├── layout.tsx       # root layout, fonts, metadata
│   │   ├── globals.css      # Tailwind v4 theme + global styles
│   │   └── global-error.tsx # global error boundary
│   ├── components/
│   │   ├── ui/              # shadcn/ui primitives (~50 components)
│   │   └── ErrorReporter.tsx
│   ├── hooks/use-mobile.ts  # responsive hook
│   ├── lib/utils.ts         # class-name utilities
│   └── visual-edits/        # visual editor integration (dev only)
├── public/                  # static assets (SVG icons, favicon)
├── next.config.ts           # static export + basePath config
└── components.json          # shadcn/ui config
```

## Environment variables

None. Fully client-side landing page — no backend, no API keys, no database.

## Deployment

Statically exported (`output: 'export'` in `next.config.ts`) — host the `out/` directory anywhere:

- **GitHub Pages** (live): `out/` pushed to the `gh-pages` branch → https://girishlade111.github.io/instant-play-mini-games/
- Any static host (Vercel, Netlify, Cloudflare Pages) works with `npm run build`.

> Note: `next.config.ts` sets `basePath: '/instant-play-mini-games'` for the GitHub Pages subpath. Remove `basePath` (and the `output: 'export'` override if you want SSR) when deploying to a root domain or Vercel.

## Notes

- Next.js bumped from 15.3.5 → 15.3.8 (patches CVE-2025-55182 React2Shell and related advisories).
- Game artwork on the cards is loaded from Unsplash CDN; replace with local assets for a fully offline build.

## Credit

Built by Girish Lade — https://ladestack.in
