import colors from "@durksteedjr/colors/colors.json";
import { Flex, Grid, Span, Stack } from "@durksteedjr/ui";
import { capitalize, links } from "@services/sdk";
import { LinkBadge, Snippet } from "@services/ui";
import type { NextPage } from "next";

import { Color } from "../components";

const Page: NextPage = () => (
  <>
    <h1>@durksteedjr/colors</h1>
    <Grid className="mt-6 gap-4 sm:grid-cols-3">
      {[
        links.colorsFigma,
        links.colorsGitHub,
        links.colorsNPM
      ].map((link) => (
        <LinkBadge
          href={link.href}
          isOutlineArrow
          key={link.text}
          target="_blank"
        >
          {link.text}
        </LinkBadge>
      ))}
    </Grid>
    <h2>Installation</h2>
    <Snippet>pnpm i @durksteedjr/colors</Snippet>
    <h2>Usage</h2>
    <Snippet>
      import colors from "@durksteedjr/colors/colors.json";
    </Snippet>
    <h2>Colors</h2>
    {Object.entries(colors).map(([color, value]) => {
      const capitalizedColor = capitalize(color);

      return (
        <Stack className="space-y-4">
          <h3>{capitalize(color)}</h3>
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
    <h2>Acknowledgements</h2>
    <Grid className="mt-6 gap-4 sm:grid-cols-2">
      {[links.durkSteedJr, links.mitLicense].map((link) => (
        <LinkBadge
          href={link.href}
          isOutlineArrow
          key={link.text}
          target="_blank"
        >
          {link.text}
        </LinkBadge>
      ))}
    </Grid>
  </>
);

export default Page;
