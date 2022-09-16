/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {      
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white':    '#ffffff',
      'gray':     '#9CA38F',
      'green1':   '#379908',
      'green2':   '#98AD21',
      'orange1':  '#E1C050',
      'orange2':  '#FFD489',
      'gray50': '#f9fafb',
      'green500':'#22c55e',
      'gray2':'#434343',
    },
    // screens: {
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
 // plugins: [require('flowbite/plugin')],
}
}
