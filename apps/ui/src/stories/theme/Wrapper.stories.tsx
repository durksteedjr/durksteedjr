import { Wrapper } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Wrapper> = {
  component: Wrapper,
  title: "Theme/Wrapper"
};

export default meta;

type Story = StoryObj<typeof Wrapper>;

export const Default: Story = {
  args: {
    children: "Children"
  }
};
