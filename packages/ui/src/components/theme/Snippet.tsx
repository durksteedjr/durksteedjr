import clsx from "clsx";

import type { PreProps } from "../markdown";
import { Code, Pre } from "../markdown";

export interface SnippetProps extends PreProps {}

export const Snippet = ({
  children,
  className,
  ...props
}: SnippetProps) => (
  <Pre className={clsx("text-indigo-200", className)} {...props}>
    <Code>{children}</Code>
  </Pre>
);
