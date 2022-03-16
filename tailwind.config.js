const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      body: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "dark": colors.neutral[900],
      },
    },
  },
  plugins: [],
};
