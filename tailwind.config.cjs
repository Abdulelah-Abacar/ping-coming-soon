/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'small': '0px 2px 5px 0px rgb(0, 0, 0, 0.3)'
      }
    },
    fontFamily: {
      LF: ['Libre Franklin']
    }
  },
  plugins: [],
}
