/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#364F6B",
        pink: "#FC5185",
        teal: "#3FC1C9",
        white: "#F5F5F5"
      },
    },
  },
  plugins: [],
};
