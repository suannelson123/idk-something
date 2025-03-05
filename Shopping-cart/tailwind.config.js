/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbarWidth: {
        thin: "thin",
        none: "none",
        auto: "auto",
      },
    },
  },
  plugins: [],
};
