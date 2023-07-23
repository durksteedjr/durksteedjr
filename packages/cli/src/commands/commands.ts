import chalk from "chalk";

import { commands as libCommands, log } from "../lib";

export const commands = () => {
  log("Commands:");

  log(
    `${Object.entries(libCommands)
      .map(
        ([command, data]) =>
          `${chalk.bold(command)}: ${data.description}`
      )
      .join("\n")}`
  );
};
