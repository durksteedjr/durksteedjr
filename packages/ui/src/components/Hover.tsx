import clsx from "clsx";

import type { SpanProps } from "./Span";
import { Span } from "./Span";

export interface HoverProps extends SpanProps {}

export const Hover = ({
  children,
  className,
  ...props
}: SpanProps) => (
  <Span
    className={clsx(
      "text-gray-500 hover:text-inherit",
      className
    )}
    {...props}
  >
    {children}
  </Span>
);
