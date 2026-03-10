<template>
  <footer class="border-t border-dark-border bg-dark-card/50 mt-auto">
    <div class="container py-12 md:py-16">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div>
          <h3 class="text-xl font-bold text-primary mb-4">Portfolio</h3>
          <p class="text-dark-text text-sm line-height">
            A creative software engineer building beautiful and functional digital products.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-bold text-white mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-dark-text hover:text-primary transition-colors">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-dark-text hover:text-primary transition-colors">
                About
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects" class="text-dark-text hover:text-primary transition-colors">
                Projects
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-dark-text hover:text-primary transition-colors">
                Blog
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="font-bold text-white mb-4">Resources</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/contact" class="text-dark-text hover:text-primary transition-colors">
                Contact
              </NuxtLink>
            </li>
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="text-dark-text hover:text-primary transition-colors"
              >
                Resume
              </a>
            </li>
            <li>
              <NuxtLink to="/privacy" class="text-dark-text hover:text-primary transition-colors">
                Privacy Policy
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h4 class="font-bold text-white mb-4">Follow</h4>
          <div class="flex gap-4">
            <a
              v-for="social in SOCIAL_LINKS"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center rounded-lg bg-dark-border hover:bg-primary hover:text-dark-bg transition-all duration-200 glow-effect text-sm font-bold"
              :title="social.name"
            >
              {{ social.icon.charAt(0).toUpperCase() }}
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-dark-border pt-8">
        <!-- Bottom Section -->
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-dark-text text-sm">
            &copy; {{ new Date().getFullYear() }} My Portfolio. All rights reserved.
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
