export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00F0FF',
          dark: '#00A8B8',
          light: '#33F8FF',
        },
        secondary: {
          DEFAULT: '#FF006E',
          dark: '#CC0058',
          light: '#FF1A7F',
        },
        accent: {
          DEFAULT: '#39FF14',
          dark: '#2CD910',
          light: '#52FF31',
        },
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
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.1) 1px, transparent 1px)",
        'gradient-cyberpunk': 'linear-gradient(135deg, #0A0E27 0%, #1A1F3A 50%, #0F1535 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.5)',
        'neon-green': '0 0 20px rgba(57, 255, 20, 0.5)',
        'glow': '0 0 30px rgba(0, 240, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 240, 255, 0.4)',
      },
      textShadow: {
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.8)',
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'typewriter': 'typewriter 3.5s steps(40, end)',
        'flicker': 'flicker 0.15s infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            'text-shadow': '0 0 10px rgba(0, 240, 255, 0.5)',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
          },
          '50%': {
            'text-shadow': '0 0 20px rgba(0, 240, 255, 1)',
            boxShadow: '0 0 40px rgba(0, 240, 255, 0.8)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slide-in': {
          from: { transform: 'translateX(-100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            'text-shadow': '0 0 10px rgba(0, 240, 255, 0.8)',
            color: '#00F0FF',
          },
          '20%, 24%, 55%': {
            'text-shadow': 'none',
            color: 'rgba(0, 240, 255, 0.3)',
          },
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        'display': '4.5rem',
        'hero': '3.5rem',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }: { matchUtilities: any; theme: any }) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    },
  ],
  darkMode: 'class',
};
