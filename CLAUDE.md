# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Justin David, an Analytics Engineer. The site is built as a single-page application showcasing professional experience, projects, skills, and contact information.

**Tech Stack:**
- Vite (build tool with SWC for fast compilation)
- React 18 with TypeScript
- shadcn/ui component library (Radix UI primitives)
- Tailwind CSS for styling
- React Router for navigation
- TanStack Query for data fetching

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on http://[::]:8080)
npm run dev

# Build for production
npm run build

# Build for development (includes lovable-tagger plugin)
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Application Structure

The app follows a single-page architecture with scroll-based navigation:

- **Entry Point**: `src/main.tsx` → `src/App.tsx`
- **Routing**: `App.tsx` sets up React Router with a single Index page and NotFound catch-all
- **Main Page**: `src/pages/Index.tsx` composes all portfolio sections as a vertically scrolling layout
- **Sections**: Each portfolio section is a standalone component in `src/components/`:
  - `Hero.tsx` - Landing section with CTA buttons
  - `About.tsx` - Personal introduction
  - `Experience.tsx` - Professional experience timeline
  - `Projects.tsx` - Project showcase
  - `Skills.tsx` - Technical skills
  - `Contact.tsx` - Contact form/information
  - `Navigation.tsx` - Sticky header with scroll-to navigation

### Design System

The design system is defined entirely in `src/index.css` using CSS variables:

- **Color Scheme**: Dark theme with HSL color system
- **Primary Colors**: Cyan blue (`--primary: 199 89% 48%`) and purple accent (`--accent: 282 83% 58%`)
- **Custom Utilities**:
  - `.gradient-text` - Multi-color gradient text effect
  - `.glass` - Glassmorphism backdrop effect
  - `.animate-float`, `.animate-fade-in-up`, `.animate-shimmer` - Animation utilities
- **Theme Tokens**: All colors use HSL format and are defined as CSS custom properties in `:root`

### Component Library

Uses shadcn/ui components from `src/components/ui/`. These are **not npm packages** but local components that can be directly edited. Configuration is in `components.json`:

- Path aliases: `@/components`, `@/lib/utils`, etc.
- Base color: slate
- CSS variables enabled for theming

To add new shadcn components, use the shadcn CLI (not documented in package.json scripts).

### Import Aliases

TypeScript path mapping configured in `tsconfig.json` and Vite:
- `@/*` → `./src/*`

Example: `import { Button } from "@/components/ui/button"`

### Styling Approach

1. Tailwind utility classes are the primary styling method
2. Custom utilities defined in `src/index.css` for repeating patterns
3. shadcn components use the `cn()` utility from `src/lib/utils.ts` to merge Tailwind classes
4. All colors must be HSL format to work with the design system

## Key Implementation Details

### Scroll Behavior
- Smooth scrolling enabled globally via CSS (`scroll-behavior: smooth`)
- Navigation buttons use `scrollIntoView({ behavior: "smooth" })` to navigate between sections
- Sections have IDs matching navigation targets (e.g., `id="projects"`)

### Animation System
- Background decorative elements use CSS `animate-float`
- Content uses `animate-fade-in-up` for entrance animations
- Tailwind config extends animations: `float`, `fade-in-up`, `shimmer`, `accordion-down/up`

### Providers & Context
`App.tsx` wraps the application with:
- `QueryClientProvider` - TanStack Query for async state
- `TooltipProvider` - Radix UI tooltip context
- `Toaster` components - Toast notifications (two providers: shadcn + Sonner)

### Development Tools
- **lovable-tagger**: Only active in development mode, tags components for the Lovable.dev platform
- **Vite server**: Configured to listen on IPv6 (`::`) at port 8080

## Common Patterns

When adding new sections:
1. Create component in `src/components/`
2. Import and add to `src/pages/Index.tsx` in desired order
3. Add navigation link in `Navigation.tsx` if needed
4. Use `id` attribute for scroll targeting
5. Follow existing section structure with `<section>` wrapper

When working with colors:
- Always use HSL format: `hsl(var(--token-name))`
- For opacity: `hsl(var(--token-name) / 0.5)`
- Define new colors in `src/index.css` `:root` block

When adding UI components:
- Use shadcn/ui components from `src/components/ui/`
- Apply the `cn()` utility to merge custom classes with base styles
- Follow the existing component composition patterns
