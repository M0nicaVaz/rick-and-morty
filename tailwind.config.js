/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/pages/**/*.{js,ts,jsx,tsx}',
    './**/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Creepster', 'cursive'],
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
