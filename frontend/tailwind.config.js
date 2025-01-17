/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5f6FFF",
        secondary: "#3f3f3f",
        tertiary: "#4f4f4f",
      },
    },
  },
  plugins: [],
}

