import type { Metadata } from "next";

const description = "@durksteedjr/colors";
const title = "@durksteedjr/colors";
const url = "https://colors.durksteedjr.com";

export const metadata: Metadata = {
  description,
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s | ${title}`
  },
  openGraph: {
    description,
    locale: "en-US",
    siteName: title,
    title,
    type: "website",
    url
  },
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: "summary",
    title
  },
  icons: {
    shortcut: "/favicon.ico"
  }
};
