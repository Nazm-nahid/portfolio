<template>
  <!-- Fullscreen overlay -->
  <Teleport to="body">
    <div
      v-if="isFullscreen"
      class="fixed inset-0 z-50 bg-dark-bg/95 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div class="w-full max-w-3xl h-full max-h-screen flex flex-col bg-dark-card border border-primary/30 rounded-xl shadow-2xl overflow-hidden">
        <ChatInner :is-fullscreen="true" @toggle-fullscreen="isFullscreen = false" />
      </div>
    </div>
  </Teleport>

  <!-- Normal card -->
  <div
    v-if="!isFullscreen"
    class="w-full max-w-md bg-dark-card border border-primary/30 rounded-xl shadow-lg overflow-hidden flex flex-col h-96"
  >
    <!-- Header -->
    <div class="bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-primary/30 p-4">
      <div class="flex items-center justify-between mb-3">
        <div>
          <h3 class="text-lg font-bold text-primary">
            {{ language === 'en' ? 'Chat with Nahid\'s AI' : 'নাহিদের AI-এর সাথে চ্যাট করুন' }}
          </h3>
          <p class="text-xs text-dark-text">{{ language === 'en' ? 'You can ask anything about my work, skills, and also about the project you want me to work on' : 'আমার কাজ, দক্ষতা এবং আপনি যে প্রজেক্টে আমাকে দিয়ে কাজ করাতে চান সে সম্পর্কেও যেকোনো প্রশ্ন করতে পারেন।' }}</p>
        </div>
        <div class="flex gap-2">
        <button
          @click="setLanguage('en')"
          :class="[
            'px-3 py-1 rounded text-xs font-semibold transition-colors',
            language === 'en'
              ? 'bg-primary text-dark-bg'
              : 'bg-dark-border text-dark-text hover:border-primary',
          ]"
        >
          English
        </button>
        <button
          @click="setLanguage('bn')"
          :class="[
            'px-3 py-1 rounded text-xs font-semibold transition-colors',
            language === 'bn'
              ? 'bg-primary text-dark-bg'
              : 'bg-dark-border text-dark-text hover:border-primary',
          ]"
        >
          Bangla
        </button>
      </div>
      </div>
      <p v-if="errorMessage" class="text-red-400">{{ errorMessage }}</p>
    </div>

    <!-- Messages -->
    <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 space-y-3 bg-dark-bg/50">
      <div
        v-if="messages.length === 0"
        class="flex items-center justify-center h-full text-center text-dark-text text-sm"
      >
        <div>
          <p class="text-primary font-mono mb-2">👋</p>
          <p v-if="language === 'en'">Ask me anything about my experience, skills, or projects!</p>
          <p v-else>আমার অভিজ্ঞতা, দক্ষতা, বা প্রকল্প সম্পর্কে কিছু জিজ্ঞাসা করুন!</p>
        </div>
      </div>

      <div v-for="msg in messages" :key="msg.id" class="flex gap-3 animate-slideIn">
        <!-- Avatar -->
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
          :class="msg.role === 'user' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'"
        >
          {{ msg.role === 'user' ? '👤' : '🤖' }}
        </div>

        <!-- Message -->
        <div
          class="flex-1 rounded-lg p-3 text-sm"
          :class="
            msg.role === 'user'
              ? 'bg-secondary/20 text-white ml-2'
              : 'bg-primary/10 border border-primary/30 text-dark-text'
          "
          >
            <div v-if="msg.role === 'assistant'" class="prose prose-invert prose-sm max-w-none" v-html="renderMarkdown(msg.content)"></div>
            <div v-else>{{ msg.content }}</div>
          </div>
      </div>

      <!-- Loading indicator -->
      <div v-if="isLoading" class="flex gap-3 animate-slideIn">
        <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 bg-primary/20 text-primary">
          🤖
        </div>
        <div class="flex-1 rounded-lg p-3 bg-primary/10 border border-primary/30">
          <div class="flex gap-1">
            <div class="w-2 h-2 rounded-full bg-primary animate-bounce" style="animation-delay: 0s"></div>
            <div class="w-2 h-2 rounded-full bg-primary animate-bounce" style="animation-delay: 0.2s"></div>
            <div class="w-2 h-2 rounded-full bg-primary animate-bounce" style="animation-delay: 0.4s"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Input -->
    <div class="border-t border-primary/30 p-4 bg-dark-bg/50">
      <form @submit.prevent="handleSend" class="flex gap-2">
        <input
          v-model="inputText"
          type="text"
          :placeholder="language === 'en' ? 'Ask about my work, projects, or skills...' : 'আমার কাজ, প্রকল্প বা দক্ষতা সম্পর্কে জিজ্ঞাসা করুন...'"
          class="flex-1 px-3 py-2 rounded-lg bg-dark-border border border-primary/20 text-white placeholder-dark-text text-sm focus:outline-none focus:border-primary transition-colors"
          :disabled="isLoading"
        />
        <button
          type="submit"
          :disabled="isLoading || !inputText.trim()"
          class="px-4 py-2 rounded-lg bg-primary text-dark-bg font-bold text-sm hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {{ language === 'en' ? 'Send' : 'পাঠান' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import { useOpenRouterChat } from '~/composables/useOpenRouterChat';
import { marked } from 'marked';

const { messages, isLoading, errorMessage, language, initialize, sendMessage, setLanguage } = useOpenRouterChat();
const inputText = ref('');
const messagesContainer = ref<HTMLElement>();
const isFullscreen = ref(false);

const renderMarkdown = (content: string) => {
  return marked(content, {
    breaks: true,
    gfm: true,
  });
};

const handleSend = async () => {
  if (!inputText.value.trim()) return;

  const userInput = inputText.value;
  inputText.value = '';

  await sendMessage(userInput);

  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

onMounted(async () => {
  await initialize();

  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
});
</script>

<style scoped>
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideIn {
  animation: slideIn 0.3s ease-out;
}

:deep(.prose) {
  color: inherit;
}

:deep(.prose p) {
  margin: 0.5rem 0;
}

:deep(.prose ul, .prose ol) {
  margin: 0.5rem 0;
  padding-left: 1.25rem;
}

:deep(.prose li) {
  margin: 0.25rem 0;
}

:deep(.prose code) {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.875em;
}

:deep(.prose pre) {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0.75rem;
  border-radius: 0.375rem;
  overflow-x: auto;
  margin: 0.5rem 0;
}

:deep(.prose pre code) {
  background-color: transparent;
  padding: 0;
  color: #e0e0e0;
}

:deep(.prose strong) {
  color: #fbbf24;
  font-weight: 600;
}

:deep(.prose em) {
  color: #f87171;
}

:deep(.prose a) {
  color: #60a5fa;
  text-decoration: underline;
}
</style>
