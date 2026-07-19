# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check (`tsc -b`) then build for production
- `npm run lint` — run ESLint
- `npm run preview` — preview the production build

There are no tests in this project.

## Architecture

A single-page personal portfolio (React 19 + TypeScript + Vite + Tailwind CSS v4). There is no routing — [App.tsx](src/App.tsx) renders all sections in order (Navbar, Home, About, Skills, Experience, Projects, Contact), and navigation is anchor-based (`#about`, `#skills`, …) with smooth scrolling set globally in [index.css](src/index.css).

Key conventions:

- **SectionWrapper** ([src/components/SectionWrapper.tsx](src/components/SectionWrapper.tsx)) is the shared layout for every section: it provides the `id` anchor target, the styled section title, and Framer Motion stagger/fade-up animations (`whileInView`, animate once). New sections should use it rather than re-implementing this.
- **Dark mode** is class-based: [DarkMode.tsx](src/components/DarkMode.tsx) toggles the `dark` class on `<html>` and persists the choice in `localStorage.theme`, falling back to the OS preference. Tailwind v4's dark variant is wired up via `@custom-variant dark` in [index.css](src/index.css) — there is no `tailwind.config.js`; Tailwind is configured through the `@tailwindcss/vite` plugin and CSS directives.
- **Contact form** uses EmailJS ([Contact.tsx](src/components/Contact.tsx)) with the service/template/public-key IDs inline in the component.
- **Static assets** (project screenshots, Resume.pdf, logos) live in `public/` and are referenced by absolute path.
- Google Analytics (gtag) is embedded directly in [index.html](index.html).
