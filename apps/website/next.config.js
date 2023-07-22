const { withContentlayer } = require("next-contentlayer");

/** @type {import("next").NextConfig} */
const config = {
  transpilePackages: [
    "@configs/tailwindcss",
    "@configs/tsconfig",
    "@durksteedjr/ui",
    "@services/sdk",
    "@services/ui"
  ]
};

module.exports = withContentlayer(config);
