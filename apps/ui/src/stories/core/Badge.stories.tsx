import { Badge } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Core/Badge"
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Children"
  }
};

export const Hover: Story = {
  args: {
    children: "Children",
    isHover: true
  }
};
