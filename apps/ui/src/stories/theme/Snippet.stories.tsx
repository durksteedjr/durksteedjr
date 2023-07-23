import { Snippet } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Snippet> = {
  component: Snippet,
  title: "Theme/Snippet"
};

export default meta;

type Story = StoryObj<typeof Snippet>;

export const Default: Story = {
  args: {
    children: "Children"
  }
};
