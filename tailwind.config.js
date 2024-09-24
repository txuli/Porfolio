/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        breathing: {
          '0%, 100%': { opacity: 1 },
          '50%': {  opacity: 0.5 },
        },
      },
      animation: {
        breathing: 'breathing 2s infinite',
      },
      colors: {
        'purpleSymply': '#800080',
        'purpleColorDegrade': 'rgba(145, 2, 145, 0.432)',
      },
    },
  },
  plugins: [],
}

