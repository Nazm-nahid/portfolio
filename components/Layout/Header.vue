<template>
  <header
    class="sticky top-0 z-50 border-b border-dark-border bg-dark-bg/80 backdrop-blur-md transition-all duration-300"
  >
    <div class="container flex items-center justify-between py-4 md:py-6">
      <!-- Logo -->
      <a
        href="#home"
        class="text-2xl font-bold text-primary glow-effect hover:text-primary-light transition-all duration-200"
      >
        <span class="bg-primary/20 px-3 py-1 rounded-lg">Portfolio</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex gap-8">
        <a
          v-for="link in NAV_LINKS"
          :key="link.href"
          :href="link.href"
          class="text-dark-text hover:text-primary transition-colors duration-200 relative group"
        >
          {{ link.label }}
          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
          ></span>
        </a>
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center gap-4">
        <!-- Dark Mode Toggle -->
        <button
          @click="toggleDarkMode"
          class="p-2 rounded-lg hover:bg-dark-card transition-colors duration-200"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg
            v-if="isDark"
            class="w-5 h-5 text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
          <svg
            v-else
            class="w-5 h-5 text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-10.121l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414zM5.464 5.464a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zm7.071 7.071a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm-7.071 0a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-dark-card transition-colors duration-200"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <Transition name="slide-down">
      <nav v-if="isMobileMenuOpen" class="md:hidden border-t border-dark-border bg-dark-card/50">
        <div class="container py-4 space-y-2">
          <a
            v-for="link in NAV_LINKS"
            :key="link.href"
            :href="link.href"
            class="block px-4 py-2 text-dark-text hover:text-primary hover:bg-dark-border rounded-lg transition-all duration-200"
            @click="isMobileMenuOpen = false"
          >
            {{ link.label }}
          </a>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useDarkMode } from '~/composables/useDarkMode';
import { NAV_LINKS } from '~/utils/constants';

const isMobileMenuOpen = ref(false);
const { isDark, toggleDarkMode, initializeDarkMode } = useDarkMode();

onMounted(() => {
  initializeDarkMode();
});
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
