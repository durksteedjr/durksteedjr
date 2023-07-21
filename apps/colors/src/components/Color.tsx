"use client";

import type { BoxProps } from "@durksteedjr/ui";
import { Box } from "@durksteedjr/ui";
import clsx from "clsx";

import { useCopy } from "../hooks";

export interface ColorProps extends BoxProps {
  hex: string;
}

export const Color = ({ hex }: ColorProps) => {
  const [copy, isCopied] = useCopy({ string: hex });

  return (
    <button onClick={() => copy()} type="submit">
      <Box
        className={clsx(
          "h-16 w-full rounded-xl border border-gray-200",
          { "ring-4 ring-cyan-400": isCopied }
        )}
        style={{ backgroundColor: hex }}
      />
    </button>
  );
};
