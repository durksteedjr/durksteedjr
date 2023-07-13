import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface CardDescriptionProps
  extends HTMLAttributes<HTMLSpanElement> {}

export const CardDescription = ({
  children,
  className,
  ...props
}: CardDescriptionProps) => (
  <span
    className={clsx(
      "text-sm font-light text-gray-500 md:text-base"
    )}
    {...props}
  >
    {children}
  </span>
);
