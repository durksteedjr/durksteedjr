import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface BadgeContentProps
  extends HTMLAttributes<HTMLSpanElement> {}

export const BadgeContent = ({
  children,
  className,
  ...props
}: BadgeContentProps) => (
  <span className={clsx(className)} {...props}>
    {children}
  </span>
);
