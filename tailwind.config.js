/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica Neue', 'Helvetica'],
      'helvetica': ['Helvetica Neue', 'Helvetica'],
    },
    extend: {
      spacing: {
        '7.5': '1.875rem', // 30px
      },
    },
  },
  plugins: [],
}
