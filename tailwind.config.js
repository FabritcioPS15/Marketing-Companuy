/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        info: 'rgb(var(--color-info) / <alpha-value>)',
        purple: 'rgb(var(--color-purple) / <alpha-value>)',
        pink: 'rgb(var(--color-pink) / <alpha-value>)',
        indigo: 'rgb(var(--color-indigo) / <alpha-value>)',
        teal: 'rgb(var(--color-teal) / <alpha-value>)',
        emerald: 'rgb(var(--color-emerald) / <alpha-value>)',
        rose: 'rgb(var(--color-rose) / <alpha-value>)',
        amber: 'rgb(var(--color-amber) / <alpha-value>)',
        'light-bg': 'rgb(var(--color-light-bg) / <alpha-value>)',
        'light-bg-secondary': 'rgb(var(--color-light-bg-secondary) / <alpha-value>)',
        'light-text': 'rgb(var(--color-light-text) / <alpha-value>)',
        'light-text-secondary': 'rgb(var(--color-light-text-secondary) / <alpha-value>)',
        'dark-bg': 'rgb(var(--color-dark-bg) / <alpha-value>)',
        'dark-bg-secondary': 'rgb(var(--color-dark-bg-secondary) / <alpha-value>)',
        'dark-text': 'rgb(var(--color-dark-text) / <alpha-value>)',
        'dark-text-secondary': 'rgb(var(--color-dark-text-secondary) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-delay-more': 'float 6s ease-in-out 4s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-5px, 5px)' },
          '40%': { transform: 'translate(-5px, -5px)' },
          '60%': { transform: 'translate(5px, 5px)' },
          '80%': { transform: 'translate(5px, -5px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
    },
  },
  plugins: [],
};