export type Link = {
  href: string;
  text: string;
};

export const links = {
  cliGitHub: {
    href: "https://github.com/durksteedjr/monorepo/tree/main/durksteedjr/cli",
    text: "GitHub"
  },
  cliNPM: {
    href: "https://www.npmjs.com/package/@durksteedjr/cli",
    text: "NPM"
  },
  colorsFigma: {
    href: "https://www.figma.com/community/file/1263131602655900093/%40durksteedjr%2Fcolors",
    text: "Figma"
  },
  colorsGitHub: {
    href: "https://github.com/durksteedjr/monorepo/tree/main/durksteedjr/colors",
    text: "GitHub"
  },
  colorsNPM: {
    href: "https://www.npmjs.com/package/@durksteedjr/colors",
    text: "NPM"
  },
  durkSteedJr: {
    href: "https://durksteedjr.com",
    text: "Durk Steed Jr."
  },
  mitLicense: {
    href: "https://github.com/durksteedjr/monorepo/blob/main/LICENSE.md",
    text: "MIT License"
  },
  uiGitHub: {
    href: "https://github.com/durksteedjr/monorepo/tree/main/durksteedjr/ui",
    text: "GitHub"
  },
  uiNPM: {
    href: "https://www.npmjs.com/package/@durksteedjr/ui",
    text: "NPM"
  }
} satisfies { [K: string]: Link };
