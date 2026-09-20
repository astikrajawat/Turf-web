# Tranquiltone Sports Club

Production-ready Next.js App Router single-page site for Tranquiltone Sports Club, Kanpur. It is statically exported for Vercel, with all editable club details in `data/club.ts`.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Assets

Add the supplied real assets (not fabricated) at `public/reference/logo.jpg` and `public/reference/poster.jpg`. Add future gallery images under `public/gallery/`; the page includes a clearly marked gallery placeholder.

## Deploy to Vercel

Import this GitHub repository into Vercel. Keep the framework preset as **Next.js**, use `npm run build` as the build command, and leave the output directory blank (Next detects the static export). Every push to the connected branch redeploys automatically.
