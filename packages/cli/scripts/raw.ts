export const RAW_JSON = `${JSON.stringify(
  {
    scripts: {
      build: "echo build",
      commitlint: "commitlint",
      "commitlint:edit": "pnpm commitlint --edit",
      dev: "pnpm turbo:dev",
      durksteedjr: "durksteedjr",
      eslint: "eslint",
      "eslint:lint":
        "pnpm eslint --fix './**/*.{js,json,jsx,ts,tsx,yaml}'",
      husky: "husky",
      "husky:commit-msg": "pnpm commitlint:edit",
      "husky:install": "pnpm husky install",
      "husky:pre-commit": "pnpm lint-staged",
      lint: "pnpm eslint:lint && pnpm prettier:lint",
      "lint-staged": "lint-staged",
      prepare: "pnpm husky:install",
      prettier: "prettier",
      "prettier:lint": "pnpm prettier --write ./",
      tsc: "tsc",
      "tsc:typecheck": "pnpm tsc --noEmit",
      typecheck: "pnpm tsc:typecheck"
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
  "pnpm i @commitlint/cli @commitlint/config-conventional @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-json eslint-plugin-prettier eslint-plugin-simple-import-sort eslint-plugin-unused-imports eslint-plugin-yaml husky lint-staged prettier prettier-plugin-packagejson typescript -D\n\nchmod ug+x .husky/*\n";
