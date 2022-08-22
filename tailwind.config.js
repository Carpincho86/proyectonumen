/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white':    '#ffffff',
      'gray':     '#9CA38F',
      'green1':   '#379908',
      'green2':   '#98AD21',
      'orange1':  '#E1C050',
      'orange2':  '#FFD489',
    },
  },
  plugins: [],
}
