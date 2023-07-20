import { Hover } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Hover> = {
  component: Hover
};

export default meta;

type Story = StoryObj<typeof Hover>;

export const Default: Story = {
  args: {
    children: "Content"
  }
};
