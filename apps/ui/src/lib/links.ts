import type { Link } from "@internal/sdk";

export const links = {
  gitHub: {
    href: "https://github.com/durksteedjr/packages/tree/main/packages/ui",
    text: "GitHub"
  },
  mitLicense: {
    href: "https://github.com/durksteedjr/packages/tree/main/packages/ui/LICENSE.md",
    text: "MIT License"
  },
  npm: {
    href: "https://www.npmjs.com/package/@durksteedjr/ui",
    text: "NPM"
  }
} satisfies { [K: string]: Link };
