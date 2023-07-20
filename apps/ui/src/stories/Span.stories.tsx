import { Span } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Span> = {
  component: Span
};

export default meta;

type Story = StoryObj<typeof Span>;

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
