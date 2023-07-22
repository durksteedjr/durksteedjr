import { Stack } from "@durksteedjr/ui";
import { LinkCard } from "@services/ui";
import type { NextPage } from "next";

import { SubTitle } from "../../components";
import { getPrayers } from "../../lib";

export const metadata = {
  description: "Prayers",
  title: "Prayers"
};

const Page: NextPage = () => (
  <>
    <h1>Prayers</h1>
    <Stack className="mt-8 space-y-4">
      {getPrayers().map((prayer) => (
        <LinkCard
          href={`/prayers/${prayer.slug}`}
          isOutlineRightArrow
          key={prayer.title}
        >
          <SubTitle className="pr-8">{prayer.title}</SubTitle>
        </LinkCard>
      ))}
    </Stack>
  </>
);

export default Page;
