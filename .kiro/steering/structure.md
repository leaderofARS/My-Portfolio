# Project Structure

## Root Level

- **Configuration files**: TypeScript, Vite, Tailwind, ESLint, Prettier, Jest
- **Package management**: `package.json`, `package-lock.json`
- **Static assets**: `public/` directory for images and icons
- **Build output**: `dist/` directory (generated)

## Source Organization (`src/`)

```
src/
├── components/     # Reusable UI components and primitives
├── pages/         # Page-level components (Home.tsx contains all sections)
├── layouts/       # Layout components (MainLayout with nav/theme toggle)
├── context/       # React context providers (theme context)
├── data/          # Static JSON data (projects, certificates, skills, stats)
├── hooks/         # Custom React hooks
├── lib/           # Utilities, API mocks, SEO helpers
├── routes/        # Router configuration and route definitions
├── assets/        # Source assets (images, icons)
├── test/          # Test utilities and setup files
├── App.tsx        # Root app component
├── main.tsx       # Application entry point
└── index.css      # Global styles and CSS variables
```

## Key Patterns

- **Single-page architecture**: All content sections in `src/pages/Home.tsx`
- **Path aliases**: Use `~/` or `@/` for imports from `src/`
- **Component organization**: Separate primitives from composites
- **Data separation**: Static content in JSON files under `src/data/`
- **Theme system**: CSS variables with Tailwind integration
- **Animation patterns**: Framer Motion components for smooth transitions

## File Naming

- **Components**: PascalCase (e.g., `Card.tsx`, `MainLayout.tsx`)
- **Utilities**: camelCase (e.g., `apiHelpers.ts`, `seoUtils.ts`)
- **Data files**: kebab-case (e.g., `projects.json`, `skills-data.json`)
- **Test files**: `*.test.tsx` or `*.spec.tsx`

## Import Conventions

- Use path aliases for internal imports: `import { Card } from '~/components/Card'`
- Group imports: external libraries first, then internal modules
- Prefer named exports over default exports for utilities