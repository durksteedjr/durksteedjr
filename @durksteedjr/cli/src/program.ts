import { about, commands, website } from "./commands";
import { banner } from "./utils";
import { Command } from "commander";

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
  .command("website")
  .helpOption(false)
  .hook("preAction", () => banner())
  .action(() => website());

program.parse();
