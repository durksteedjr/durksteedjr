const colors = require("@durksteedjr/colors/colors.json");

/** @type {import("tailwindcss").Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        black: colors.black,
        blue: colors.blue,
        cyan: colors.cyan,
        gray: colors.gray,
        green: colors.green,
        indigo: colors.indigo,
        orange: colors.orange,
        pink: colors.pink,
        purple: colors.purple,
        red: colors.red,
        teal: colors.teal,
        white: colors.white,
        yellow: colors.yellow
      }
    }
  }
};
