import { Grid } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react";

import { BoxStyled } from "../components";

const meta: Meta<typeof Grid> = {
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  component: Grid
};

export default meta;

type Story = StoryObj<typeof Grid>;

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
        <BoxStyled />
        <BoxStyled />
        <BoxStyled />
        <BoxStyled />
        <BoxStyled />
        <BoxStyled />
      </Fragment>
    ),
    className: "grid-cols-4 gap-4 md:gap-6"
  }
};
