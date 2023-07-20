/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,mdx,ts,tsx}",
    "../../durksteedjr/ui/dist/**/*.mjs",
    "../../services/ui/**/*.{ts,tsx}"
  ],
  presets: ["@configs/tailwindcss/preset.js"]
};
