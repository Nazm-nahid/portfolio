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
              <p class="text-primary text-lg mb-2 font-mono">Software Engineer | Competitive Programmer</p>
              <h1 class="text-4xl font-bold text-white leading-tight">
                Hi, I'm MD. Nazmul Hossain Nahid
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
                  <span class="text-secondary">></span> Built OTP verification tooling that made operations 4x faster
                </p>
                <p class="text-lg text-dark-text font-mono mt-2">
                  <span class="text-accent">></span> Reduced parcel loss by ~80% with fraud-aware workflow redesign
                </p>
                <p class="text-lg text-dark-text font-mono mt-2">
                  <span class="text-primary">></span> Solved 1300+ DSA problems across online judges
                </p>
              </div>
            </div>

            <p class="text-xl text-dark-text max-w-xl">
              Software Engineer at Pathao, building secure and scalable products across verification,
              feedback, pickup, authentication, and payment systems.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                class="px-8 py-4 rounded-lg bg-primary text-dark-bg font-bold hover:bg-primary-light hover:shadow-neon-cyan transition-all duration-200 inline-block text-center"
              >
                Hire Me
              </a>
                <a
                href="https://drive.google.com/file/d/1lwhqwFtQsmNLnWtms1uoRXenCPhNVb19/view"
                target="_blank"
                rel="noopener noreferrer"
                class="px-8 py-4 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-dark-bg transition-all duration-200 inline-block text-center font-bold"
                >
                View Resume
                </a>
            </div>

            <!-- Social Links -->
            <div class="flex gap-4 pt-4">
              <a
                href="https://github.com/Nazm-nahid"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 flex items-center justify-center rounded-lg bg-dark-card border border-primary text-primary hover:bg-primary hover:text-dark-bg transition-all duration-200"
                title="GitHub"
              >
                <span class="text-xl font-bold">⚙</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nazm-nahid"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 flex items-center justify-center rounded-lg bg-dark-card border border-primary text-primary hover:bg-primary hover:text-dark-bg transition-all duration-200"
                title="LinkedIn"
              >
                <span class="text-xl font-bold">in</span>
              </a>
              <a
                href="mailto:nazm.nahid@gmail.com"
                class="w-12 h-12 flex items-center justify-center rounded-lg bg-dark-card border border-primary text-primary hover:bg-primary hover:text-dark-bg transition-all duration-200"
                title="Email"
              >
                <span class="text-xl font-bold">✉</span>
              </a>
            </div>
          </div>

          <!-- Right Content - Animated Card & Chat -->
          <div class="hidden md:flex justify-center items-center flex-col gap-6">
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

            <!-- ChatBot Component -->
            <ChatBot />
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
            <div class="text-4xl font-bold text-primary mb-2">1300+</div>
            <p class="text-dark-text">DSA Problems Solved</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-secondary mb-2">80%</div>
            <p class="text-dark-text">Parcel Loss Reduced</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-accent mb-2">4x</div>
            <p class="text-dark-text">Faster Verification Ops</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">121st</div>
            <p class="text-dark-text">ICPC Dhaka Regional 2023</p>
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
              I'm a Software Engineer currently working at Pathao, one of the leading ride-sharing,
              courier, food delivery, and fintech companies in Bangladesh and Nepal.
            </p>
            <p class="text-dark-text leading-relaxed">
              I design and deliver secure, scalable systems focused on real operational impact,
              including verification, feedback, authentication, and payment workflows.
            </p>
            <p class="text-dark-text leading-relaxed">
              Beyond product engineering, I am an active competitive programmer with strong
              problem-solving fundamentals and proven contest performance.
            </p>
          </div>

          <!-- Right Content - Skills -->
          <div class="space-y-6">
            <h2 class="text-4xl font-bold text-white">Skills & Technologies</h2>

            <div class="space-y-6">
              <div v-for="(group, index) in skillGroups" :key="group.title">
                <h3 class="text-lg font-bold mb-3" :class="index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-secondary' : 'text-accent'">
                  {{ group.title }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in group.items"
                    :key="skill"
                    class="px-3 py-1 rounded-full bg-primary/20 border border-primary text-primary text-sm"
                  >
                    {{ skill }}
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
          <div v-for="(item, index) in careerTimeline" :key="item.title" class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-4 h-4 rounded-full bg-primary"></div>
              <div v-if="index !== careerTimeline.length - 1" class="w-0.5 h-32 bg-primary/30"></div>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-white">{{ item.title }}</h3>
              <p class="text-primary font-mono text-sm">{{ item.period }}</p>
              <p class="text-dark-text mt-2">
                {{ item.description }}
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
          <div
            v-for="project in projects"
            :key="project.title"
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
              <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
              <p class="text-dark-text text-sm mb-4">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.techs"
                  :key="tech"
                  class="px-2 py-1 rounded text-xs bg-primary/20 text-primary font-mono"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements Section -->
    <section id="blog" class="section border-t border-dark-border">
      <div class="container max-w-4xl">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">Programming Contests & Achievements</h2>
        <div class="space-y-8">
          <div
            v-for="achievement in achievements"
            :key="achievement"
            class="group rounded-xl bg-dark-card border border-dark-border p-6 hover:border-primary hover:shadow-neon-cyan transition-all duration-300"
          >
            <div class="flex flex-col md:flex-row gap-6">
              <div class="md:w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 flex items-center justify-center">
                <span class="text-2xl text-primary opacity-70">🏆</span>
              </div>

              <div class="flex-1 space-y-3">
                <p class="text-lg text-white group-hover:text-primary transition-colors">{{ achievement }}</p>
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
          <div class="text-center space-y-4">
            <div class="w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center mx-auto text-3xl">
              ✉
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2">Email</h3>
              <a href="mailto:nazm.nahid@gmail.com" class="text-primary hover:text-primary-light transition-colors">
                nazm.nahid@gmail.com
              </a>
            </div>
          </div>

          <div class="text-center space-y-4">
            <div class="w-16 h-16 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center mx-auto text-3xl">
              ☎
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2">Phone</h3>
              <a href="tel:+8801404343933" class="text-secondary hover:text-secondary-light transition-colors">
                (+880) 1404343933
              </a>
            </div>
          </div>

          <div class="text-center space-y-4">
            <div class="w-16 h-16 rounded-full bg-accent/20 border border-accent flex items-center justify-center mx-auto text-3xl">
              🔗
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/nazm-nahid" target="_blank" rel="noopener noreferrer" class="text-accent hover:text-accent-light transition-colors">
                Connect with me
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

useHead({
  title: 'MD. Nazmul Hossain Nahid | Software Engineer',
});

const expertiseSkills = [
  'AI Expertise',
  'AI Development',
  'Full-Stack Development',
  'Cloud Architecture',
  'Competitive Programming',
];

const skillGroups = [
  {
    title: 'Languages',
    items: ['C', 'C++', 'Java', 'PHP', 'JavaScript', 'Python'],
  },
  {
    title: 'Frameworks',
    items: ['Spring Boot', 'Laravel', 'Golang', 'Vue.js', 'Nuxt.js'],
  },
  {
    title: 'Web',
    items: ['HTML', 'CSS', 'jQuery', 'Ajax', 'TailwindCSS'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Docker', 'CI/CD'],
  },
];

const careerTimeline = [
  {
    title: 'Junior Software Engineer (Part-time), BYDO Academy',
    period: 'Sept 2021 – Sept 2022',
    description:
      'Built and maintained scalable user and content management systems for an education-focused social platform.',
  },
  {
    title: 'B.Sc. in CSE, RUET',
    period: 'Graduation: 2024 | CGPA: 3.49',
    description:
      'Completed Computer Science and Engineering with strong focus on software engineering fundamentals and problem solving.',
  },
  {
    title: 'Software Engineer I, Pathao',
    period: 'June 2024 – Present',
    description:
      'Delivered OTP bypass verification tooling, cohort-based feedback platform (Jorip), and secure workflow improvements reducing fraud and parcel loss.',
  },
];

const projects = [
  {
    title: 'Jorip — Feedback Collection Platform',
    description:
      'Built a cohort-based feedback platform with webhooks, dynamic configuration, and iframe integration to reduce customer churn through data-driven insights.',
    techs: ['Golang', 'Nuxt.js', 'PostgreSQL', 'CI/CD', 'Consul', 'Viper'],
  },
  {
    title: 'RUET CSE Alumni Platform',
    description:
      'Architected backend for directory, forum, job portal, events, and admin workflows with secure REST APIs and JWT-based authentication.',
    techs: ['Spring Boot', 'MySQL', 'REST API', 'JWT', 'OTP Email'],
  },
  {
    title: 'KhujeDei — Lost & Found Platform',
    description:
      'Built an intelligent platform with AI-based face recognition and Messenger chatbot automation, including admin dashboard and case management.',
    techs: ['Spring Boot', 'MySQL', 'REST API', 'JWT', 'AI Face Recognition'],
  },
];

const achievements = [
  'Solved 1300+ DSA problems across online judges.',
  'ICPC Dhaka Regional 2023 — 121st place.',
  'RUET Codesmash 2019 — 5th place among 200 participants.',
  'Problem Setter — Code to Save a Mother, RUET Codesmash 2020.',
  'Codeforces Specialist (Max Rating: 1584), Best Rank: 365th.',
  'CodeChef (Max Rating: 1855), Best Rank: 159th worldwide.',
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
