/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spice: {
          100: '#fff3e6',
          200: '#ffd9b3',
          300: '#ffbf80',
          400: '#ffa64d',
          500: '#ff8c1a',
        }
      }
    },
  },
  plugins: [],
}