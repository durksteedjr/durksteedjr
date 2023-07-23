import type { Link } from "@internal/sdk";

export const links = {
  figma: {
    href: "https://www.figma.com/community/file/1263131602655900093",
    text: "Figma"
  },
  gitHub: {
    href: "https://github.com/durksteedjr/monorepo/tree/main/durksteedjr/colors",
    text: "GitHub"
  },
  npm: {
    href: "https://www.npmjs.com/package/@durksteedjr/colors",
    text: "NPM"
  }
} satisfies { [K: string]: Link };
