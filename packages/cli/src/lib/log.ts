import wordWrap from "word-wrap";

import { MAX_WIDTH, PAD } from "./constants";

export const log = (string: string) =>
  console.log(
    `${wordWrap(string, {
      indent: PAD,
      width: MAX_WIDTH
    })}\n`
  );
