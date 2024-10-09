import { colors, PAD } from "../lib";
import chalk from "chalk";
import gradientString from "gradient-string";

export const banner = () =>
  console.log(
    `${PAD}${chalk.bold(
      gradientString(
        colors.green[400],
        colors.cyan[400],
        colors.pink[400],
      )(">>> Durk Steed Jr."),
    )}\n`,
  );
