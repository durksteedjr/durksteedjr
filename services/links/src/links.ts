export type Link = {
  href: string;
  text: string;
};

export const links: { [K: string]: Link } = {
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
};
