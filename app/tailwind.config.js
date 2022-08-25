/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBg: '#1D2120',
        secondaryColor: '#3C4D30',
      },
    },
  },
  plugins: [],
};
