import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface PreProps
  extends HTMLAttributes<HTMLPreElement> {}

export const Pre = ({
  children,
  className,
  ...props
}: PreProps) => (
  <pre
    className={clsx(
      "mt-4 overflow-x-scroll rounded-xl bg-gray-800 px-4 py-3 md:mt-6 md:px-5 [&_code]:text-sm [&_code]:font-light",
      className
    )}
    {...props}
  >
    {children}
  </pre>
);
