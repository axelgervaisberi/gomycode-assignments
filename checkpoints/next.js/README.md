# Next.js Portfolio Website - Checkpoint Next JS

A Next.js Portfolio Website built for **Zokouehi Axel Gervais BERI** using Next.js page-based file routing, CSS Modules, Next.js `<Image />` component, React-Bootstrap, and translated English career documentation.

## Features & Architecture

- **Page-Based Routing (`pages/`)**:
  - `pages/index.js` (`/`): Home Page featuring Next.js profile `<Image />`, title ("Full-Stack Developer & Business Analyst"), skills grid, and featured projects.
  - `pages/about.js` (`/about`): Comprehensive career history, Education timeline (Bac D, Valoris, IUGB, GoMyCode), Experience timeline (DGDLD, EBENYX Technologies), Interests, and Languages.
  - `pages/projects.js` (`/projects`): Portfolio showcase of 4 enterprise projects (*Sygidan Citoyen*, *ANAGED Website + SIM*, *TransCI*, *SIGETI*) with tech stack tags and role descriptions.
  - `pages/contact.js` (`/contact`): Contact cards (+225 07 78 92 99 03, Abidjan) and interactive contact form.
- **Styling**: Custom CSS Modules (`styles/Home.module.css`), global CSS variables (`styles/globals.css`), and React-Bootstrap components.
- **Image Optimization**: Uses `next/image` with `public/image.png`.

## Setup & Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. Build production bundle:
   ```bash
   npm run build
   ```
