/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Upright', 'serif'],
        alt: ['Open Sans', 'san-serif'],
      },
      colors: {
        golden: '#DCCA87',
        black: '#0C0C0C',
        gray: '#545454',
        crimson: '#F5EFDB',
        grey: '#AAAAAA',
        white: '#FFFFFF',
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}