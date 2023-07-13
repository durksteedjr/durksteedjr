import clsx from "clsx";
import type { HTMLAttributes } from "react";

const variants = {
  default: "",
  hover: "hover:bg-gray-100"
};

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variants;
}

export const Card = ({
  children,
  className,
  variant = "default",
  ...props
}: CardProps) => (
  <div
    className={clsx(
      "flex flex-col gap-y-1 rounded-xl border px-6 py-4 md:gap-y-1.5",
      variants[variant],
      className
    )}
    {...props}
  >
    {children}
  </div>
);
