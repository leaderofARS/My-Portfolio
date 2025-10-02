# Abhay | Portfolio (React + TypeScript + Tailwind + Vite)

Production-ready, dark-themed portfolio app with client routing, animations, MDX support, tests, and CI.

## Tech

- React 18+/TypeScript (strict)
- Vite
- Tailwind CSS (dark mode via class)
- Framer Motion
- React Router DOM
- Jest + React Testing Library
- Cypress (smoke)
- GitHub Actions CI

## Scripts

- `npm run dev` — start dev server
- `npm run build` — typecheck and build production bundle
- `npm run preview` — serve production build
- `npm run lint` — ESLint
- `npm run test` — Jest unit tests
- `npm run typecheck` — TS project refs
- `npm run format` — Prettier write

## Setup

1. Install Node 18+ (22 recommended)
2. Install deps: `npm ci`
3. Dev: `npm run dev`

## Architecture

- `src/routes` defines client routes and lazy-loaded heavy pages
- `src/layouts/MainLayout` provides shell with theme toggle and nav
- `src/context` holds theme context
- `src/data` static JSON for projects/certs/skills/stats
- `src/lib` utilities, API mocks, SEO helpers
- `src/components` UI primitives and composites

## Deployment

### GitHub Pages (Automatic)
The project is configured for automatic deployment to GitHub Pages:
1. Push to `main` branch triggers the deployment workflow
2. The site will be available at `https://yourusername.github.io/repository-name`

### Manual Deployment
- Any static host (Vercel/Netlify). Build with `npm run build` and deploy `dist/`.
- For Vercel: set Framework = Vite, Build = `npm run build`, Output = `dist`.

### GitHub Pages Setup
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The deployment workflow will handle the rest

### Troubleshooting GitHub Pages
If the site appears blank or without styling:
1. Check that the deployment workflow completed successfully
2. Ensure JavaScript is enabled in your browser
3. Clear browser cache and refresh
4. Check browser console for any errors
5. Verify the site URL matches your repository name

## Notes

- Tailwind is configured in `tailwind.config.ts` with a dark palette. Ensure images live under `public/`.
- Contact form uses a mock API and shows success/error states.
