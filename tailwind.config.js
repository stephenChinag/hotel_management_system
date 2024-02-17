/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#038C7F",
        secondary: "#0F2C64",
        tertiary: {
          dark: "#F27405",
          light: "#F2C641",
        },
      },
    },
  },

  plugins: [],
};
