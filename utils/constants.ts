// Color constants
export const COLORS = {
  primary: '#00F0FF',
  secondary: '#FF006E',
  accent: '#39FF14',
  neon: {
    cyan: '#00F0FF',
    pink: '#FF006E',
    green: '#39FF14',
    red: '#FF0000',
    purple: '#B537F2',
  },
  dark: {
    bg: '#0A0E27',
    card: '#0F1535',
    border: '#1A1F3A',
    text: '#8892B0',
  },
} as const;

// Breakpoints
export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Navigation links
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const;

// Social media
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/Nazm-nahid',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nazm-nahid',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:nazm.nahid@gmail.com',
    icon: 'mail',
  },
] as const;

// Animation timings
export const ANIMATION = {
  fast: 150,
  base: 300,
  slow: 500,
  slower: 700,
} as const;
