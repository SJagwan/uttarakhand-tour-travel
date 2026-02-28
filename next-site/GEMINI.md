# Uttarakhand Tour & Travel - Next.js App

## Project Overview

This is a modern front-end web application built for a Tour and Travel agency focusing on Uttarakhand destinations (e.g., Char Dham, Kedarnath, Badrinath). The application serves as a promotional and booking platform, showcasing tour packages, itineraries, and destinations.

### Tech Stack

- **Framework:** Next.js (App Router, v16.1.6)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Internationalization (i18n):** `next-intl` (Supports English `en` and Hindi `hi`)
- **UI Icons:** `lucide-react`
- **Fonts:** `next/font/google` (Inter)

### Key Architecture & Features

- **App Router:** The project utilizes the Next.js `src/app` directory structure.
- **i18n Routing:** Dynamic routing based on locale (`src/app/[locale]`), handled by `src/middleware.ts`. Content is driven by translation files in `src/messages/` (`en.json`, `hi.json`).
- **Data/API Layer:** The application relies on static/mocked data structures defined in `src/lib/api/tours.ts` which generate holistic tour packages based on the i18n messages.
- **Components:** Organized into `common` (e.g., WhatsApp button), `layout` (Navbar, Footer), `sections` (Hero, Booking widgets), and `ui` (Cards).
- **SEO:** Structured schema implementations are located in `src/lib/seo/`.

## Development Commands

The project uses `npm` (or `yarn`/`pnpm`/`bun`) for package management.

- **Start Development Server:**

  ```bash
  npm run dev
  ```

  Runs the app in development mode at `http://localhost:3000`.

- **Build for Production:**

  ```bash
  npm run build
  ```

  Builds the application for production usage.

- **Start Production Server:**

  ```bash
  npm run start
  ```

  Starts a Next.js production server (requires `npm run build` first).

- **Linting:**
  ```bash
  npm run lint
  ```
  Runs ESLint to check for code quality and style issues.

## Development Conventions

- **TypeScript:** Strict typing is enforced. API types and shared interfaces are maintained in `src/types/api.types.ts` (e.g., `TourPackage`, `ItineraryDay`).
- **Internationalization:** All user-facing text should be added to the respective language JSON files in `src/messages/` and accessed via `next-intl` hooks (like `useTranslations`).
- **Component Structure:**
  - Server Components are the default. Use `'use client'` at the top of a file only when client-side interactivity (state, effects, event listeners) is required (e.g., for forms, carousels, or specific UI interactions).
  - Shared UI components are in `src/components/ui/` or `src/components/sections/`.
- **Styling:** Tailwind CSS utility classes are used for all styling. Global styles are defined in `src/app/globals.css`.
- **Routing:** All pages must be placed within `src/app/[locale]/` to ensure they are properly localized.

## Senior Engineering Standards

To maintain a #1 ranking and 100k+ user scalability, all contributions must follow these rigorous standards:

### 1. Rendering & Performance
- **Server First:** Every new component is a **Server Component** by default. Do not add `'use client'` unless strictly necessary for interactivity.
- **Image Optimization:** Always use `next/image`. Hero images must have `priority` and `fetchpriority="high"`. Never use large `.jpg` files without optimization.
- **Zero Layout Shift:** Always reserve space for dynamic content (skeletons) or use fixed aspect ratios on images to maintain a CLS (Cumulative Layout Shift) < 0.1.
- **ISR Strategy:** Use `export const revalidate = 86400` (24 hours) for pages that don't change often to ensure O(1) scalability.

### 2. SEO & Entity Integrity
- **Metadata Hoisting:** Every page must implement `generateMetadata()` to provide unique titles, descriptions, and `hreflang` tags.
- **Structured Data:** Every tour package page **must** inject `TouristTrip` JSON-LD schema using the utility in `src/lib/seo/schema.ts`.
- **Semantic HTML:** Use `<article>`, `<section>`, `<header>`, and `<footer>` correctly. Use `h1` through `h6` in strict logical order.
- **Entity Separation:** Keep Destinations (`/destinations`) and Tours (`/tours`) logically separated to build both informational and transactional authority.

### 3. Data & Interaction (React 19)
- **Form Actions:** All forms must use **React 19 Server Actions** (`form action={...}`) and the `useActionState` hook for state management.
- **Type Safety:** `any` is forbidden. Use the strict interfaces in `src/types/api.types.ts`.
- **Defensive Programming:** Wrap all server-side logic in `try/catch` and return graceful fallback states.

### 4. Code Hygiene
- **Atomic UI:** Small, reusable UI elements belong in `src/components/ui`. Complex, data-heavy blocks belong in `src/components/sections`.
- **Tailwind Consistency:** Use the "Dark Mode" aesthetic for visual breaks (slate-900 backgrounds) and "Green-600" for primary actions.
- **Build-Time Verification:** Always run `npm run build` before pushing. A failed pre-render or TypeScript error is a blocker for deployment.
