import { H1, H2, H3, P, Snippet } from "@durksteedjr/ui";
import { capitalize } from "@internal/sdk";
import type { NextPage } from "next";
import { Fragment } from "react";

import { commands } from "../../../../packages/cli/src/lib/commands";

const Page: NextPage = () => (
  <article>
    <H1>@durksteedjr/cli</H1>
    <H2 id="installation">Installation</H2>
    <Snippet>pnpm i @durksteedjr/cli</Snippet>
    <H2 id="usage">Usage</H2>
    <Snippet>pnpm durksteedjr</Snippet>
    <H3 id="with-npx">With NPX</H3>
    <Snippet>npx @durksteedjr/cli@latest</Snippet>
    <H2 id="commands">Commands</H2>
    {Object.entries(commands).map(([command, data]) => (
      <Fragment key={command}>
        <H3 id={command}>{capitalize(command)}</H3>
        <P>{data.description}</P>
        <Snippet>pnpm durksteedjr {command}</Snippet>
      </Fragment>
    ))}
  </article>
);

export default Page;
