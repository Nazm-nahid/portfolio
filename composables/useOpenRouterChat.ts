import { ref } from 'vue';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const messages = ref<ChatMessage[]>([]);
const isLoading = ref(false);
const status = ref('Ready');
const errorMessage = ref('');
const language = ref<'en' | 'bn'>('en');

const generateId = () => `msg-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

const addMessage = (role: 'user' | 'assistant', content: string) => {
  messages.value.push({
    id: generateId(),
    role,
    content,
    timestamp: new Date(),
  });
};

const initialize = async () => {
  if (messages.value.length === 0) {
    addMessage(
      'assistant',
      'Hi! Tell me about the project you want to build, and I will help turn it into clear requirements.'
    );
  }
};

const sendMessage = async (userInput: string) => {
  const text = userInput.trim();
  if (!text) return;

  addMessage('user', text);
  isLoading.value = true;
  status.value = 'Thinking...';
  errorMessage.value = '';

  try {
    const conversation = messages.value
      .filter((message) => message.role === 'user' || message.role === 'assistant')
      .slice(-12)
      .map((message) => ({
        role: message.role,
        content: message.content,
      }));

    const response = await $fetch<{ content: string; model: string }>('/api/chat', {
      method: 'POST',
      body: {
        messages: conversation,
        language: language.value,
      },
    });

    addMessage('assistant', response.content);
    status.value = `Ready · ${response.model}`;
  } catch (error) {
    errorMessage.value = 'OpenRouter chat failed. Check server config and try again.';
    addMessage('assistant', 'I could not reach the AI service. Please try again in a moment.');
    status.value = 'Unavailable';
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const setLanguage = (lang: 'en' | 'bn') => {
  language.value = lang;
};

const clearMessages = () => {
  messages.value = [];
  status.value = 'Ready';
  errorMessage.value = '';
};

export function useOpenRouterChat() {
  return {
    messages,
    isLoading,
    status,
    errorMessage,
    language,
    initialize,
    sendMessage,
    setLanguage,
    clearMessages,
  };
}
