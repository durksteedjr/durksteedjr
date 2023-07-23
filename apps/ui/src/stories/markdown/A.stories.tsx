import { A } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof A> = {
  argTypes: {
    // @ts-ignore
    href: {
      table: {
        disable: true
      }
    }
  },
  component: A,
  title: "Markdown/A"
};

export default meta;

type Story = StoryObj<typeof A>;

export const Default: Story = {
  args: {
    children: "Children",
    // @ts-ignore
    href: ""
  }
};
