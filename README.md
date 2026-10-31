# NOIR THREAD — Clothing E-commerce Website

A minimal, premium fashion store with collections, product variants, cart and dummy checkout.

Built with **React 18, Vite, Tailwind CSS 3, React Router 6** and **lucide-react** icons.

## Features
- Home: full-screen hero, marquee, collections, bestsellers, brand story, lookbook, scroll animations
- Shop: filters by category, size, colour and price + sorting (mobile filter drawer)
- Collections page and individual collection pages
- Product page: multiple images, colour & size selection (out-of-stock sizes disabled), quantity, size-guide modal, accordions, related products
- Cart with variant-aware lines, free-shipping progress; 2-step dummy checkout (shipping → Card/UPI/COD)
- Pages: Home, Shop, Collections, Product, About, Contact, Cart, Checkout

## How to run
1. Install [Node.js](https://nodejs.org) 18 or newer.
2. Open a terminal in this folder and run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the link shown (usually http://localhost:5173).

Build for production: `npm run build` (output in `dist/`), preview it with `npm run preview`.

## Project structure
```
src/
  data.js          # all sample content (edit text, prices, images here)
  components/      # reusable UI pieces
  pages/           # one file per page
  App.jsx          # routes
  index.css        # Tailwind + shared styles
tailwind.config.js # brand colours & fonts
```

## Notes
- Photos load from Unsplash, so an internet connection is needed. If an image fails, a placeholder is shown automatically.
- Forms and checkout are front-end only (demo). Data is kept in the browser's localStorage — connect a backend/API to go live.
- Deploy-ready: `vercel.json` (Vercel) and `public/_redirects` (Netlify) make page refreshes work on any route. On Vercel or Netlify just import the repo — no settings needed.

## Author
**Thota Sathwika** — [GitHub](https://github.com/ThotaSathwika) · [LinkedIn](https://linkedin.com/in/thota-sathwika-9046b2297)
