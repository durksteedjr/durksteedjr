import { Grid } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react";

import { BoxStyled } from "../../components";

const meta: Meta<typeof Grid> = {
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  component: Grid,
  title: "Core/Grid"
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
