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
        indigo700: "#5145CD",
        indigo50: "#F0F5FF",
        blue: "#102751",
        blue50: "#F5F8FF",
        blue800: "#203D73",
        yellow50: "#FDFDEA",
        yellow600: "#9F580A",
        gray500: "#6B7280",
      },
    },
  },
  plugins: [],
};
