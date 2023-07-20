import { Badge } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  component: Badge
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Content"
  }
};

export const Hover: Story = {
  args: {
    children: "Content",
    isHover: true
  }
};
