module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
export default {
  theme: {
    extend: {
      colors: {
        reefTeal: '#004d4d',
        textDark: '#1a1a1a',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      maxWidth: {
        content: '900px',
      },
    },
  },
}

