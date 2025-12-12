# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro, showcasing professional work experience, projects, and technical skills. The site is deployed at https://tejaswan.me and uses Tailwind CSS for styling, with custom typography via Libre Caslon Condensed and Roboto Mono fonts.

## Development Commands

```bash
# Start development server (runs at localhost:4321)
npm run dev

# Build for production (runs type checking and builds)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro -- <command>
```

## Architecture

### Component-Based Structure

The site follows Astro's component model with a single-page layout composed of reusable sections:

- **Layout System**: `src/layouts/Layout.astro` - Main layout wrapper with SEO meta tags, OpenGraph, Twitter cards, fonts, and global styles
- **Page Structure**: `src/pages/index.astro` - Entry point that composes all sections in order
- **Section Components**: Each major section is a standalone component:
  - `HeroSection.astro` - Introduction with profile image
  - `TechSection.astro` - Technology stack display using devicon
  - `WorkSection.astro` - Professional experience timeline
  - `ProjectSection.astro` - Project showcase grid
  - `FooterSection.astro` - Footer with contact/social links
- **Reusable Components**:
  - `Navbar.astro` - Site navigation
  - `Button.astro` - Styled link buttons
  - `ProjectCard.astro` - Project display cards
  - `TechStackComponent.astro` - Individual tech stack items

### Styling System

- **Tailwind CSS**: Primary styling framework with custom configuration
- **Custom Theme**: Extended Tailwind with "tuatara" color palette (grayscale with dark theme)
- **Container**: Custom container with 1140px max-width for large screens, centered with 1rem padding
- **Typography**:
  - Libre Caslon Condensed (700 weight) for headings/titles (accessible via `.font-libre` class)
  - Roboto Mono for body text (400, 500, 600, 700 weights)
- **Icons**: devicon library for technology icons (imported globally in Layout)

### Configuration

- **Astro Config** (`astro.config.mjs`): Tailwind and sitemap integrations, site URL set to https://tejaswan.me
- **Tailwind Config** (`tailwind.config.mjs`): Custom tuatara color palette, container settings, content paths
- **TypeScript**: Configured with type checking via `astro check` in build script

## Key Patterns

### SEO and Meta Tags

The Layout component handles comprehensive SEO:
- Meta title, description, and keywords passed as props
- Optional `metaImg` prop for social sharing images (automatically converted to absolute URL)
- OpenGraph tags for social media
- Twitter card meta tags
- JSON-LD structured data via Astro generator meta tag

### Content Updates

- **Work Experience**: Edit `src/components/WorkSection.astro` - hardcoded experience entries with company, role, dates, and bullet points
- **Projects**: Edit `src/components/ProjectSection.astro` - uses ProjectCard component with title, optional githubLink, and optional liveLink
- **Tech Stack**: Edit `src/components/TechSection.astro` - uses TechStackComponent with devicon class names and display text
- **Hero Content**: Edit `src/components/HeroSection.astro` - introduction text and resume link

### Asset Management

- Static assets in `public/` directory (favicon.png, underline.svg)
- Images in `src/assets/images/` (imported as Astro Image components)
- Icons in `src/assets/icons/`

## Deployment

- Site URL: https://tejaswan.me
- Speed Insights: Vercel Speed Insights integration enabled via Layout component
- Build output: `./dist/` directory
- Sitemap: Auto-generated via @astrojs/sitemap integration
