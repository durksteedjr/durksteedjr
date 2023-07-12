import { copy } from "fs-extra";
import { cwd } from "process";

import { ASSETS_SETUP_PATH, log } from "../lib";

export const setup = () => {
  log("Copying files...");

  copy(ASSETS_SETUP_PATH, cwd());

  log("Setup complete.");
};
