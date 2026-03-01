## AURELIA – Perfume Collection Frontend

AURELIA is a frontend-only, luxury perfume brand showcase built with Next.js (App Router), TypeScript, and Tailwind CSS v4. The focus is on architecture, spacing discipline, and a restrained, premium visual language rather than on backend features.

The brand tone is minimal, confident, and quiet: "For those who do not need an intorduction"

---

## Brand & Experience

- **Name**: AURELIA  
- **Tagline**: "For those who do not need an intorduction
- **Tone**: Minimal, refined, serious. Luxury is expressed through whitespace, typography, and structure rather than visual noise.

The site is designed as a calm, gallery-like environment:

- Limited palette of four colors defined as CSS variables and mapped into Tailwind semantic tokens.
- One serif typeface for headings and one sans-serif for body copy, both loaded via `next/font/google`.
- Strict 8px spacing rhythm for paddings, margins, and gaps (8, 16, 24, 32, 48, 64, 96 via Tailwind spacing utilities).
- Subtle motion only: modest hover scale and soft underline animations, without gradients, glassmorphism, or bouncing effects.

---

## Tech Stack

- **Framework**: Next.js App Router (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (via `@import "tailwindcss";` in `app/globals.css`)
- **Fonts**: `Cormorant_Garamond` (serif, headings) and `Work_Sans` (sans-serif, body) from `next/font/google`
- **Runtime**: Frontend-only, static local data (no backend, no auth, no database)

**Why this stack?**

- App Router and layouts make it easy to share a consistent frame (header, footer, typography) across routes.
- TypeScript enforces structure around product data and components, reducing runtime surprises.
- Tailwind v4 with design tokens keeps spacing, typography, and color decisions centralized and auditable.

---

## Project Structure

Key directories:

- `app/`
	- `layout.tsx` – Root layout, font wiring, shared header/footer shell.
	- `globals.css` – Tailwind v4 import, CSS variables, semantic color and typography tokens, base styles.
	- `page.tsx` – Landing page (`/`).
	- `products/page.tsx` – Product listing (`/products`) with filtering and sorting.
	- `products/[id]/page.tsx` – Product detail (`/products/[id]`) with structured specs and graceful error state.
- `components/`
	- `Container.tsx` – Reusable max-width layout wrapper enforcing consistent horizontal rhythm.
	- `Header.tsx` & `Footer.tsx` – Brand frame shared across all pages.
	- `ProductCard.tsx` – Reusable card for grid and featured layouts.
	- `ProductSpecs.tsx` – Structured fragrance note and metadata block.
	- `ErrorState.tsx` – Graceful fallback for invalid product IDs.
- `data/`
	- `products.ts` – Static product catalogue with 7 premium compositions.
- `types/`
	- `product.ts` – TypeScript interfaces for product data and fragrance notes.

---

## Design System

### Typography

- **Headings**: `Cormorant Garamond` (serif), applied via `--font-heading` and Tailwind `@theme`.
- **Body**: `Work Sans` (sans-serif), applied via `--font-body` and as the default `font-sans`.
- **Hierarchy**:
	- `h1`: Large, uppercase-spaced hero scale for the brand statement.
	- `h2`: Section headings in compact uppercase with tracking.
	- `h3`: Product titles, uppercase with measured tracking.
	- Body: 16px base (Tailwind `text-sm` / `text-base`), with `14px` small text for supporting copy.

All fonts are loaded via `next/font/google`—there are no `@import` font rules in CSS, and no direct usage of default browser fonts.

### Color System

Defined as CSS variables in `app/globals.css` (maximum of four colors):

- `--color-black`
- `--color-cream`
- `--color-gold`
- `--color-gray`

These are mapped to semantic tokens via Tailwind v4's `@theme`:

- `background` → `bg-background`
- `accent` → `bg-accent` / `text-accent`
- `heading` → `text-heading`
- `body` → `text-body`

No ad-hoc hex values are used in components; colors flow through these semantic tokens.

### Spacing System

All layout spacing respects an 8px grid, expressed with Tailwind utilities:

- 8px → `2` (e.g., `p-2`, `gap-2`)
- 16px → `4`
- 24px → `6`
- 32px → `8`
- 48px → `12`
- 64px → `16`
- 96px → `24`

Arbitrary spacing values (like `p-7`, `mt-5`) are intentionally avoided to maintain a strict rhythm.

### Motion

- Subtle transitions only: 200–300ms `ease-out` on hover.
- Product images scale gently up to `1.02–1.03` on hover.
- Navigation links use understated underline reveals tied to hover state.
- No bounce animations, no parallax, no noisy micro-interactions.

### Imagery

- Imagery is treated architecturally: fixed `3:4` aspect ratio containers (`aspect-[3/4]`) with `object-cover` / `object-contain`.
- This keeps the grid consistent, avoids distortion, and matches the quiet, gallery-like intent of the brand.

---

## Routes & UX

### `/` – Landing Page

- **Hero** with brand name, tagline, and a single CTA to `/products`.
- **Brand Intro** explaining AURELIA's philosophy in precise, non-generic language.
- **Featured Products** section highlighting three compositions with more whitespace and a slightly different card treatment from the main grid.

### `/products` – Product Listing

- Responsive grid:
	- Desktop: 3 columns
	- Tablet: 2 columns
	- Mobile: 1 column
- Each card includes: image, name, short description, price, and a "View Details" button.
- Uses the reusable `ProductCard` component for both standard and featured layouts.
- Optional, minimal controls:
	- Category filter (including "All").
	- Price sort (curated order, low-to-high, high-to-low).

### `/products/[id]` – Product Detail

- Desktop layout: image left, information right. Stacked on mobile.
- Includes full description, price, category, and a structured `ProductSpecs` block:
	- Top Notes
	- Heart Notes
	- Base Notes
	- Longevity
	- Occasion
- Invalid IDs render the `ErrorState` component with a calm message and clear navigation back to the collection or home, rather than a blank or broken page.

---

## Data Model

Defined in `types/product.ts` and used in `data/products.ts`:

```ts
export interface FragranceNotes {
	top: string[];
	heart: string[];
	base: string[];
}

export interface Product {
	id: string;
	name: string;
	price: number;
	shortDescription: string;
	fullDescription: string;
	category: string;
	image: string;
	fragranceNotes: FragranceNotes;
	longevity: string;
	occasion: string;
}
```

`data/products.ts` contains 7 realistic, premium-feeling compositions, each with curated notes and occasions. All UI surfaces consume this static data; there is no backend or API.

---

## Getting Started

1. **Install dependencies** (if you haven't already):

	 ```bash
	 npm install
	 ```

2. **Run the development server**:

	 ```bash
	 npm run dev
	 ```

3. Open `http://localhost:3000` in your browser.

The app uses Turbopack by default with the current Next.js version. All routes are purely frontend and rely on static data.

---

## Deployment

You can deploy this project like any standard Next.js App Router app:

1. **Build** the project:

	 ```bash
	 npm run build
	 ```

2. **Start** the production server locally:

	 ```bash
	 npm run start
	 ```

3. To deploy to a platform such as Vercel or any Node-compatible host:
	 - Point the platform at the repository.
	 - Ensure `npm run build` is used as the build command and `npm start` as the start command (if applicable).

No additional environment variables or backend services are required.

---

## Known Limitations

- **No backend**: All data is static and lives in `data/products.ts`. There is no CMS, search, or persistence.
- **No cart or checkout**: This is a pure showcase; e-commerce flows are intentionally out of scope.
- **Minimal accessibility testing**: Semantic HTML is used, but the project has not undergone formal a11y auditing.
- **Images**: Imagery is abstract and local; in a real deployment, dedicated art-directed bottle photography would replace the current assets while preserving the 3:4 aspect and layout structure.

---

## Extending the Project

- Wire `data/products.ts` into a headless CMS if you need non-technical editing.
- Add internationalization around pricing and copy while keeping the typography and spacing system intact.
- Introduce soft theming (e.g., dark-on-cream vs. cream-on-dark) by swapping the underlying CSS variables without adding new raw colors.

The current implementation is intentionally narrow, focusing on disciplined layout, clear architecture, and a believable luxury brand presence.
