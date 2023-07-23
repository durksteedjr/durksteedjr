import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface BoxProps
  extends HTMLAttributes<HTMLDivElement> {}

export const Box = ({
  children,
  className,
  ...props
}: BoxProps) => (
  <div className={clsx(className)} {...props}>
    {children}
  </div>
);
