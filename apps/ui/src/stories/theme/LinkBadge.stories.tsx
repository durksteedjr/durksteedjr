import { LinkBadge } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinkBadge> = {
  argTypes: {
    href: {
      table: {
        disable: true
      }
    }
  },
  component: LinkBadge,
  title: "Theme/LinkBadge"
};

export default meta;

type Story = StoryObj<typeof LinkBadge>;

export const Default: Story = {
  args: {
    children: "Children",
    href: ""
  }
};
