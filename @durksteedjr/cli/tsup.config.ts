import { defineConfig } from "tsup";

const config = defineConfig({
  clean: true,
  entry: ["src/index.ts"],
  format: ["esm"],
  minify: true,
});

export default config;
