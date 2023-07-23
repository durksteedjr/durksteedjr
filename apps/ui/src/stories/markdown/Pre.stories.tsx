import { Pre } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Pre> = {
  component: Pre,
  title: "Markdown/Pre"
};

export default meta;

type Story = StoryObj<typeof Pre>;

export const Default: Story = {
  args: {
    children: "Children"
  }
};
