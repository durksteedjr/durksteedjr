import { Command } from "commander";

import { about, commands, setup } from "./commands";
import { banner } from "./lib";

const program = new Command();

program.helpOption(false);

program
  .command("about", { isDefault: true })
  .helpOption(false)
  .hook("preAction", () => banner())
  .action(() => about());

program
  .command("commands")
  .helpOption(false)
  .hook("preAction", () => banner())
  .action(() => commands());

program
  .command("setup")
  .helpOption(false)
  .hook("preAction", () => banner())
  .action(() => setup());

program.parse();
