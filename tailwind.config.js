/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Corrige duplicação
  theme: {
    extend: {
      fontFamily: {
        graphik: ["Graphik", "sans-serif"],
        "graphik-bold": ["Graphik-bold", "sans-serif"],
      },
      colors: {
        primary: "#2091F9",
        text: "#252B42",
        'secondary-text': "#374754",
        'dark-background': "#252B42",
      }, 
    }, 
  }, 
  plugins: [],
};
