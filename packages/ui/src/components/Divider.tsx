import clsx from "clsx";

import { Box, type BoxProps } from "./Box";

export interface DividerProps extends BoxProps {}

export const Divider = ({
  children,
  className,
  ...props
}: DividerProps) => (
  <Box
    className={clsx(
      "h-[1px] w-full rounded bg-gray-200",
      className
    )}
    {...props}
  >
    {children}
  </Box>
);
