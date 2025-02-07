/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50 : '#6eadd9',
          100: '#804de7',
          200: '#360065',
        },
        'secondary': '#2ff18b',
    },
  },
  plugins: [],
  }
}