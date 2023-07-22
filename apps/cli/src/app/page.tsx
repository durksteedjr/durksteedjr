import { Grid } from "@durksteedjr/ui";
import { capitalize, links } from "@services/sdk";
import { LinkBadge, Prose, Snippet } from "@services/ui";
import type { NextPage } from "next";
import { Fragment } from "react";

import { commands } from "../../../../durksteedjr/cli/src/lib";

const Page: NextPage = () => (
  <main>
    <nav>
      <Grid className="mb-6 gap-4 sm:grid-cols-2 md:mb-8">
        {[links.cliGitHub, links.cliNPM].map((link) => (
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
        <h1>@durksteedjr/cli</h1>
        <h2 id="installation">
          <a
            aria-hidden="true"
            href="#installation"
            tabIndex={-1}
          />
          Installation
        </h2>
        <Snippet>pnpm i @durksteedjr/cli</Snippet>
        <h2 id="usage">
          <a aria-hidden="true" href="#usage" tabIndex={-1} />
          Usage
        </h2>
        <Snippet>pnpm durksteedjr</Snippet>
        <h3 id="with-npx">
          <a aria-hidden="true" href="#with-npx" tabIndex={-1} />
          With NPX
        </h3>
        <Snippet>npx @durksteedjr/cli@latest</Snippet>
        <h2 id="commands">
          <a aria-hidden="true" href="#commands" tabIndex={-1} />
          Commands
        </h2>
        {Object.entries(commands).map(([command, data]) => (
          <Fragment key={command}>
            <h3 id={command}>
              <a
                aria-hidden="true"
                href={`#${command}`}
                tabIndex={-1}
              />
              {capitalize(command)}
            </h3>
            <p>{data.description}</p>
            <Snippet>pnpm durksteedjr {command}</Snippet>
          </Fragment>
        ))}
      </article>
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
    </Prose>
  </main>
);

export default Page;
