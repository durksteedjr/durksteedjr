import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface AProps
  extends HTMLAttributes<HTMLAnchorElement> {}

export const A = ({ children, className, ...props }: AProps) => (
  <a
    className={clsx(
      "border-b border-cyan-800/20 font-medium text-cyan-800 hover:border-cyan-900/20 hover:text-cyan-900",
      className
    )}
    {...props}
  >
    {children}
  </a>
);
