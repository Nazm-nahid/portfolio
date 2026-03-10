export const useSmoothScroll = () => {
  const scrollToElement = (selector: string) => {
    if (process.server) return;
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    if (process.server) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isScrollingDown = ref(false);
  const lastScrollTop = ref(0);

  const handleScroll = () => {
    if (process.server) return;
    const currentScroll = window.scrollY;
    isScrollingDown.value = currentScroll > lastScrollTop.value;
    lastScrollTop.value = currentScroll;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    scrollToElement,
    scrollToTop,
    isScrollingDown,
  };
};
