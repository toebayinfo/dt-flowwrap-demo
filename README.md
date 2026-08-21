# D.T Flow Wrap Machines — Website Redesign Demo

Working concept for the redesign of flow-wrap-machines.com.

- **Stack:** React + TypeScript + Vite + Tailwind CSS
- **Bilingual:** full EN/FR toggle (persisted in localStorage)
- **Pages:** Home, Products (6 platforms), Services, Testimonials, Videos (YouTube embeds), multi-step Get a Quote flow
- **Hero:** looping packaging-line video with static poster fallback

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # output in dist/
```

## Deploy

Push to `main` — GitHub Actions (`.github/workflows/deploy.yml`) builds and
publishes to GitHub Pages automatically. Enable once under
**Settings → Pages → Build and deployment → Source: GitHub Actions**.
