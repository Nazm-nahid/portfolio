<template>
  <div class="w-full max-w-md bg-dark-card border border-primary/30 rounded-xl shadow-lg overflow-hidden flex flex-col h-96">
    <!-- Header -->
    <div class="bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-primary/30 p-4 flex items-center justify-between">
      <div>
        <h3 class="text-lg font-bold text-primary">Chat with my Bot</h3>
        <p class="text-xs text-dark-text">Ask anything about my work & skills</p>
      </div>
      <button
        @click="clearChat"
        class="p-2 hover:bg-dark-border rounded-lg transition-colors text-xs text-dark-text hover:text-primary"
        title="Clear chat"
      >
        ✕
      </button>
    </div>

    <!-- Messages -->
    <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 space-y-3 bg-dark-bg/50">
      <div
        v-if="messages.length === 0"
        class="flex items-center justify-center h-full text-center text-dark-text text-sm"
      >
        <div>
          <p class="text-primary font-mono mb-2">👋</p>
          <p>Hey! Ask me about my projects, skills, or experience</p>
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
          {{ msg.content }}
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
          placeholder="Ask me..."
          class="flex-1 px-3 py-2 rounded-lg bg-dark-border border border-primary/20 text-white placeholder-dark-text text-sm focus:outline-none focus:border-primary transition-colors"
          :disabled="isLoading"
        />
        <button
          type="submit"
          :disabled="isLoading || !inputText.trim()"
          class="px-4 py-2 rounded-lg bg-primary text-dark-bg font-bold text-sm hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import { usePortfolioLLM } from '~/composables/usePortfolioLLM';

const { messages, isLoading, sendMessage, clearMessages } = usePortfolioLLM();
const inputText = ref('');
const messagesContainer = ref<HTMLElement>();

const handleSend = async () => {
  if (!inputText.value.trim()) return;

  const userInput = inputText.value;
  inputText.value = '';

  await sendMessage(userInput);

  // Scroll to bottom
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const clearChat = () => {
  clearMessages();
  inputText.value = '';
};

// Scroll to bottom when messages change
onMounted(async () => {
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
</style>
