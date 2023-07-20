import { Flex, Spacer } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

import { BoxStyled } from "../components";

const meta: Meta<typeof Spacer> = {
  component: Spacer
};

export default meta;

type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
  render: () => (
    <Flex>
      <BoxStyled />
      <Spacer />
      <BoxStyled />
    </Flex>
  )
};
