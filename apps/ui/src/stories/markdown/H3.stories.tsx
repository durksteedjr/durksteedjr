import { H3 } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof H3> = {
  component: H3,
  title: "Markdown/H3"
};

export default meta;

type Story = StoryObj<typeof H3>;

export const Default: Story = {
  args: {
    children: "Children"
  }
};
