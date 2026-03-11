<template>
  <footer class="border-t border-dark-border bg-dark-card/50 mt-auto">
    <div class="container py-12 md:py-16">

      <!-- Divider -->
      <div class="border-t border-dark-border pt-8">
        <!-- Bottom Section -->
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-dark-text text-sm">
            &copy; {{ new Date().getFullYear() }} Nazmul Hossain Nahid. All rights reserved.
          </p>

          <!-- Back to Top Button -->
          <button
            @click="scrollToTop"
            class="px-4 py-2 rounded-lg bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-dark-bg transition-all duration-200 text-sm font-medium"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useSmoothScroll } from '~/composables/useSmoothScroll';
import { SOCIAL_LINKS } from '~/utils/constants';

const { scrollToTop } = useSmoothScroll();
</script>
