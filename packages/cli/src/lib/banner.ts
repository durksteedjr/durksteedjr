import chalk from "chalk";
import gradientString from "gradient-string";

import { colors } from "./colors";
import { PAD } from "./constants";

export const banner = () =>
  console.log(
    `\n${PAD}${chalk.bold(
      gradientString(
        colors.green[400],
        colors.blue[400],
        colors.pink[400]
      )(">>> Durk Steed Jr.")
    )}\n`
  );
