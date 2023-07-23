/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDF2E9",
        secondary: "#FFCA9F",
        "button-primary": "#e67e22",
      },
    },
  },
  plugins: [],
};
