/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      White: "hsl(0, 0%, 100%)",
      lightpink: "hsl(275, 100%, 97%)",
      grayishpurple: "hsl(292, 16%, 49%)",
      darkpurple: "hsl(292, 42%, 14%)",
    },
  },
  plugins: [],
};
