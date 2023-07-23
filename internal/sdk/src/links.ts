export type Link = {
  href: string;
  text: string;
};

export const links = {
  durkSteedJr: {
    href: "https://durksteedjr.com",
    text: "Durk Steed Jr."
  },
  mitLicense: {
    href: "https://github.com/durksteedjr/monorepo/blob/main/LICENSE.md",
    text: "MIT License"
  }
} satisfies { [K: string]: Link };
