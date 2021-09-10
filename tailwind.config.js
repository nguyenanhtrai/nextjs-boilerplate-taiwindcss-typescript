module.exports = {
  purge: {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: [],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
