import { Container } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Container> = {
  component: Container,
  title: "Core/Container"
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: "Children"
  }
};
