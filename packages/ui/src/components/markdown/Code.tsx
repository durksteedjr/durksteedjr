import clsx from "clsx";

import type { BoxProps } from "../core";

export interface CodeProps extends BoxProps {}

export const Code = ({
  children,
  className,
  ...props
}: CodeProps) => (
  <code className={clsx("font-mono", className)} {...props}>
    {children}
  </code>
);
