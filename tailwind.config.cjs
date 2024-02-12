/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-sans': 'Fira Sans',
        'keania-one': 'Keania One',
        'open-sans': 'Open Sans',
        'poppins': 'Poppins',
        'pt-sans': 'PT Sans',
        'ubuntu': 'Ubuntu',
      }
    },
  },
  plugins: [],
}