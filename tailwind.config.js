const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      body: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "dark": colors.neutral[900],
      },

      dropShadow: ({ theme }) => ({
        border: [
          `1px 1px 0 ${theme("colors.dark")}`,
          `-1px 1px 0 ${theme("colors.dark")}`,
          `1px -1px 0 ${theme("colors.dark")}`,
          `-1px -1px 0 ${theme("colors.dark")}`,
        ]
      }),
    },
  },
  plugins: [],
};
