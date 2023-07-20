import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface SpanProps
  extends HTMLAttributes<HTMLSpanElement> {}

export const Span = ({
  children,
  className,
  ...props
}: SpanProps) => (
  <span className={clsx(className)} {...props}>
    {children}
  </span>
);
