<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <!-- Background Animation -->
      <div class="absolute inset-0 grid-pattern opacity-30"></div>

      <div class="container relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-6 fade-in">
            <div>
              <p class="text-primary text-lg mb-2 font-mono">Welcome to my universe</p>
              <h1 class="text-4xl font-bold text-white leading-tight">
                Hi, I'm Nahid
              </h1>
              <div class="space-y-4">
                <h1 class="h-16 text-2xl font-bold text-white leading-tight neon-glow p-4 rounded-lg">
                  I've expertise in
                  <span class="text-primary inline-block min-w-[18ch] border-primary ml-1">
                    {{ typedSkill }}
                  </span>
                </h1>
              </div>
                    <div class="mt-4 h-20">
                      <p class="text-lg text-dark-text font-mono">
                      <span class="text-secondary">></span> Building scalable systems with Node.js & Python
                      </p>
                      <p class="text-lg text-dark-text font-mono mt-2">
                      <span class="text-accent">></span> Crafting AI solutions that matter
                      </p>
                      <p class="text-lg text-dark-text font-mono mt-2">
                      <span class="text-primary">></span> Writing code with passion and clean vibes
                      </p>
                    </div>
            </div>

            <p class="text-xl text-dark-text max-w-xl">
              I craft beautiful, performant digital experiences using modern web technologies. Let's
              build something amazing together.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                class="px-8 py-4 rounded-lg bg-primary text-dark-bg font-bold hover:bg-primary-light hover:shadow-neon-cyan transition-all duration-200 inline-block text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                class="px-8 py-4 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-dark-bg transition-all duration-200 inline-block text-center font-bold"
              >
                Get in Touch
              </a>
            </div>

            <!-- Social Links -->
            <div class="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 flex items-center justify-center rounded-lg bg-dark-card border border-primary text-primary hover:bg-primary hover:text-dark-bg transition-all duration-200"
                title="GitHub"
              >
                <span class="text-xl font-bold">⚙</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 flex items-center justify-center rounded-lg bg-dark-card border border-primary text-primary hover:bg-primary hover:text-dark-bg transition-all duration-200"
                title="LinkedIn"
              >
                <span class="text-xl font-bold">in</span>
              </a>
              <a
                href="mailto:your.email@example.com"
                class="w-12 h-12 flex items-center justify-center rounded-lg bg-dark-card border border-primary text-primary hover:bg-primary hover:text-dark-bg transition-all duration-200"
                title="Email"
              >
                <span class="text-xl font-bold">✉</span>
              </a>
            </div>
          </div>

          <!-- Right Content - Animated Card -->
          <div class="hidden md:flex justify-center items-center">
            <div class="relative">
              <div
                class="w-64 h-80 md:w-80 md:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/50 shadow-neon-cyan flex flex-col justify-end float"
              >
                <img
                  src="~/assets/pictures/profile-photo.png"
                  alt="Profile photo"
                  class="w-full h-full object-cover rounded-2xl"
                >
              </div>

              <!-- Animated Circles -->
              <div
                class="absolute w-40 h-40 rounded-full border border-secondary/30 -top-10 -right-10 animate-pulse"
              ></div>
              <div
                class="absolute w-32 h-32 rounded-full border border-accent/30 -bottom-5 -left-10 animate-pulse"
              ></div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- Quick Stats Section -->
    <section class="py-20 border-t border-dark-border">
      <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">50+</div>
            <p class="text-dark-text">Projects Completed</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-secondary mb-2">30+</div>
            <p class="text-dark-text">Happy Clients</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-accent mb-2">5+</div>
            <p class="text-dark-text">Years Experience</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">100%</div>
            <p class="text-dark-text">Dedication</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section border-t border-dark-border">
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

    <!-- Projects Section -->
    <section id="projects" class="section border-t border-dark-border">
      <div class="container">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">My Projects</h2>
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

    <!-- Blog Section -->
    <section id="blog" class="section border-t border-dark-border">
      <div class="container max-w-4xl">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">Latest Blog Posts</h2>
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

                <a
                  href="#"
                  class="inline-block mt-4 px-6 py-2 rounded-lg bg-primary/20 text-primary font-bold hover:bg-primary hover:text-dark-bg transition-all duration-200"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section border-t border-dark-border">
      <div class="container max-w-4xl">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <!-- Contact Info Cards -->
          <div class="text-center space-y-4">
            <div class="w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center mx-auto text-3xl">
              ✉
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2">Email</h3>
              <a href="mailto:your.email@example.com" class="text-primary hover:text-primary-light transition-colors">
                your.email@example.com
              </a>
            </div>
          </div>

          <div class="text-center space-y-4">
            <div class="w-16 h-16 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center mx-auto text-3xl">
              🔗
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2">LinkedIn</h3>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-secondary hover:text-secondary-light transition-colors">
                Connect with me
              </a>
            </div>
          </div>

          <div class="text-center space-y-4">
            <div class="w-16 h-16 rounded-full bg-accent/20 border border-accent flex items-center justify-center mx-auto text-3xl">
              ⚙
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2">GitHub</h3>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-accent hover:text-accent-light transition-colors">
                Check my work
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="max-w-2xl mx-auto rounded-xl bg-dark-card border border-dark-border p-8">
          <h2 class="text-3xl font-bold text-white mb-6">Send Me a Message</h2>

          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-medium text-white mb-2">
                Full Name
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-white placeholder-dark-text focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-white placeholder-dark-text focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <!-- Subject Field -->
            <div>
              <label for="subject" class="block text-sm font-medium text-white mb-2">
                Subject
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-white placeholder-dark-text focus:outline-none focus:border-primary transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <!-- Message Field -->
            <div>
              <label for="message" class="block text-sm font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-white placeholder-dark-text focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <!-- Status Messages -->
            <div v-if="statusMessage" :class="[
              'p-4 rounded-lg',
              isSuccess ? 'bg-accent/20 border border-accent text-accent' : 'bg-red/20 border border-red text-red'
            ]">
              {{ statusMessage }}
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full px-6 py-3 rounded-lg bg-primary text-dark-bg font-bold hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {{ isLoading ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { formatDate } from '~/utils/helpers';

useHead({
  title: 'My Portfolio',
});

const expertiseSkills = [
  'Full-Stack Development',
  'Web Design',
  'AI Solutions',
  'AI Expertise',
  'Cloud Architecture',
];

const typedSkill = ref('');
let typingTimeout: ReturnType<typeof setTimeout> | null = null;
let currentSkillIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let stablePrefixLength = 0;

const getCommonPrefixLength = (a: string, b: string) => {
  const maxLength = Math.min(a.length, b.length);
  let i = 0;
  while (i < maxLength && a[i] === b[i]) {
    i += 1;
  }
  return i;
};

const scheduleTyping = (delay: number) => {
  typingTimeout = setTimeout(typeSkill, delay);
};

const typeSkill = () => {
  const currentSkill = expertiseSkills[currentSkillIndex];
  const nextSkill = expertiseSkills[(currentSkillIndex + 1) % expertiseSkills.length];

  if (!isDeleting) {
    currentCharIndex += 1;
    typedSkill.value = currentSkill.slice(0, currentCharIndex);

    if (currentCharIndex >= currentSkill.length) {
      stablePrefixLength = getCommonPrefixLength(currentSkill, nextSkill);
      isDeleting = true;
      scheduleTyping(1200);
      return;
    }

    scheduleTyping(90);
    return;
  }

  if (currentCharIndex <= stablePrefixLength) {
    isDeleting = false;
    currentSkillIndex = (currentSkillIndex + 1) % expertiseSkills.length;
    scheduleTyping(250);
    return;
  }

  currentCharIndex -= 1;
  typedSkill.value = currentSkill.slice(0, currentCharIndex);

  scheduleTyping(45);
};

onMounted(() => {
  scheduleTyping(300);
});

onBeforeUnmount(() => {
  if (typingTimeout) {
    clearTimeout(typingTimeout);
  }
});

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const isLoading = ref(false);
const statusMessage = ref('');
const isSuccess = ref(false);

const submitForm = async () => {
  isLoading.value = true;
  statusMessage.value = '';

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Success message
    statusMessage.value = 'Thank you! Your message has been sent successfully.';
    isSuccess.value = true;

    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };

    // Clear message after 5 seconds
    setTimeout(() => {
      statusMessage.value = '';
    }, 5000);
  } catch (error) {
    statusMessage.value = 'Oops! Something went wrong. Please try again.';
    isSuccess.value = false;
  } finally {
    isLoading.value = false;
  }
};
</script>
