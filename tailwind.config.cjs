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
        primarySub1: '#1D625F',
        primarySub2: '#2B7E7A',
        primarySub3: '#3A9A95',
        primarySub4: '#48B6B0',
        primarySub5: '#56D2CC',
        secondary: '#144A46',
        tertiary: '#606060',
        extra: '#FC6459',
      },
      backgroundImage: {
        'random-image': "url('https://source.unsplash.com/random')",
        'gaytan-icon': "url('images/gaytan-title.png')",
      }
    },
  },
  plugins: [],
}
