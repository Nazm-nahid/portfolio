<template>
  <div>
    <!-- Page Header -->
    <div class="min-h-72 flex items-center justify-center border-b border-dark-border">
      <div class="container text-center space-y-4">
        <h1 class="text-5xl md:text-6xl font-bold text-white">My Projects</h1>
        <p class="text-xl text-dark-text max-w-2xl mx-auto">
          Explore the projects I've built and the solutions I've created
        </p>
      </div>
    </div>

    <!-- Projects Grid -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Sample Project Cards -->
          <div
            v-for="i in 6"
            :key="i"
            class="group rounded-xl bg-dark-card border border-dark-border overflow-hidden hover:border-primary hover:shadow-neon-cyan transition-all duration-300"
          >
            <div class="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-6xl text-primary opacity-50">&lt;&gt;</span>
              </div>
              <div
                class="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>

            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-2">Project {{ i }}</h3>
              <p class="text-dark-text text-sm mb-4">
                A brief description of this amazing project I built using modern technologies and best practices.
              </p>

              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 rounded text-xs bg-primary/20 text-primary font-mono">
                  Vue.js
                </span>
                <span class="px-2 py-1 rounded text-xs bg-secondary/20 text-secondary font-mono">
                  Nuxt
                </span>
              </div>

              <div class="flex gap-4">
                <a
                  href="#"
                  class="flex-1 px-4 py-2 rounded-lg bg-primary/20 text-primary text-sm font-bold hover:bg-primary hover:text-dark-bg transition-all duration-200 text-center"
                >
                  View
                </a>
                <a
                  href="#"
                  class="flex-1 px-4 py-2 rounded-lg border border-primary text-primary text-sm font-bold hover:bg-primary hover:text-dark-bg transition-all duration-200 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Projects - My Portfolio',
});
</script>
