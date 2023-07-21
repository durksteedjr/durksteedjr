import { Grid } from "@durksteedjr/ui";
import { capitalize, links } from "@services/sdk";
import { LinkBadge, Snippet } from "@services/ui";
import type { NextPage } from "next";

import { commands } from "../../../../durksteedjr/cli/src/lib";

const Page: NextPage = () => (
  <>
    <h1>@durksteedjr/cli</h1>
    <Grid className="mt-4 grid-cols-2 gap-4 md:mt-8">
      {[links.cliGitHub, links.cliNPM].map((link) => (
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
    <Snippet>pnpm i @durksteedjr/cli</Snippet>
    <h2>NPX</h2>
    <Snippet>npx @durksteedjr/cli@latest</Snippet>
    <h2>Commands</h2>
    {Object.entries(commands).map(([command, data]) => (
      <>
        <h3>{capitalize(command)}</h3>
        <p>{data.description}</p>
        <Snippet>pnpm durksteedjr {command}</Snippet>
      </>
    ))}
    <h2>Acknowledgements</h2>
    <Grid className="mt-4 gap-4 sm:grid-cols-2 md:mt-8">
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
