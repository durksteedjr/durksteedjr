import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface CardContentProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export const CardContent = ({
  children,
  className,
  ...props
}: CardContentProps) => (
  <p className={clsx("md:text-lg", className)} {...props}>
    {children}
  </p>
);
