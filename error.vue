<template>
  <div class="min-h-screen flex items-center justify-center px-4">
    <div class="text-center max-w-2xl">
      <div class="mb-8">
        <h1 class="text-8xl md:text-9xl font-bold text-primary mb-4 neon-glow">
          {{ error.statusCode || '500' }}
        </h1>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          {{ error.statusMessage || 'Something went wrong' }}
        </h2>
      </div>

      <p class="text-dark-text mb-8 text-lg">
        {{
          error.statusCode === 404
            ? "The page you're looking for doesn't exist."
            : "An unexpected error occurred. Please try again later."
        }}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/"
          class="px-8 py-3 rounded-lg bg-primary text-dark-bg font-bold hover:bg-primary-light transition-all duration-200 glow-effect"
        >
          Back to Home
        </NuxtLink>
        <button
          @click="handleError"
          class="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-dark-bg transition-all duration-200"
        >
          Try Again
        </button>
      </div>

      <!-- Decorative Elements -->
      <div class="mt-16 space-y-4 opacity-50">
        <div class="h-1 w-20 bg-primary mx-auto"></div>
        <div class="h-1 w-14 bg-secondary mx-auto"></div>
        <div class="h-1 w-10 bg-accent mx-auto"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object,
});

const handleError = () => {
  clearError({ redirect: '/' });
};
</script>

<style scoped>
/* Error page styling */
</style>
