import chalk from "chalk";

import { log } from "../lib";

export const about = () => {
  log(`Hi! I am ${chalk.bold("Durk")}, welcome to my CLI.`);

  log(
    "I am a Catholic committed to a holistic lifestyle full of learning and exploration."
  );

  log(
    `Run ${chalk.bold(
      "durksteedjr commands"
    )} for a list of commands.`
  );
};
