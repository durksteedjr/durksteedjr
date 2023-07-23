import { LinkHover } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinkHover> = {
  argTypes: {
    href: {
      table: {
        disable: true
      }
    }
  },
  component: LinkHover,
  title: "Theme/LinkHover"
};

export default meta;

type Story = StoryObj<typeof LinkHover>;

export const Default: Story = {
  args: {
    children: "Children",
    href: ""
  }
};

export const Active: Story = {
  args: {
    children: "Children",
    href: "",
    isActive: true
  }
};
