# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linting
- `npm run test` - Run Vitest tests
- `npm run test:ui` - Run tests with UI interface

## Architecture Overview

**Shinobi** is a Next.js 15 blog application demonstrating modern React patterns with App Router. Built as a learning project for Claude Code.

### Key Technologies

- **Next.js 15** with App Router and Turbopack
- **React 19** with TypeScript
- **Tailwind CSS v4** with custom CSS variables
- **Vitest** for component testing
- **Hygraph** (GraphQL CMS) for blog content
- **DOMPurify** for HTML sanitization

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header/nav
│   ├── page.tsx           # Homepage
│   ├── blog/              # Blog listing and posts
│   ├── preview/           # Component preview
│   └── about/             # About page
├── components/
│   ├── ui/                # Reusable UI components (Button, Card, Avatar, Icon, Modal)
│   ├── BlogSidebar.tsx
│   └── DarkModeToggle.tsx
├── lib/
│   ├── queries.ts         # GraphQL queries
│   ├── types.ts           # TypeScript types
│   └── sanitize.ts        # HTML sanitization
└── test/
    ├── setup.ts           # Vitest setup
    └── vitest.d.ts        # Vitest type definitions
```

### Data Fetching Pattern

- Blog posts fetched from Hygraph CMS via GraphQL
- Server-side rendering with 1-hour revalidation (`next: { revalidate: 3600 }`)
- Requires `HYGRAPH_ENDPOINT` environment variable
- All HTML content must be sanitized with DOMPurify before rendering

### Theming System

- CSS variables in `globals.css` define light/dark themes
- Dark mode toggled by adding `.dark` class to `:root`
- Tailwind configured to use CSS variables (e.g., `text-foreground`, `bg-surface`)
- Typography: Rubik for headings, Merriweather for body text

### Testing

- Vitest with React Testing Library
- JSDOM environment for DOM testing
- Setup file: `src/test/setup.ts`
- Each UI component has a corresponding `.test.tsx` file

## Development Notes

- Path alias `@/*` maps to `src/*`
- When making new page components, always add a link to that page in the header. Only do this for page components, not UI or other drop-in components.
- Dark mode managed via CSS class on root element (no JavaScript state)
- All CMS HTML content requires sanitization for security
