/** @type {import("tailwindcss").Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          100: 'rgb(var(--color-base-100) / <alpha-value>)',
          200: 'rgb(var(--color-base-200) / <alpha-value>)',
          300: 'rgb(var(--color-base-300) / <alpha-value>)',
          content: 'rgb(var(--color-base-content) / <alpha-value>)',
        },
        primary: {
          light: 'rgb(var(--color-primary) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          dark: 'rgb(var(--color-primary) / <alpha-value>)',
          content: 'rgb(var(--color-primary-content) / <alpha-value>)',
        },
        secondary: {
          light: 'rgb(var(--color-secondary) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          dark: 'rgb(var(--color-secondary) / <alpha-value>)',
          content: 'rgb(var(--color-secondary-content) / <alpha-value>)',
        },
        info: {
          light: 'rgb(var(--color-info) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-info) / <alpha-value>)',
          dark: 'rgb(var(--color-info) / <alpha-value>)',
          content: 'rgb(var(--color-info-content) / <alpha-value>)',
        },
        success: {
          light: 'rgb(var(--color-success) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-success) / <alpha-value>)',
          dark: 'rgb(var(--color-success) / <alpha-value>)',
          content: 'rgb(var(--color-success-content) / <alpha-value>)',
        },
        warning: {
          light: 'rgb(var(--color-warning) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-warning) / <alpha-value>)',
          dark: 'rgb(var(--color-warning) / <alpha-value>)',
          content: 'rgb(var(--color-warning-content) / <alpha-value>)',
        },
        error: {
          light: 'rgb(var(--color-error) / <alpha-value>)',
          DEFAULT: 'rgb(var(--color-error) / <alpha-value>)',
          dark: 'rgb(var(--color-error) / <alpha-value>)',
          content: 'rgb(var(--color-error-content) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
