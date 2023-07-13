import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface CardTitleProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export const CardTitle = ({
  children,
  className,
  ...props
}: CardTitleProps) => (
  <h2
    className={clsx(
      "text-xl font-medium md:text-2xl",
      className
    )}
    {...props}
  >
    {children}
  </h2>
);
