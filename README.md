# Next.js Portfolio

This is a personal portfolio built using Next.js and TypeScript. It showcases various projects and provides information about the portfolio owner.

## Features

- **Home Page**: Displays the main content and introduction.
- **About Page**: Provides information about the portfolio owner.
- **Projects Page**: Lists various projects with descriptions and links.
- **Contact Page**: Allows users to reach out through a contact form or provided contact information.
- **Responsive Design**: The portfolio is designed to be responsive and user-friendly.

# Next.js TypeScript Portfolio (polished)

This repository contains a minimal, professional Next.js + TypeScript portfolio. It includes modern layout, Tailwind integration, small animations, and a clearer folder structure for data and types.

Quick start (Windows PowerShell)

```powershell
# install deps
npm install

# dev server
npm run dev
```

What I improved
- A consistent `Layout` (`components/Layout.tsx`) with sticky header and minimal footer.
- A responsive, accessible header and improved `ProjectCard` with hover animation.
- `data/projects.ts` for example project data and `types/project.ts` for shared types.
- Tailwind-based `styles/globals.css` with a small `animate-fade-up` utility.

Best-practices (short)
- Keep components small and focused; prefer composition over large monolith components.
- Place static site data in `data/` and type definitions in `types/`.
- Use semantic HTML (`main`, `article`, `nav`, etc.) and provide ARIA attributes where helpful.
- Keep styles utility-first with Tailwind; add small, documented custom utilities in `styles/` when needed.

Next steps (optional)
- Replace placeholder project links/images with real content.
- Add unit tests for helpers and visual tests for components.
- Add a contact API route or integrate a form backend.

If you'd like, I can continue and add a contact API or demo images and more elaborate styling.