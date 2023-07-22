import { Stack } from "@durksteedjr/ui";
import { getEnvironmentString } from "@services/sdk";
import { LinkCard } from "@services/ui";
import type { NextPage } from "next";

import { SubTitle, Text } from "../../components";
import { getWorks } from "../../lib";

export const metadata = {
  description: "Work",
  title: "Work"
};

const Page: NextPage = () => (
  <>
    <h1>Work</h1>
    <Stack className="mt-8 space-y-4">
      {getWorks().map((work) => (
        <LinkCard
          href={getEnvironmentString({
            dev: work.devHref ?? work.href,
            production: work.href
          })}
          isOutlineArrowUpRight
          key={work.title}
          target="_blank"
        >
          <SubTitle className="pr-8">{work.title}</SubTitle>
          <Text>{work.description}</Text>
        </LinkCard>
      ))}
    </Stack>
  </>
);

export default Page;
