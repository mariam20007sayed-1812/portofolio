# Mariam Sayed Portfolio

A responsive React + TypeScript portfolio for Mariam Sayed, a Computer Science student exploring AI & Data Science.

## Stack
- React
- TypeScript
- Vite
- React Router
- Lucide React
- Custom responsive CSS

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Personal information to replace
Edit `src/App.tsx` → `PROFILE`:
- Email
- LinkedIn URL
- GitHub URL
- CV file

Replace `YOUR-DOMAIN.example` in `index.html`, `public/robots.txt`, and `public/sitemap.xml` with the real deployed domain.

## Images
Project visuals are intentionally placeholders. Add real screenshots under `public/images/projects/` and update the `ProjectCard` / project detail visual markup when ready. Add a real profile image if desired.

## Projects
Project content lives in `src/data.ts`. Add or edit projects there; each project automatically gets a card and a case-study route.

## Contact form
The current site intentionally uses direct contact links and does not fake a working backend form. If a form is desired, connect it to a real email/form provider and keep any private keys server-side.

## Deployment
Build with `npm run build` and deploy the generated `dist/` directory to a static host such as Vercel, Netlify, GitHub Pages (with appropriate SPA routing configuration), or another modern host.

## Before deployment checklist
- Replace all `[ADD ...]` placeholders.
- Add the actual CV PDF at `your public assets folder or change the CV path` or change the CV path.
- Replace project placeholders with screenshots.
- Replace `#` GitHub/demo links with real URLs.
- Replace canonical/OG domain placeholders.
- Run `npm run build` and check all routes on the target host.
