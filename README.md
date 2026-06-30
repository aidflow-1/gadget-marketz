# Gadget Marketz

Marketing site for **Gadget Marketz** — a UK-based reseller of certified refurbished and brand-new tech (phones, laptops, tablets, audio, gaming and more).

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Home page sections

The landing page (`src/app/page.tsx`) is composed of self-contained sections:

| Section | File |
| --- | --- |
| Announcement bar | `src/components/site/AnnouncementBar.tsx` |
| Sticky navbar (mobile drawer + search) | `src/components/site/Navbar.tsx` |
| Hero + trust stats | `src/components/home/Hero.tsx` |
| Brand marquee | `src/components/home/BrandStrip.tsx` |
| Shop by category | `src/components/home/Categories.tsx` |
| Featured products | `src/components/home/FeaturedProducts.tsx` |
| Refurbished grading explainer | `src/components/home/GradingExplainer.tsx` |
| Why choose us | `src/components/home/WhyChooseUs.tsx` |
| Trade-in programme banner | `src/components/home/TradeInBanner.tsx` |
| Customer testimonials | `src/components/home/Testimonials.tsx` |
| Newsletter sign-up | `src/components/home/Newsletter.tsx` |
| Footer | `src/components/site/Footer.tsx` |

## Project structure

```
src/
  app/                 # App Router entry (layout, page, global styles)
  components/
    site/              # shared chrome — navbar, footer, product card, logo
    home/              # home-page sections
  lib/
    data.ts            # demo content (products, categories, testimonials…)
```

## Design system

Brand tokens live in `src/app/globals.css` under Tailwind v4's `@theme`:

- `brand-*` — primary blue
- `ink-*` — deep-navy neutrals
- `accent-*` — electric lime for CTAs and deals

Product imagery is served from Unsplash via `next/image`; the allowed host is
configured in `next.config.ts`. Swap `src/lib/data.ts` and those URLs for real
catalogue data when wiring up a backend.

> All pricing, products and reviews are placeholder demo content.
