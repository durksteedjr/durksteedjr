import { H1 } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof H1> = {
  component: H1,
  title: "Markdown/H1"
};

export default meta;

type Story = StoryObj<typeof H1>;

export const Default: Story = {
  args: {
    children: "Children"
  }
};
