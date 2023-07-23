import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface H3Props
  extends HTMLAttributes<HTMLHeadingElement> {
  anchor?: boolean;
}

export const H3 = ({
  anchor = true,
  children,
  className,
  id,
  ...props
}: H3Props) => (
  <h3
    className={clsx(
      "mt-8 text-xl font-bold md:mt-12 md:text-2xl",
      { relative: anchor },
      className
    )}
    id={id}
    {...props}
  >
    {anchor && (
      <a className="absolute h-full w-full" href={`#${id}`} />
    )}
    {children}
  </h3>
);
