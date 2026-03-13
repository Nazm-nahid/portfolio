export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2026-03-10',

  // CSS & Styling
  css: ['~/assets/css/variables.css', '~/assets/css/animations.css', '~/assets/css/main.css'],

  // Modules
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],

  // PostCSS Configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // DevTools
  devtools: { enabled: true },

  // Nuxt Content Configuration
  content: {
    documentDriven: false,
    highlight: {
      theme: 'github-dark',
      preload: ['ts', 'js', 'jsx', 'tsx', 'vue', 'python', 'sql'],
    },
  },

  // TypeScript
  typescript: {
    strict: true,
    typeCheck: false,
  },

  // Build Configuration
  build: {
    transpile: ['@headlessui/vue'],
  },

  // Runtime Config
  runtimeConfig: {
    openRouterApiKey: process.env.AI_KEY || '',
    openRouterModel: 'openai/gpt-4o-mini',
    public: {
      siteName: 'My Portfolio',
      siteUrl: 'https://myportfolio.com',
    },
  },

  // App Configuration
  app: {
    layoutTransition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'opacity-0 translate-x-full',
      enterToClass: 'opacity-100 translate-x-0',
      leaveActiveClass: 'transition duration-300 ease-in',
      leaveFromClass: 'opacity-100 translate-x-0',
      leaveToClass: 'opacity-0 -translate-x-full',
    },
    pageTransition: {
      enterActiveClass: 'transition duration-300 ease-out',
      enterFromClass: 'opacity-0',
      enterToClass: 'opacity-100',
      leaveActiveClass: 'transition duration-300 ease-in',
      leaveFromClass: 'opacity-100',
      leaveToClass: 'opacity-0',
    },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Creative portfolio of a software engineer' },
      ],
    },
  },

  // Nitro Configuration (Server)
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  // Experimental Features
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
  },
});
