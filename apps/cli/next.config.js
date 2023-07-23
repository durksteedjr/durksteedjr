/** @type {import("next").NextConfig} */
const config = {
  transpilePackages: [
    "@durksteedjr/colors",
    "@durksteedjr/ui",
    "@internal/sdk",
    "@internal/tsconfig"
  ]
};

module.exports = config;
