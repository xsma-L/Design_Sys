/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        'primary-white': '#FFFFF',
        'primary-black': '#000000',
        'secondary-light-blue': '#7FFAFA',
        'secondary-purple': '#B1A6F4',
        'secondary-red': '#FC0000',
        'button-active': '#6D5BDE'
      },
    },
  },
  plugins: [],
}
