"use client";

import copyToClipboard from "copy-to-clipboard";
import { useState } from "react";

export interface UseCopyProps {
  string: string;
}

export const useCopy = ({
  string
}: UseCopyProps): [() => void, boolean] => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = () => {
    setIsCopied(true);

    copyToClipboard(string);

    setTimeout(() => setIsCopied(false), 2000);
  };

  return [copy, isCopied];
};
