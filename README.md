# Orbis.Nft — Beyond Earth

A dark space-themed NFT landing page built with React + TypeScript + Vite + Tailwind CSS.

## Features

- 🌌 Full-bleed video backgrounds from CloudFront
- 💎 Liquid Glass UI effect on navbar, cards, and overlays
- 🔡 Anton + Condiment Google Fonts pairing
- 🟢 Neon green (#6FFF00) accent system
- 📱 Fully responsive mobile-first layout
- 🎨 4 sections: Hero, About, NFT Collection Grid, CTA

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Texture

Place a `texture.png` file in the `/public` folder for the full-screen grain overlay effect.
The file should be a seamless noise/grain texture. A generated placeholder is included.

## Structure

```
src/
  components/
    Hero.tsx        — Section 1: full-viewport hero with video bg
    About.tsx       — Section 2: intro with video bg
    Collection.tsx  — Section 3: NFT grid on solid bg
    CTA.tsx         — Section 4: CTA with native-ratio video
  App.tsx           — Root with texture overlay
  index.css         — liquid-glass CSS + Tailwind base
  main.tsx          — Entry point
```

## Color System

| Token       | Value      | Usage                        |
|-------------|------------|------------------------------|
| background  | `#010828`  | Page background, solid sections |
| cream       | `#EFF4FF`  | All primary text             |
| neon        | `#6FFF00`  | Cursive accents, CTA bar     |

## Font System

| Alias          | Family        | Usage                          |
|----------------|---------------|--------------------------------|
| font-grotesk   | Anton         | Headings, nav, labels          |
| font-condiment | Condiment     | Cursive accent overlays        |
| font-mono      | Courier New   | Body / description paragraphs  |
