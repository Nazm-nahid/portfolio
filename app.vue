<template>
  <div class="min-h-screen flex flex-col bg-gradient-cyberpunk">
    <LayoutHeader />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';

useHead({
  title: 'My Portfolio - Software Engineer',
  meta: [
    {
      name: 'description',
      content: 'Creative Software Engineer - Building beautiful and functional digital products',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#00F0FF',
    },
  ],
});
</script>
