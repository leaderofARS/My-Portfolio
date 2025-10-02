# Technology Stack

## Core Technologies

- **React 19+** with TypeScript (strict mode)
- **Vite** as build tool with Rolldown bundler
- **Tailwind CSS** for styling with dark mode support
- **Framer Motion** for animations and transitions
- **React Router DOM** for client-side routing
- **MDX** for rich content authoring

## Development Tools

- **ESLint** with TypeScript, React, and accessibility rules
- **Prettier** for code formatting
- **Jest + React Testing Library** for unit testing
- **Cypress** for end-to-end testing
- **TypeScript** with project references for strict type checking

## Build System

- **Vite** with React and MDX plugins
- **TypeScript compilation** with project references
- **Tailwind CSS** processing with PostCSS
- **Path aliases**: `~` and `@` point to `src/`
- **Relative base path** for GitHub Pages compatibility

## Common Commands

```bash
# Development
npm run dev          # Start dev server with hot reload
npm run preview      # Serve production build locally

# Building
npm run build        # TypeScript check + Vite build
npm run typecheck    # TypeScript project references check

# Code Quality
npm run lint         # ESLint check
npm run format       # Prettier format all files

# Testing
npm run test         # Jest unit tests (with --passWithNoTests)
```

## Code Style

- **Prettier config**: Single quotes, no semicolons, trailing commas
- **Print width**: 100 characters
- **Tab width**: 2 spaces
- **ESLint**: Recommended rules for TypeScript, React, and accessibility
