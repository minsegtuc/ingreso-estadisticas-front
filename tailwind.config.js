/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'myriad': ['Myriad Pro', 'sans-serif']
      },
      height:{
        's': '432px',
        'altura': '396px'
      }
    },
  },
  plugins: [],
}