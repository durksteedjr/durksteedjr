import { join } from "path";

import { RAW_JSON, RAW_TXT } from "./raw";

export const OVERRIDES_PATH = join(__dirname, "overrides");

export const ROOT_PATH = join(__dirname, "..", "..", "..");

export const ASSETS_PATH = join(__dirname, "..", "assets");

export const ASSETS_SETUP_PATH = join(ASSETS_PATH, "setup");

export const ASSETS_SETUP_COPY_FILES = [
  [
    join(ROOT_PATH, ".github/workflows/status.yaml"),
    join(ASSETS_SETUP_PATH, ".github/workflows/status.yaml")
  ],
  [
    join(ROOT_PATH, ".husky/commit-msg"),
    join(ASSETS_SETUP_PATH, ".husky/commit-msg")
  ],
  [
    join(ROOT_PATH, ".husky/pre-commit"),
    join(ASSETS_SETUP_PATH, ".husky/pre-commit")
  ],
  [
    join(ROOT_PATH, ".commitlintrc.json"),
    join(ASSETS_SETUP_PATH, ".commitlintrc.json")
  ],
  [
    join(OVERRIDES_PATH, ".eslintrc.json"),
    join(ASSETS_SETUP_PATH, ".eslintrc.json")
  ],
  [
    join(ROOT_PATH, ".lintstagedrc.json"),
    join(ASSETS_SETUP_PATH, ".lintstagedrc.json")
  ],
  [
    join(OVERRIDES_PATH, ".prettierignore"),
    join(ASSETS_SETUP_PATH, ".prettierignore")
  ],
  [
    join(OVERRIDES_PATH, ".prettierrc.json"),
    join(ASSETS_SETUP_PATH, ".prettierrc.json")
  ],
  [
    join(ROOT_PATH, ".renovaterc.json"),
    join(ASSETS_SETUP_PATH, ".renovaterc.json")
  ],
  [
    join(ROOT_PATH, "tsconfig.json"),
    join(ASSETS_SETUP_PATH, "tsconfig.json")
  ]
];

export const ASSETS_SETUP_RAW_PATH = join(
  ASSETS_SETUP_PATH,
  "raw"
);

export const ASSETS_SETUP_RAW_FILES = [
  [join(ASSETS_SETUP_PATH, "raw", "json.json"), RAW_JSON],
  [join(ASSETS_SETUP_PATH, "raw", "txt.txt"), RAW_TXT]
];
