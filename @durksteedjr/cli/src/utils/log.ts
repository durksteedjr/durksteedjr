import { MAX_WIDTH, PAD } from "../lib";
import wordWrap from "word-wrap";

export const log = (string: string) =>
  console.log(
    `${wordWrap(string, {
      indent: PAD,
      width: MAX_WIDTH,
    })}\n`,
  );
