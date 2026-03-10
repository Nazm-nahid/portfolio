<template>
  <div>
    <!-- Page Header -->
    <div class="min-h-72 flex items-center justify-center border-b border-dark-border">
      <div class="container text-center space-y-4">
        <h1 class="text-5xl md:text-6xl font-bold text-white">Blog</h1>
        <p class="text-xl text-dark-text max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development
        </p>
      </div>
    </div>

    <!-- Blog Posts -->
    <section class="section">
      <div class="container max-w-4xl">
        <div class="space-y-8">
          <!-- Sample Blog Card -->
          <div v-for="i in 5" :key="i" class="group rounded-xl bg-dark-card border border-dark-border p-6 hover:border-primary hover:shadow-neon-cyan transition-all duration-300">
            <div class="flex flex-col md:flex-row gap-6">
              <!-- Image Placeholder -->
              <div class="md:w-48 h-40 md:h-32 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 flex items-center justify-center">
                <span class="text-4xl text-primary opacity-50">📄</span>
              </div>

              <!-- Content -->
              <div class="flex-1 space-y-3">
                <h2 class="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  Blog Post {{ i }}: Getting Started with Web Development
                </h2>

                <p class="text-dark-text line-clamp-2">
                  Learn the fundamentals of modern web development and best practices for building scalable applications.
                </p>

                <div class="flex items-center gap-4 text-sm text-dark-text font-mono">
                  <span>{{ formatDate(new Date()) }}</span>
                  <span>{{ Math.ceil(Math.random() * 10) + 5 }} min read</span>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="px-2 py-1 rounded text-xs bg-primary/20 text-primary">
                    Tutorial
                  </span>
                  <span class="px-2 py-1 rounded text-xs bg-secondary/20 text-secondary">
                    Web Dev
                  </span>
                </div>

                <NuxtLink
                  :to="`/blog/post-${i}`"
                  class="inline-block mt-4 px-6 py-2 rounded-lg bg-primary/20 text-primary font-bold hover:bg-primary hover:text-dark-bg transition-all duration-200"
                >
                  Read More →
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '~/utils/helpers';

useHead({
  title: 'Blog - My Portfolio',
});
</script>
