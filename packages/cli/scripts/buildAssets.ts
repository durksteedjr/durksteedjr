import { copySync, mkdirSync, writeFileSync } from "fs-extra";

import {
  ASSETS_SETUP_COPY_FILES,
  ASSETS_SETUP_RAW_FILES,
  ASSETS_SETUP_RAW_PATH
} from "./constants";

const main = () =>
  ASSETS_SETUP_COPY_FILES.forEach(([source, dest]) =>
    copySync(source, dest)
  );

mkdirSync(ASSETS_SETUP_RAW_PATH, { recursive: true });

ASSETS_SETUP_RAW_FILES.forEach(([dest, content]) =>
  writeFileSync(dest, content)
);

if (require.main === module) main();
