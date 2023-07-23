import type { Link } from "./types";

export const links = {
  durkSteedJr: {
    href: "https://durksteedjr.com",
    text: "Durk Steed Jr."
  },
  mitLicense: {
    href: "https://github.com/durksteedjr/packages/blob/main/LICENSE.md",
    text: "MIT License"
  }
} satisfies { [K: string]: Link };
