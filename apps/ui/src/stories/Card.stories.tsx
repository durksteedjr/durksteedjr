import { Card } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  component: Card
};

export default meta;

type Story = StoryObj<typeof Card>;

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
