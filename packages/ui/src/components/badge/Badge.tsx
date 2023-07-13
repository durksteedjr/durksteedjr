import clsx from "clsx";
import type { HTMLAttributes } from "react";

const variants = {
  default: "",
  hover: "hover:bg-gray-100"
};

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variants;
}

export const Badge = ({
  children,
  className,
  variant = "default",
  ...props
}: BadgeProps) => (
  <div
    className={clsx(
      "w-fit rounded-xl border px-4 py-2 text-sm md:text-base",
      variants[variant],
      className
    )}
    {...props}
  >
    {children}
  </div>
);
