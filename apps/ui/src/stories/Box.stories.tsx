import { Box } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Box> = {
  component: Box
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: "Content"
  }
};

export const Styled: Story = {
  args: {
    children: "Content",
    className: "text-blue-600"
  }
};
