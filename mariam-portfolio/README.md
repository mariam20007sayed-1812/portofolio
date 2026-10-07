# Mariam Sayed Portfolio

A polished, dark-futuristic portfolio website for Mariam Sayed, built with React, TypeScript, and Vite.

## Overview

This project includes:

- Responsive portfolio layout for mobile, tablet, laptop, and desktop
- Hero, about, skills, experience, education, projects, services, achievements, and contact sections
- Accessible semantic structure and keyboard-friendly interactions
- Project case-study modal and a working contact-form UI with validation
- SEO metadata, sitemap, robots rules, and placeholder Open Graph assets
- Production-ready build setup using Vite

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL displayed in the terminal.

## Production build

```bash
npm run build
```

## Deployment

This project is ready to deploy to modern hosting providers such as:

- Vercel
- Netlify
- GitHub Pages

### Example for Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Use the default build settings for Vite.
4. Deploy.

## Personalization checklist

Update these items before publishing:

- Name, title, and portfolio copy in `src/App.tsx`
- Email, LinkedIn, and GitHub links in the `Contact` section and footer
- Project names, descriptions, and links in `src/App.tsx`
- Replace placeholders in `public/og-cover.svg` and `public/favicon.svg`
- Update canonical URL and social metadata in `index.html`

## Required environment variables

No secrets are required for the current build. If you later connect the contact form to a real email service, add a value like:

```env
VITE_CONTACT_EMAIL=mariam20007sayed@gmail.com
VITE_FORMSPREE_ENDPOINT=https://your-form-endpoint
```

## Project structure

```text
src/
  App.tsx
  index.css
  main.tsx
public/
  favicon.svg
  og-cover.svg
  project-clinic.svg
  project-locker.svg
  project-game.svg
  robots.txt
  sitemap.xml
```

## Placeholder notes

The project intentionally avoids inventing personal facts. Any missing information has been left as realistic portfolio-ready content and should be replaced with the student’s official details when available.
