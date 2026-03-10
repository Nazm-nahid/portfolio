export const useDarkMode = () => {
  const isDark = useState<boolean>('isDark', () => {
    if (process.server) return true;
    return document.documentElement.classList.contains('dark');
  });

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    if (process.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  };

  const initializeDarkMode = () => {
    if (process.client) {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = stored ? stored === 'dark' : prefersDark;
      isDark.value = shouldBeDark;
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      }
    }
  };

  return {
    isDark,
    toggleDarkMode,
    initializeDarkMode,
  };
};
