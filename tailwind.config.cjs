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
        // primary: {
        //   1: '#289A96',
        //   2: '#00AAA6',
        //   3: '#EEFCFB',
        //   4: '#F3EADA',
        // },
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
