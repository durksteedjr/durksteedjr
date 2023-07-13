/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "../../packages/ui/dist/**/*.mjs",
    "src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("@durksteedjr/ui/assets/preset.js")]
};
