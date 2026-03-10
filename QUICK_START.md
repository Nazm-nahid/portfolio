# Quick Start Guide

## 🚀 Get Your Portfolio Running in 5 Minutes

### Step 1: Install Dependencies
```bash
cd /Users/pathaoltd/Pathao-Dev/my-app
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Your portfolio will be live at **http://localhost:3000** 🎉

---

## 📝 Customization Checklist

### 1. Update Basic Info
**File**: `utils/constants.ts`
- Change logo text "Portfolio" to your name
- Update navigation links if needed
- Update social media URLs

**File**: `pages/index.vue`
- Update hero section text
- Change the statistics (50+ Projects, etc.)
- Update CTA button text

### 2. Add Your Profile
**File**: `pages/about.vue`
- Replace default about text with your bio
- Update skills and technologies
- Modify the timeline with your journey

### 3. Customize Colors
**File**: `tailwind.config.ts` and `assets/css/variables.css`
- Change primary color (currently `#00F0FF` - Neon Cyan)
- Change secondary color (currently `#FF006E` - Neon Pink)
- Change accent color (currently `#39FF14` - Neon Green)

### 4. Add Your Content

#### Blog Posts
1. Create new file in `content/blog/my-first-post.md`
2. Add frontmatter:
```yaml
---
title: "My First Post"
description: "Post description"
date: "2024-03-10"
author: "Your Name"
tags: ["tag1", "tag2"]
---
```
3. Write your post in Markdown

#### Projects
1. Create new file in `content/projects/my-project.md`
2. Add frontmatter with project details
3. Write project description and links

### 5. Update Social Links
**File**: `components/Layout/Footer.vue`
- Update GitHub URL
- Update LinkedIn URL
- Update email address

### 6. Configure Email (Contact Form)
The contact form currently shows success/error states. To integrate real email:
- Use SendGrid, Mailgun, or Nodemailer
- Update `pages/contact.vue` form submission
- Set up backend API route for email sending

---

## 🎨 Key Files to Edit

| File | Purpose |
|------|---------|
| `nuxt.config.ts` | Main Nuxt configuration |
| `tailwind.config.ts` | Color and styling config |
| `utils/constants.ts` | Global constants & links |
| `pages/index.vue` | Home page content |
| `pages/about.vue` | About page content |
| `components/Layout/Header.vue` | Navigation bar |
| `components/Layout/Footer.vue` | Footer content |
| `content/blog/` | Blog posts (Markdown) |
| `content/projects/` | Project showcases (Markdown) |

---

## 📦 Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run preview         # Preview production build

# Building
npm run build          # Build for production
npm run generate       # Generate static site

# Code Quality
npm run lint           # Check for errors
npm run lint:fix       # Fix errors automatically
npm run format         # Format code with Prettier
npm run type-check     # TypeScript checking
```

---

## 🌐 Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Nuxt.js
   - Click "Deploy"

3. **Done!** Your portfolio is live 🚀

---

## 🎯 Recommended Next Steps

1. ✅ Run the site locally and explore (`npm run dev`)
2. 📝 Update your personal information
3. 🎨 Customize colors to match your brand
4. 📰 Add your first blog post
5. 💼 Add your projects to the portfolio
6. 🔗 Update social media links
7. 📧 Setup email for contact form
8. 🚀 Deploy to Vercel

---

## 📚 Resources

- [Nuxt 3 Documentation](https://nuxt.com)
- [Vue 3 Guide](https://vuejs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Markdown Guide](https://www.markdownguide.org)
- [Vercel Deployment](https://vercel.com/docs)

---

## 💡 Troubleshooting

**Issue**: Port 3000 is already in use
```bash
npm run dev -- -p 3001
```

**Issue**: Changes not reflecting
```bash
npm run build
npm run preview
```

**Issue**: Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🎉 You're All Set!

Your portfolio is ready to customize and deploy. Start with `npm run dev` and enjoy building! 

Happy coding! 🚀
