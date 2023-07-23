import { P } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof P> = {
  component: P,
  title: "Markdown/P"
};

export default meta;

type Story = StoryObj<typeof P>;

export const Default: Story = {
  args: {
    children: "Children"
  }
};
