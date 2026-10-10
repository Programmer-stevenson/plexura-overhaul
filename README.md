# Plexura React + TypeScript

Exact React/TypeScript conversion of the approved HTML prototype.

## Structure

- `src/sections/HeroSection.tsx` — hero section
- `src/sections/WebDesignSection.tsx` — web design/development section
- `src/sections/ProcessSection.tsx` — process section
- `src/components/Header.tsx` — desktop/mobile header
- `src/components/MobileMenu.tsx` — mobile menu overlay
- `src/components/TechnologyPartners.tsx` — scrolling technology strip
- `src/styles/site.css` — the prototype CSS preserved as-is, with embedded images replaced by local asset paths
- `public/assets/` — all image assets from the prototype
- `reference-prototype.html` — clean reference snapshot of the source prototype

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The project intentionally keeps the original class names and CSS so adding future TSX sections will not disturb the current approved layout.
