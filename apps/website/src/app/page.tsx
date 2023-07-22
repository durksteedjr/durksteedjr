import { Divider, Stack } from "@durksteedjr/ui";
import { LinkCard, Snippet } from "@services/ui";
import type { NextPage } from "next";

import { SubTitle } from "../components";
import { links } from "../lib";

const Page: NextPage = () => (
  <>
    <Snippet>npx @durksteedjr/cli@latest</Snippet>
    <Divider className="my-8" />
    <Stack className="space-y-4">
      {[links.posts, links.prayers, links.work].map((link) => (
        <LinkCard
          href={link.href}
          isOutlineRightArrow
          key={link.text}
        >
          <SubTitle>{link.text}</SubTitle>
        </LinkCard>
      ))}
    </Stack>
  </>
);

export default Page;
