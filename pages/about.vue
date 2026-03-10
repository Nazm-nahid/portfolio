<template>
  <div>
    <!-- Page Header -->
    <div class="min-h-72 flex items-center justify-center border-b border-dark-border">
      <div class="container text-center space-y-4">
        <h1 class="text-5xl md:text-6xl font-bold text-white">About Me</h1>
        <p class="text-xl text-dark-text max-w-2xl mx-auto">
          Get to know me, my journey, and what drives my passion for creating exceptional digital
          products
        </p>
      </div>
    </div>

    <!-- About Content -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Left Content -->
          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-white">Who Am I?</h2>
            <p class="text-dark-text leading-relaxed">
              I'm a passionate software engineer with a love for creating beautiful, functional
              digital experiences. With over 5 years of experience in web development, I've worked
              on diverse projects ranging from startup MVPs to large-scale enterprise applications.
            </p>
            <p class="text-dark-text leading-relaxed">
              My journey in tech started with a curiosity about how things work. Today, I combine
              that curiosity with modern web technologies to solve real-world problems and build
              products that make a difference.
            </p>
            <p class="text-dark-text leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, writing about web
              development, or contributing to open-source projects.
            </p>
          </div>

          <!-- Right Content - Skills -->
          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-white">Skills & Technologies</h2>

            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-bold text-primary mb-3">Frontend</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 rounded-full bg-primary/20 border border-primary text-primary text-sm">
                    Vue.js
                  </span>
                  <span class="px-3 py-1 rounded-full bg-primary/20 border border-primary text-primary text-sm">
                    Nuxt.js
                  </span>
                  <span class="px-3 py-1 rounded-full bg-primary/20 border border-primary text-primary text-sm">
                    React
                  </span>
                  <span class="px-3 py-1 rounded-full bg-primary/20 border border-primary text-primary text-sm">
                    HTML & CSS
                  </span>
                  <span class="px-3 py-1 rounded-full bg-primary/20 border border-primary text-primary text-sm">
                    TypeScript
                  </span>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-bold text-secondary mb-3">Backend</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 rounded-full bg-secondary/20 border border-secondary text-secondary text-sm">
                    Node.js
                  </span>
                  <span class="px-3 py-1 rounded-full bg-secondary/20 border border-secondary text-secondary text-sm">
                    Express
                  </span>
                  <span class="px-3 py-1 rounded-full bg-secondary/20 border border-secondary text-secondary text-sm">
                    MongoDB
                  </span>
                  <span class="px-3 py-1 rounded-full bg-secondary/20 border border-secondary text-secondary text-sm">
                    PostgreSQL
                  </span>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-bold text-accent mb-3">Tools & Others</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 rounded-full bg-accent/20 border border-accent text-accent text-sm">
                    Git
                  </span>
                  <span class="px-3 py-1 rounded-full bg-accent/20 border border-accent text-accent text-sm">
                    Docker
                  </span>
                  <span class="px-3 py-1 rounded-full bg-accent/20 border border-accent text-accent text-sm">
                    AWS
                  </span>
                  <span class="px-3 py-1 rounded-full bg-accent/20 border border-accent text-accent text-sm">
                    CI/CD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="section border-t border-dark-border">
      <div class="container">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">My Journey</h2>

        <div class="max-w-4xl mx-auto space-y-8">
          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-4 h-4 rounded-full bg-primary"></div>
              <div class="w-0.5 h-32 bg-primary/30"></div>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-white">Started My Journey</h3>
              <p class="text-primary font-mono text-sm">2019</p>
              <p class="text-dark-text mt-2">
                Began my career as a frontend developer, focusing on learning modern web technologies.
              </p>
            </div>
          </div>

          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-4 h-4 rounded-full bg-primary"></div>
              <div class="w-0.5 h-32 bg-primary/30"></div>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-white">Full-Stack Development</h3>
              <p class="text-primary font-mono text-sm">2020</p>
              <p class="text-dark-text mt-2">
                Expanded my skill set to include backend development and became a full-stack engineer.
              </p>
            </div>
          </div>

          <div class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-4 h-4 rounded-full bg-primary"></div>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-white">Today</h3>
              <p class="text-primary font-mono text-sm">2024+</p>
              <p class="text-dark-text mt-2">
                Specializing in building scalable applications and mentoring junior developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About - My Portfolio',
});
</script>
