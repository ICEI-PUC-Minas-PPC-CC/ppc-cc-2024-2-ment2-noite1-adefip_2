/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comico: ['Comico', 'sans-serif'],
      },
      colors: {
        primary: {
          bege: "#fffbdb",
          bege_claro: "#FCFAEE",
        }
      }
    },
  },
  plugins: [],
}
