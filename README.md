# My Portfolio - Nuxt.js

A creative, cyberpunk neon-themed portfolio website built with Nuxt.js 3, Vue 3, and Tailwind CSS.

## Features

✨ **Core Features**
- Responsive design (mobile, tablet, desktop)
- Dark mode with toggle
- Smooth animations and transitions
- Beautiful cyberpunk neon color scheme
- SEO optimized
- Fast performance (SSG/SSR ready)

📄 **Sections**
- Hero/Landing page
- About page with skills timeline
- Projects showcase with grid layout
- Blog with markdown support
- Contact form with validation
- Testimonials section

🎨 **Design & UX**
- Custom animations and glitch effects
- Neon glow effects
- Grid background patterns
- Smooth scroll behaviors
- Accessible components
- Loading states and error pages

## Tech Stack

- **Framework**: Nuxt 3 with Vue 3 Composition API
- **Styling**: Tailwind CSS + Custom CSS
- **Content**: @nuxt/content v2 with Markdown
- **Icons**: Lucide Icons
- **Deployment**: Vercel
- **Type System**: TypeScript
- **Code Quality**: ESLint + Prettier

## Project Structure

```
my-portfolio/
├── asset/css/              # Global styles
├── components/
│   ├── Layout/             # Header, Footer
│   ├── Common/             # Reusable components
│   └── Contact/            # Contact form
├── pages/                  # Route pages
│   ├── index.vue          # Home
│   ├── about.vue          # About
│   ├── projects/          # Projects
│   ├── blog/              # Blog
│   └── contact.vue        # Contact
├── content/               # Markdown files
│   ├── blog/
│   └── projects/
├── composables/           # Vue composables
├── utils/                 # Helper functions
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
cd my-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Development

### Available Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate

# Type checking
npm run type-check

# Lint code
npm run lint

# Format code
npm run format
```

## Customization

### Colors

Edit the Tailwind config in `tailwind.config.ts` to customize the cyberpunk neon color palette:

```ts
colors: {
  primary: '#00F0FF',      // Neon Cyan
  secondary: '#FF006E',    // Neon Pink
  accent: '#39FF14',       // Neon Green
}
```

### Content

- **Blog Posts**: Add markdown files to `content/blog/`
- **Projects**: Add markdown files to `content/projects/`
- **Contact Email**: Update the email address in `pages/contact.vue`

### Navigation

Edit `utils/constants.ts` to update navigation links and social media connections.

## Animations

The site includes several custom animations:

- **Neon Glow Pulse**: Text and elements with glowing effects
- **Typewriter**: Hero text animation
- **Glitch Effect**: Creative text distortion
- **Fade In**: On-scroll animations
- **Slide In**: Directional entrance animations
- **Float**: Subtle floating motion
- **Pulse**: Breathing effect

See `assets/css/animations.css` for all available animations.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Nuxt.js and configure the build
5. Deploy!

**Vercel Settings:**
- Build Command: `npm run build`
- Output Directory: `.output/public`
- Framework: Nuxt

### Deploy to Other Platforms

The project can be deployed to any platform supporting Node.js:

- **Netlify**: Uses `npm run generate` for static generation
- **AWS**: Can be deployed as a Serverless function
- **Self-hosted**: Use `npm run build && npm run preview`

## Performance

- Optimized images with lazy loading
- CSS-in-JS compilation
- Code splitting and chunking
- Minified and compressed assets
- Fast First Contentful Paint (FCP)
- Optimized Largest Contentful Paint (LCP)

## SEO

- Meta tags for each page
- Open Graph tags for social sharing
- Sitemap auto-generation
- robots.txt
- Semantic HTML structure
- Structured data support

## Accessibility

- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Semantic heading hierarchy

## Future Enhancements

- [ ] Admin panel for content management
- [ ] Comments system for blog posts
- [ ] Newsletter subscription
- [ ] Project filtering and search
- [ ] Reading time calculation for blog posts
- [ ] Related articles suggestions
- [ ] Analytics integration
- [ ] Multi-language support (i18n)
- [ ] 3D animations with Three.js
- [ ] AI chatbot integration

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

MIT License - feel free to use this template for your portfolio.

## Resources

- [Nuxt 3 Documentation](https://nuxt.com)
- [Vue 3 Guide](https://vuejs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Nuxt Content](https://content.nuxt.com)
- [Vercel Deployment](https://vercel.com/docs)

## Support

If you have questions or need help, feel free to:
- Open an issue on GitHub
- Check the documentation
- Review the Nuxt community forums

---

Built with ❤️ using Nuxt.js
