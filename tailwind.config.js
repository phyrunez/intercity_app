/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['"Mulish"', "sans-serif"],
      },
      colors: {
        indigo: "#5850EC",
      },
    },
  },
  plugins: [],
};
