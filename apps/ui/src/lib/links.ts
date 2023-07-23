import type { Link } from "@internal/sdk";

export const links = {
  gitHub: {
    href: "https://github.com/durksteedjr/monorepo/tree/main/durksteedjr/ui",
    text: "GitHub"
  },
  npm: {
    href: "https://www.npmjs.com/package/@durksteedjr/ui",
    text: "NPM"
  }
} satisfies { [K: string]: Link };
