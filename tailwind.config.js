/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGray: '#222222',
        glowingRed:'#E60000',
        matteGreen:'#70A800',
        lightGray:'#D6D6D6'
      },
    },
  },
  plugins: [],
}
