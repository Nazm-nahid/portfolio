<template>
  <div class="min-h-screen bg-dark-bg px-4 py-8 flex items-center justify-center">
    <ChatBot
      :disable-auto-open="true"
      :initial-question="initialQuestion"
      :initial-language="initialLanguage"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const route = useRoute();

const initialQuestion = computed(() => {
  const value = route.query.question;
  return typeof value === 'string' ? value : '';
});

const initialLanguage = computed<'en' | 'bn' | undefined>(() => {
  const value = route.query.lang;
  if (value === 'bn' || value === 'en') {
    return value;
  }

  return undefined;
});
</script>
