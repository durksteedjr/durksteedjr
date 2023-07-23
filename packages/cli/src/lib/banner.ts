import chalk from "chalk";
import gradientString from "gradient-string";

import { colors } from "./colors";
import { PAD } from "./constants";

export const banner = () =>
  console.log(
    `${PAD}${chalk.bold(
      gradientString(
        colors.green[400],
        colors.cyan[400],
        colors.pink[400]
      )(">>> Durk Steed Jr.")
    )}\n`
  );
