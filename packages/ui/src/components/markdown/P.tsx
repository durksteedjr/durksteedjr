import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface PProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export const P = ({ children, className, ...props }: PProps) => (
  <p
    className={clsx("mt-4 text-gray-500 md:mt-6", className)}
    {...props}
  >
    {children}
  </p>
);
