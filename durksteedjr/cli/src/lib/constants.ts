import { dirname, join } from "path";
import { stdout } from "process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

export const ASSETS_PATH = join(__dirname, "..", "assets");

export const ASSETS_SETUP_PATH = join(ASSETS_PATH, "setup");

export const MARGIN = 6;

export const MAX_WIDTH = Math.min(
  65,
  stdout.columns - 2 * MARGIN
);

export const PAD = " ".repeat(MARGIN);
