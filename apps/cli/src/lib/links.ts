import type { Link } from "@internal/sdk";

export const links = {
  gitHub: {
    href: "https://github.com/durksteedjr/packages/tree/main/packages/cli",
    text: "GitHub"
  },
  mitLicense: {
    href: "https://github.com/durksteedjr/packages/tree/main/packages/cli/LICENSE.md",
    text: "MIT License"
  },
  npm: {
    href: "https://www.npmjs.com/package/@durksteedjr/cli",
    text: "NPM"
  }
} satisfies { [K: string]: Link };
