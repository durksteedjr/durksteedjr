import { Stack } from "@durksteedjr/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { Fragment } from "react";

import { BoxStyled } from "../../components";

const meta: Meta<typeof Stack> = {
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  component: Stack,
  title: "Core/Stack"
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
