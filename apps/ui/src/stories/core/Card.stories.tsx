import { Card } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Core/Card"
};

export default meta;

type Story = StoryObj<typeof Card>;

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
