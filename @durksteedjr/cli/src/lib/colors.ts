import { createRequire } from "module";

const require = createRequire(import.meta.url);

export const colors = require("@durksteedjr/colors/colors.json");
