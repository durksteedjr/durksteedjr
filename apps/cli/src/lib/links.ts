import type { Link } from "@internal/sdk";

export const links = {
  gitHub: {
    href: "https://github.com/durksteedjr/monorepo/tree/main/durksteedjr/cli",
    text: "GitHub"
  },
  npm: {
    href: "https://www.npmjs.com/package/@durksteedjr/cli",
    text: "NPM"
  }
} satisfies { [K: string]: Link };
