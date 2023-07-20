import { Center } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Center> = {
  component: Center
};

export default meta;

type Story = StoryObj<typeof Center>;

export const Default: Story = {
  args: {
    children: "Content"
  }
};
