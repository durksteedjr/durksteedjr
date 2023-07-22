import colors from "@durksteedjr/colors/colors.json";
import { Flex, Grid, Span, Stack } from "@durksteedjr/ui";
import { capitalize, links } from "@services/sdk";
import { LinkBadge, Prose, Snippet } from "@services/ui";
import type { NextPage } from "next";

import { Color } from "../components";

const Page: NextPage = () => (
  <main>
    <nav>
      <Grid className="mb-6 gap-4 sm:grid-cols-3 md:mb-8">
        {[
          links.colorsFigma,
          links.colorsGitHub,
          links.colorsNPM
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
    </nav>
    <Prose>
      <article>
        <h1>@durksteedjr/colors</h1>
        <h2 id="installation">
          <a
            aria-hidden="true"
            href="#installation"
            tabIndex={-1}
          />
          Installation
        </h2>
        <Snippet>pnpm i @durksteedjr/colors</Snippet>
        <h2 id="usage">
          <a aria-hidden="true" href="#usage" tabIndex={-1} />
          Usage
        </h2>
        <Snippet>
          import colors from "@durksteedjr/colors/colors.json";
        </Snippet>
        <h2 id="colors">
          <a aria-hidden="true" href="#colors" tabIndex={-1} />
          Colors
        </h2>
        {Object.entries(colors).map(([color, value]) => {
          const capitalizedColor = capitalize(color);

          return (
            <Stack className="space-y-4" key={color}>
              <h3 id={capitalizedColor}>
                <a
                  aria-hidden="true"
                  href={`#${capitalizedColor}`}
                  tabIndex={-1}
                />
                {capitalizedColor}
              </h3>
              <Grid className="grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
                {Object.entries(
                  typeof value === "string"
                    ? { [capitalizedColor]: value }
                    : value
                ).map(([scale, hex]) => (
                  <Stack className="space-y-2" key={hex}>
                    <Color hex={hex} />
                    <Flex className="items-center space-x-4 text-sm md:justify-between">
                      <Span className="font-bold">{scale}</Span>
                      <Span className="font-light text-gray-500">
                        {hex}
                      </Span>
                    </Flex>
                  </Stack>
                ))}
              </Grid>
            </Stack>
          );
        })}
      </article>
    </Prose>
    <footer>
      <Grid className="mt-24 gap-4 sm:grid-cols-2 md:mt-32">
        {[links.durkSteedJr, links.mitLicense].map((link) => (
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
    </footer>
  </main>
);

export default Page;
