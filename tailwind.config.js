/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sulphur: ["Sulphur Point", "sans-serif"],
      asul: ["Asul", "serif"],
    },
   colors: {
     "theme-golden": "#DEA004",
     "theme-hover-golden": "#e39511",
     "theme-black": "#04102E",
     "theme-dark":"#0f172a",
     "theme-dark-top":"#1e293b",
     "theme-light":"#f4f4f4",
     "white":"#fff"
   },
   extend: {},
 },
  plugins: [],
};
