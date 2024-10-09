import { commands as libCommands } from "../lib";
import { log } from "../utils";
import chalk from "chalk";

export const commands = () => {
  log("Commands:");

  log(
    `${Object.entries(libCommands)
      .map(([command, data]) => `${chalk.bold(command)}: ${data.description}`)
      .join("\n")}`,
  );
};
