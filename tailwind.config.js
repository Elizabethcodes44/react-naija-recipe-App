/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgrey: "#101010",
        gold: "#e19500",
      }
    },
  },
  plugins: [],
}

