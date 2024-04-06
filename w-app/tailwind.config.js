/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDF2E9",
        secondary: "#FFCA9F",
        accent: "#FFCA9F",
        "button-primary": "#e67e22",
      },
      backgroundImage: {
        "blob-img": "url(/background/blob_background.jpg)",
      },
    },
  },
  plugins: [],
};
