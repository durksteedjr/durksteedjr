export const RAW_JSON = `${JSON.stringify(
  {
    scripts: {
      commitlint: "commitlint",
      eslint: "eslint",
      husky: "husky",
      "husky:commitlint": "commitlint --edit",
      "husky:lint-staged": "lint-staged",
      lint: "pnpm lint:eslint && pnpm lint:prettier",
      "lint-staged": "lint-staged",
      "lint:eslint":
        "eslint --fix './**/*.{js,json,jsx,ts,tsx,yaml}'",
      "lint:prettier": "prettier --write ./",
      prepare: "pnpm prepare:husky",
      "prepare:husky": "husky install",
      prettier: "prettier"
    },
    pnpm: {
      peerDependencyRules: {
        allowedVersions: {
          "@typescript-eslint/eslint-plugin": "^6.0.0"
        }
      }
    }
  },
  null,
  2
)}\n`;

export const RAW_TXT =
  "pnpm i @commitlint/cli @commitlint/config-conventional @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-json eslint-plugin-prettier eslint-plugin-simple-import-sort eslint-plugin-unused-imports eslint-plugin-yaml husky lint-staged prettier prettier-plugin-packagejson -D\n\nchmod ug+x .husky/*\n";
