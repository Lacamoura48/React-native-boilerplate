/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brownie: "#A47950",
        marine: "#48829C"
      }
    },
  },
  plugins: [],
}

