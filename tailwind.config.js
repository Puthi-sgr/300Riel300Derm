/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eco': {
          50: '#f2f7f2',
          100: '#e6efe6',
          200: '#bfd6bf',
          300: '#99bd99',
          400: '#4d8b4d',
          500: '#005900',
          600: '#005000',
          700: '#004300',
          800: '#003500',
          900: '#002c00',
        },
        'earth': {
          50: '#faf5f0',
          100: '#f5ebe1',
          200: '#e6cdb4',
          300: '#d7af87',
          400: '#ba742d',
          500: '#9c3900',
          600: '#8c3300',
          700: '#752b00',
          800: '#5e2200',
          900: '#4c1c00',
        },
      },
    },
  },
  plugins: [],
}