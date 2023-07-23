import clsx from "clsx";
import type { HTMLAttributes } from "react";

export interface H1Props
  extends HTMLAttributes<HTMLHeadingElement> {}

export const H1 = ({
  children,
  className,
  ...props
}: H1Props) => (
  <h1
    className={clsx(
      "text-2xl font-extrabold sm:!text-4xl md:!text-5xl [@media(min-width:355px)]:text-3xl",
      className
    )}
    {...props}
  >
    {children}
  </h1>
);
