---
title: "Getting Started with Nuxt.js 3"
description: "Learn how to build modern web applications with Nuxt.js 3 and Vue 3"
date: "2024-03-10"
author: "Your Name"
tags: ["Nuxt", "Vue", "JavaScript", "Tutorial"]
image: "/images/nuxt-tutorial.jpg"
---

# Getting Started with Nuxt.js 3

Nuxt.js is a powerful framework for building Vue.js applications. In this tutorial, we'll explore the basics and get you up and running quickly.

## What is Nuxt.js?

Nuxt.js is a free and open-source framework that makes creating universal, single-page and static-generated Vue.js applications simple and enjoyable.

### Key Features

- File-based routing
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- Auto-imports and component auto-discovery
- Built-in API routes
- Image optimization
- Powerful composables

## Installation

Getting started is super easy:

```bash
npx nuxi@latest init my-app
cd my-app
npm install
npm run dev
```

That's it! Your Nuxt app is running on `http://localhost:3000`

## Project Structure

```
my-app/
├── app.vue           # Root component
├── nuxt.config.ts    # Configuration
├── pages/            # Routes
├── components/       # Components
├── assets/          # Static files
└── public/          # Public files
```

## Creating Your First Page

Create a new file `pages/about.vue`:

```vue
<template>
  <div>
    <h1>About Page</h1>
    <p>Welcome to my about page!</p>
  </div>
</template>

<script setup>
// Your component logic here
</script>
```

Now navigate to `/about` and you'll see your page!

## Using Vue 3 Composition API

Nuxt 3 comes with Vue 3 by default, giving you access to the powerful Composition API:

```vue
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

const increment = () => {
  count.value++
}
</script>
```

## Working with Components

Auto-import is enabled, so you can use components without importing:

```vue
<template>
  <div>
    <MyComponent />
  </div>
</template>

<!-- No need to import MyComponent! -->
```

## API Routes

Create server endpoints in `server/routes/`:

```ts
// server/routes/api/hello.ts
export default defineEventHandler(async (event) => {
  return { message: 'Hello from the server!' }
})
```

Access it from your component:

```ts
const { data } = await useFetch('/api/hello')
```

## Environment Variables

Create a `.env` file:

```env
NUXT_PUBLIC_API_URL=https://api.example.com
```

Access it in your components:

```ts
const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl
```

## Deployment

Nuxt 3 can be deployed to many platforms:

- **Vercel**: Optimized for Nuxt
- **Netlify**: Perfect for static generation
- **AWS**: Lambda functions, S3 + CloudFront
- **Docker**: Containerized deployment

## Next Steps

1. Explore the [Nuxt documentation](https://nuxt.com)
2. Try building a small project
3. Join the Nuxt community on Discord
4. Contribute to open source Nuxt modules

## Conclusion

Nuxt.js is an incredible framework that makes building Vue applications a breeze. Whether you're building a static site, a full-featured application, or anything in between, Nuxt has you covered.

Happy coding! 🚀
