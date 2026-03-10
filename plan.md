# Portfolio Website Plan - Nuxt.js

## Project Overview
A creative, cyberpunk neon-themed portfolio website for a Software Engineer with smooth animations, dark mode, and comprehensive content sections.

---

## Tech Stack

### Frontend Framework
- **Nuxt.js 3** (latest stable)
- **Vue 3** with Composition API
- **TypeScript** (optional but recommended)

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion / Vue Transition Group** - Smooth animations
- **Lucide Icons** or custom SVGs - Icon library

### Content Management
- **Markdown files** - Blog posts and project details
- **@nuxt/content v2** - Static content handling
- **YAML/JSON frontmatter** - Metadata for posts/projects

### Build & Deployment
- **Vercel** - Hosting & auto-deployment
- **Nuxi** - Nuxt CLI tooling
- **Git** - Version control

### Development Tools
- **ESLint & Prettier** - Code quality & formatting
- **Vitest** (optional) - Unit testing

---

## Project Structure

```
my-portfolio/
├── nuxt.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── .gitignore
├── .prettierrc
├── .eslintrc.js
│
├── app.vue                    # Root component
├── error.vue                  # Error page
│
├── assets/
│   ├── css/
│   │   ├── main.css          # Global styles
│   │   ├── animations.css    # Cyberpunk animations
│   │   └── variables.css     # CSS variables (neon colors)
│   └── images/
│
├── components/
│   ├── Layout/
│   │   ├── Header.vue        # Navigation
│   │   ├── Footer.vue
│   │   └── Sidebar.vue       # Optional nav
│   ├── Common/
│   │   ├── DarkModeToggle.vue
│   │   ├── Button.vue
│   │   ├── Card.vue
│   │   ├── Badge.vue
│   │   └── SocialLinks.vue
│   ├── Hero.vue
│   ├── About.vue
│   └── Contact/
│       └── ContactForm.vue
│
├── pages/
│   ├── index.vue             # Home / Landing
│   ├── about.vue             # About section
│   ├── projects/
│   │   ├── index.vue         # Portfolio showcase
│   │   └── [slug].vue        # Individual project detail
│   ├── blog/
│   │   ├── index.vue         # Blog list
│   │   └── [slug].vue        # Article detail
│   ├── contact.vue           # Contact page
│   └── 404.vue
│
├── content/
│   ├── blog/
│   │   ├── first-post.md
│   │   ├── second-post.md
│   │   └── ...
│   └── projects/
│       ├── project-1.md
│       ├── project-2.md
│       └── ...
│
├── public/
│   ├── favicon.ico
│   ├── images/               # Static images
│   └── resume.pdf
│
├── composables/
│   ├── useDarkMode.ts        # Dark mode logic
│   ├── useSmoothScroll.ts    # Scroll animations
│   └── useAnimations.ts      # General animations
│
├── utils/
│   ├── constants.ts          # Colors, breakpoints
│   └── helpers.ts
│
└── middleware/               # Authentication, guards (if needed)
```

---

## Color Palette (Cyberpunk Neon)

| Use Case | Color | Hex | Purpose |
|----------|-------|-----|---------|
| Primary | Neon Cyan | `#00F0FF` | CTAs, highlights |
| Secondary | Neon Purple | `#FF006E` | Accents, links |
| Tertiary | Neon Green | `#39FF14` | Success, hover states |
| Danger | Neon Red | `#FF0000` | Errors, alerts |
| Dark BG | Almost Black | `#0A0E27` | Main background |
| Light Text | White | `#FFFFFF` | Primary text |
| Dim Text | Gray | `#8892B0` | Secondary text |

### CSS Variables Setup
```css
:root {
  --color-primary: #00F0FF;
  --color-secondary: #FF006E;
  --color-accent: #39FF14;
  --glow: 0 0 20px rgba(0, 240, 255, 0.5);
}
```

---

## Core Features

### 1. **Navigation & Header**
- [ ] Sticky responsive navbar
- [ ] Logo/branding
- [ ] Navigation links (Home, About, Projects, Blog, Contact)
- [ ] Dark mode toggle
- [ ] Mobile hamburger menu

### 2. **Dark Mode**
- [ ] Toggle button in header
- [ ] Persistent storage (localStorage)
- [ ] Smooth transitions between light/dark
- [ ] System preference detection (prefers-color-scheme)

### 3. **Hero Section**
- [ ] Full-screen landing hero
- [ ] Animated text (typewriter effect or fade-in)
- [ ] Glowing neon text with cyberpunk vibes
- [ ] CTA button to scroll/navigate
- [ ] Animated background (particles, grid, or gradient shifts)

### 4. **About Section**
- [ ] Bio/introduction text
- [ ] Profile image with glow effect
- [ ] Skills/tech stack display
- [ ] Timeline or journey section
- [ ] Smooth scroll animations

### 5. **Projects/Portfolio**
- [ ] Grid/card layout
- [ ] Project cards with:
  - Thumbnail image
  - Title & description
  - Tech stack badges
  - Links (live demo, GitHub)
- [ ] Click to view full project details
- [ ] Filter by technology (optional enhancement)
- [ ] Smooth hover animations

### 6. **Blog**
- [ ] Blog list page with card layout
- [ ] Individual blog page with:
  - Markdown rendering
  - Table of contents
  - Code syntax highlighting
  - Meta info (date, reading time, author)
- [ ] Search/filter functionality (optional)
- [ ] Related articles (optional)

### 7. **Contact**
- [ ] Contact form with fields:
  - Name
  - Email
  - Subject
  - Message
- [ ] Form validation
- [ ] Success/error messages
- [ ] Email integration (Nodemailer, SendGrid, or Formspree)
- [ ] Social media links

### 8. **Testimonials**
- [ ] Carousel/grid of testimonials
- [ ] Profile picture + name + quote
- [ ] Star ratings (optional)
- [ ] Smooth transitions between testimonials

### 9. **Footer**
- [ ] Social media links
- [ ] Quick links
- [ ] Copyright info
- [ ] Back-to-top button with scroll animation

---

## Implementation Phases

### Phase 1: Setup & Scaffolding (Week 1)
- [ ] Initialize Nuxt 3 project
- [ ] Install & configure Tailwind CSS
- [ ] Set up TypeScript configuration
- [ ] Create base layout components (Header, Footer)
- [ ] Configure ESLint & Prettier
- [ ] Set up Vercel deployment

### Phase 2: Core Pages & Navigation (Week 1-2)
- [ ] Create all page routes
- [ ] Build navigation structure
- [ ] Implement dark mode toggle
- [ ] Add responsive navbar
- [ ] Create 404 page

### Phase 3: Home & Hero Section (Week 2)
- [ ] Design hero section layout
- [ ] Implement text animations
- [ ] Add neon glow effects
- [ ] Create background animation/effects
- [ ] Add smooth scroll behavior

### Phase 4: About Section (Week 2-3)
- [ ] Add bio content
- [ ] Display profile image
- [ ] Create skills section with badges
- [ ] Add timeline/journey component
- [ ] Implement reveal animations on scroll

### Phase 5: Projects Showcase (Week 3)
- [ ] Create project data structure (YAML/JSON or Markdown)
- [ ] Build project card component
- [ ] Implement project listing page
- [ ] Create individual project detail page
- [ ] Add animations on hover/scroll

### Phase 6: Blog Section (Week 3-4)
- [ ] Set up @nuxt/content v2
- [ ] Create markdown blog post template
- [ ] Build blog listing page
- [ ] Create blog article detail page
- [ ] Add code syntax highlighting
- [ ] Implement reading time calculator

### Phase 7: Contact & Forms (Week 4)
- [ ] Design contact form
- [ ] Add form validation
- [ ] Set up email service integration
- [ ] Add success/error handling
- [ ] Test form submission

### Phase 8: Testimonials (Week 4)
- [ ] Create testimonial carousel/grid
- [ ] Add testimonial data structure
- [ ] Implement smooth transitions
- [ ] Make responsive design

### Phase 9: Animations & Polish (Week 4-5)
- [ ] Add entrance animations to all sections
- [ ] Implement scroll-triggered animations
- [ ] Add hover effects
- [ ] Optimize performance
- [ ] Test on multiple devices

### Phase 10: SEO & Deployment (Week 5)
- [ ] Add meta tags & SEO optimization
- [ ] Generate sitemap
- [ ] Add robots.txt
- [ ] Final testing (cross-browser, mobile)
- [ ] Deploy to Vercel
- [ ] Set up analytics (optional)

---

## Animation Ideas (Cyberpunk Theme)

1. **Neon glowing text** - Text with text-shadow glow effects
2. **Typewriter effect** - Hero text types out letter by letter
3. **Parallax scrolling** - Background moves slower than foreground
4. **Fade-in on scroll** - Elements fade in as they enter viewport
5. **Hover card lift** - Cards lift with shadow on hover
6. **Glitch effect** - Occasional glitch animation on text/images
7. **Grid background animation** - Animated grid that moves/pulses
8. **Smooth transitions** - Page transitions with fade/slide effects
9. **Button glow** - CTA buttons glow on hover
10. **Staggered animations** - Components animate in sequence

---

## Content Management Strategy

### Blog Posts
**Location:** `content/blog/*.md`

**Frontmatter Structure:**
```yaml
---
title: "Post Title"
description: "Short description"
date: "2024-03-10"
author: "Your Name"
tags: ["tag1", "tag2"]
image: "/images/post-cover.jpg"
---

# Content here in markdown...
```

### Projects
**Location:** `content/projects/*.md`

**Frontmatter Structure:**
```yaml
---
title: "Project Title"
description: "Project description"
image: "/images/project-thumbnail.jpg"
techs: ["Vue", "Nuxt", "Tailwind"]
links:
  - type: "live"
    url: "https://demo.com"
  - type: "github"
    url: "https://github.com/..."
date: "2024-03-10"
---

# Project details in markdown...
```

---

## SEO & Performance

- [ ] Add meta description to all pages
- [ ] Implement Open Graph tags for social sharing
- [ ] Optimize images (WebP, lazy loading)
- [ ] Configure Nuxt Sitemap module
- [ ] Add analytics (Vercel Analytics or Google Analytics)
- [ ] Monitor Lighthouse score (target: 90+)
- [ ] Minify CSS/JS automatically (Nuxt handles this)

---

## Deployment Checklist (Vercel)

- [ ] Connect GitHub repository to Vercel
- [ ] Set build command: `npm run build`
- [ ] Set output directory: `.output/public`
- [ ] Configure environment variables (if needed)
- [ ] Enable automatic deployments on push to main
- [ ] Set up custom domain
- [ ] Enable HTTPS

---

## Future Enhancements

- [ ] Admin panel for managing content
- [ ] Comment system on blog posts
- [ ] Newsletter subscription
- [ ] Project filtering by technology
- [ ] Blog search functionality
- [ ] 3D animations (Three.js)
- [ ] AI chatbot for contact
- [ ] Analytics dashboard
- [ ] Multi-language support (i18n)

---

## Dev Server Commands

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

---

## Resources & References

- [Nuxt 3 Documentation](https://nuxt.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Nuxt Content v2](https://content.nuxt.com)
- [Framer Motion for Vue](https://www.framer.com)
- [Vercel Documentation](https://vercel.com/docs)

---

## Notes

- Keep animations performant (use will-change, GPU acceleration)
- Test dark mode on all pages
- Ensure all images are optimized
- Write semantic HTML for accessibility
- Test forms before deployment
