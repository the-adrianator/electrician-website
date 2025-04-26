/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#dce4f1',
          200: '#b9c9e3',
          300: '#96add5',
          400: '#7292c7',
          500: '#4f77b9',
          600: '#3f5f94',
          700: '#334d7a',
          800: '#293c61',
          900: '#0F172A',
        },
        yellow: {
          400: '#FACC15',
          500: '#EAB308',
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
};