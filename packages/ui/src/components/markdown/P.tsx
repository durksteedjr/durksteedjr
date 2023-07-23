import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface PProps
  extends HTMLAttributes<HTMLParagraphElement> {}

export const P = ({ children, className, ...props }: PProps) => (
  <p
    className={clsx(
      "mt-4 text-gray-500 md:mt-6 [&_code]:rounded [&_code]:bg-gray-100 [&_code]:px-1.5 [&_code]:py-[0.125rem] [&_code]:font-mono [&_code]:font-medium [&_code]:text-gray-600",
      className
    )}
    {...props}
  >
    {children}
  </p>
);
