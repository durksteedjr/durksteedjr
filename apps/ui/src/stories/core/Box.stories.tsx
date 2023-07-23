import { Box } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Box> = {
  component: Box,
  title: "Core/Box"
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: "Children"
  }
};
