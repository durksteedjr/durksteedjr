import chalk from "chalk";

import { log } from "../lib";

export const commands = () => {
  log("Commands:");

  log(`${chalk.bold("about")}: About Durk.\n${chalk.bold(
    "commands"
  )}: List commands.\n${chalk.bold("setup")}: Copy setup files.
  `);
};
