<template>
  <div>
    <!-- Page Header -->
    <div class="min-h-72 flex items-center justify-center border-b border-dark-border">
      <div class="container text-center space-y-4">
        <h1 class="text-5xl md:text-6xl font-bold text-white">Get In Touch</h1>
        <p class="text-xl text-dark-text max-w-2xl mx-auto">
          Have a question or want to work together? I'd love to hear from you.
        </p>
      </div>
    </div>

    <!-- Contact Section -->
    <section class="section">
      <div class="container max-w-4xl">
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
useHead({
  title: 'Contact - My Portfolio',
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
