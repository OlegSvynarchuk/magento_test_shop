module.exports = {
  purge: [  "./public/**/*.html",
  "./src/**/*.js",
  "./src/**/*.jsx",
  "./src/**/*.tsx",],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {borderStyle: ['hover']},
  },
  plugins: [],
}
