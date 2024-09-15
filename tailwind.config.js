/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '150px',
      },
      colors: {
        'custom-background': '#161131', 
        'custom-text-color': '#8f9296',
      },
    },
  },
  plugins: [],
}




