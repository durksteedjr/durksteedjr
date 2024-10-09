import { MARGIN } from "./margin.constants";
import { stdout } from "process";

export const MAX_WIDTH = Math.min(65, stdout.columns - 2 * MARGIN);
