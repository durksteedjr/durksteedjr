import { LinkCard } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinkCard> = {
  component: LinkCard,
  title: "Theme/LinkCard"
};

export default meta;

type Story = StoryObj<typeof LinkCard>;

export const Default: Story = {
  argTypes: {
    href: {
      table: {
        disable: true
      }
    }
  },
  args: {
    children: "Children",
    href: ""
  }
};
