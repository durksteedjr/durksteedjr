import type { Link } from "@internal/sdk";

export const links = {
  figma: {
    href: "https://www.figma.com/community/file/1263131602655900093",
    text: "Figma"
  },
  gitHub: {
    href: "https://github.com/durksteedjr/packages/tree/main/packages/colors",
    text: "GitHub"
  },
  mitLicense: {
    href: "https://github.com/durksteedjr/packages/tree/main/packages/colors/LICENSE.md",
    text: "MIT License"
  },
  npm: {
    href: "https://www.npmjs.com/package/@durksteedjr/colors",
    text: "NPM"
  }
} satisfies { [K: string]: Link };
