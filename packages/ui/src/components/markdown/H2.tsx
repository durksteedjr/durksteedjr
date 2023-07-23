import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface H2Props
  extends HTMLAttributes<HTMLHeadingElement> {
  anchor?: boolean;
}

export const H2 = ({
  anchor = true,
  children,
  className,
  id,
  ...props
}: H2Props) => (
  <h2
    className={clsx(
      "mt-12 text-2xl font-bold md:mt-16 md:text-3xl",
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
  </h2>
);
