import colors from "@durksteedjr/colors/colors.json";
import {
  Flex,
  Grid,
  H1,
  H2,
  H3,
  Snippet,
  Span,
  Stack
} from "@durksteedjr/ui";
import type { NextPage } from "next";

import { capitalize } from "../../../../internal/sdk/src";
import { Color } from "../components";

const Page: NextPage = () => (
  <article>
    <H1>@durksteedjr/colors</H1>
    <H2 id="installation">Installation</H2>
    <Snippet>pnpm i @durksteedjr/colors</Snippet>
    <H2 id="usage">Usage</H2>
    <Snippet>
      import colors from "@durksteedjr/colors/colors.json";
    </Snippet>
    <H2 id="colors">Colors</H2>
    {Object.entries(colors).map(([color, value]) => {
      const capitalizedColor = capitalize(color);

      return (
        <Stack className="space-y-4" key={color}>
          <H3 id={color}>{capitalizedColor}</H3>
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
);

export default Page;
