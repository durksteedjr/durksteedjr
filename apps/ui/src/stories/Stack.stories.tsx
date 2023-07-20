import { Stack } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react";

import { BoxStyled } from "../components";

const meta: Meta<typeof Stack> = {
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  component: Stack
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    children: (
      <Fragment>
        <BoxStyled />
        <BoxStyled />
      </Fragment>
    )
  }
};

export const Styled: Story = {
  args: {
    children: (
      <Fragment>
        <BoxStyled />
        <BoxStyled />
      </Fragment>
    ),
    className: "space-y-4 md:space-y-6"
  }
};
