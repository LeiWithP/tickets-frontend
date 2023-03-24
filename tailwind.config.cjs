/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#289A96',
        secondary: '#144A46',
        tertiary: '#606060',
        extra: '#FC6459',
      },
      backgroundImage: {
        'random-image': "url('https://source.unsplash.com/random')",
      }
    },
  },
  plugins: [],
}
