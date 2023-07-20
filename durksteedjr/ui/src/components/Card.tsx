import clsx from "clsx";

import type { BoxProps } from "./Box";
import { Box } from "./Box";

export interface CardProps extends BoxProps {
  isHover?: boolean;
}

export const Card = ({
  children,
  className,
  isHover = false,
  ...props
}: CardProps) => (
  <Box
    className={clsx(
      "flex flex-col gap-y-0.5 rounded-xl border bg-white px-4 py-4 md:gap-y-1 md:px-6",
      { "hover:bg-gray-100/50": isHover },
      className
    )}
    {...props}
  >
    {children}
  </Box>
);
