import { log } from "../utils";
import chalk from "chalk";

export const about = () => {
  log(`Hi! I am ${chalk.bold("Durk")}, welcome to my CLI.`);

  log("I am a Catholic committed to a holistic lifestyle.");

  log(`Run ${chalk.bold("durksteedjr commands")} for a list of commands.`);
};
