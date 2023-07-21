import "../../globals.css";

import { Box, Container } from "@durksteedjr/ui";
import {
  OverlayGradient,
  OverlayGrid,
  Prose
} from "@services/ui";
import { Nunito_Sans } from "next/font/google";
import type { ReactNode } from "react";

import { metadata as libMetadata } from "../lib";

export const metadata = libMetadata;

const nunitoSans = Nunito_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-nunito-sans"
});

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <html lang="en">
    <body>
      <OverlayGradient />
      <OverlayGrid />
      <Box className={nunitoSans.className}>
        <Prose className="px-6 py-12 md:py-24">
          <Container>
            <article>{children}</article>
          </Container>
        </Prose>
      </Box>
    </body>
  </html>
);

export default Layout;
