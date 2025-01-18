const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#F9FEFF",
        main: "#0A72EA",
        secondary: "#1B3B5F",
        dark: "#252C32",
        lightGray: "#84919A",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
