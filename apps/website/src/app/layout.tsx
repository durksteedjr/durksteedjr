import "../../globals.css";

import {
  Box,
  Container,
  Flex,
  Grid,
  Spacer,
  Span,
  Stack
} from "@durksteedjr/ui";
import {
  LinkBadge,
  LinkHover,
  OverlayGradient,
  OverlayGrid,
  Prose,
  Wrapper
} from "@services/ui";
import clsx from "clsx";
import { Nunito_Sans } from "next/font/google";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  BackToTopButton,
  QueryClientProvider,
  Text
} from "../components";
import { links, metadata as libMetadata } from "../lib";

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
  <QueryClientProvider>
    <html lang="en">
      <body>
        <OverlayGradient />
        <OverlayGrid />
        <Stack
          className={clsx("min-h-screen", nunitoSans.className)}
        >
          <Wrapper className="px-6 py-12 md:py-24">
            <Container>
              <header>
                <Stack className="">
                  <Flex className="items-center space-x-6 md:space-x-8">
                    <Link href="/">
                      <Box className="h-20 w-20 rounded-full bg-gradient-to-br from-green-400 via-cyan-400 to-pink-400 p-1 md:h-28 md:w-28 md:p-[0.375rem]">
                        <Box className="h-full w-full rounded-full bg-white bg-[url('/img/profile.png')] bg-cover bg-center" />
                      </Box>
                    </Link>
                    <Stack className="space-y-0.5 md:space-y-1">
                      <Span className="xs:text-3xl text-2xl font-extrabold sm:text-4xl md:text-5xl">
                        Durk Steed Jr.
                      </Span>
                      <Text>Catholic, Holistic</Text>
                    </Stack>
                  </Flex>
                </Stack>
              </header>
              <nav>
                <Flex className="mt-8 items-center space-x-6 text-xl font-bold md:space-x-8 md:text-2xl">
                  <LinkHover
                    className="hidden [@media(min-width:_355px)]:inline-block"
                    href={links.home.href}
                  >
                    {links.home.text}
                  </LinkHover>
                  {[links.posts, links.prayers, links.work].map(
                    (link) => (
                      <LinkHover
                        href={link.href}
                        key={link.text}
                      >
                        {link.text}
                      </LinkHover>
                    )
                  )}
                  <Spacer />
                  <LinkBadge
                    className="hidden sm:flex"
                    href={links.contact.href}
                    isOutlineArrowUpRight
                  >
                    <Span>{links.contact.text}</Span>
                  </LinkBadge>
                </Flex>
              </nav>
              <Spacer className="mb-24 mt-16 md:mb-32 md:mt-24">
                <Prose>
                  <main>{children}</main>
                </Prose>
              </Spacer>
              <footer>
                <Stack className="space-y-6 md:space-y-8">
                  <Grid className="grid-cols-2 gap-4 md:grid-cols-4">
                    {[
                      links.contact,
                      links.github,
                      links.instagram,
                      links.linkedIn
                    ].map((link) => (
                      <LinkBadge
                        href={link.href}
                        isOutlineArrowUpRight
                        key={link.text}
                        target="_blank"
                      >
                        {link.text}
                      </LinkBadge>
                    ))}
                  </Grid>
                  <Flex className="items-center space-x-4 text-sm font-light md:space-x-6 md:text-base">
                    {[links.robots, links.sitemap].map(
                      (link) => (
                        <LinkHover
                          href={link.href}
                          key={link.text}
                        >
                          {link.text}
                        </LinkHover>
                      )
                    )}
                    <Spacer />
                    <BackToTopButton />
                  </Flex>
                </Stack>
              </footer>
            </Container>
          </Wrapper>
        </Stack>
      </body>
    </html>
  </QueryClientProvider>
);

export default Layout;
