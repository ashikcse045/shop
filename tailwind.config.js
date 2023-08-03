/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      lobster: "'Lobster', cursive",
      poppins: "'Poppins', sans-serif",
    },
    extend: {
      colors: {
        primary: '#FF671F',
      },
    },
  },
  plugins: [],
}