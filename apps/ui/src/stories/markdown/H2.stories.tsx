import { H2 } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof H2> = {
  component: H2,
  title: "Markdown/H2"
};

export default meta;

type Story = StoryObj<typeof H2>;

export const Default: Story = {
  args: {
    children: "Children"
  }
};
