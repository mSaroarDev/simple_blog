/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        HindSiliguri: ['"Hind Siliguri"', '"sans-serif"'],
      },
    },
  },
  plugins: [require("daisyui")],
};
