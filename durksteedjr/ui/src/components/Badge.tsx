import clsx from "clsx";

import type { BoxProps } from "./Box";
import { Box } from "./Box";

export interface BadgeProps extends BoxProps {
  isHover?: boolean;
}

export const Badge = ({
  children,
  className,
  isHover = false,
  ...props
}: BadgeProps) => (
  <Box
    className={clsx(
      "rounded-xl border bg-white px-4 py-2 text-sm md:text-base",
      { "hover:bg-gray-100/50": isHover },
      className
    )}
    {...props}
  >
    {children}
  </Box>
);
