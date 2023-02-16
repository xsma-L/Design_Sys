/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        'primary-white': '#FFFFF',
        'primary-black': '#000000',
        'primary-grey': '#A0A0A0',
        'secondary-light-blue': '#7FFAFA',
        'secondary-purple': '#B1A6F4',
        'secondary-red': '#FC0000',
        'secondary-blue': '#8AB4F8',
        'secondary-dark-purple': '#816DFD',
        'button-active': '#6D5BDE',
      },
      spacing: {
        'spacing-1': '4px',
        'spacing-2': '8px',
        'spacing-3': '16px',
        'spacing-4': '24px',
        'spacing-5': '32px',
        'spacing-6': '40px',
        'spacing-7': '48px',
        'spacing-8': '54px',
      },
    },
  },
  plugins: [],
}
