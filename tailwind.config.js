const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      body: ["Roboto", "sans-serif"],
    },
    dropShadow: {
      glow: "0 0 20px rgba(255,255,255,0.3)"
    },
    letterSpacing: {
      title: ".30em"
    },
    extend: {
      colors: {
        dark: colors.neutral[900],
      },
      screens: {
        hsm: {
          'raw': '(min-height: 640px)'
        }
      }
    },
  },
  plugins: [],
};
