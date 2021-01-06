module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'Nanum Gothic': ['"Nanum Gothic"', 'sans-serif']
    },
    backgroundColor: theme => ({
      dislight: '#36393F',
      disdefault: '#2F3136',
      disdark: '#202225'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
