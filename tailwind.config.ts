import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7f3',
          100: '#ffe8dc',
          200: '#ffc7b3',
          300: '#ff9e7a',
          400: '#ff7850',
          500: '#ff6b35',
          600: '#f04d18',
          700: '#c63a0d',
          800: '#9f3112',
          900: '#822d14',
          950: '#461308',
        },
        accent: {
          DEFAULT: '#FFD166',
          muted: '#FFF8E1',
          dark: '#B8860B',
        },
        hazard: {
          DEFAULT: '#EF476F',
          muted: '#FDDEE6',
          dark: '#A8173A',
        },
        safe: {
          DEFAULT: '#06D6A0',
          muted: '#D4F7EE',
          dark: '#048F6B',
        },
        info: {
          DEFAULT: '#118AB2',
          muted: '#D1EDF5',
          dark: '#0A5F7A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.2s ease-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
