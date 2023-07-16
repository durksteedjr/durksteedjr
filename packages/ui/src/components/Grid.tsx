import clsx from "clsx";

import { Box, type BoxProps } from "./Box";

export interface GridProps extends BoxProps {}

export const Grid = ({
  children,
  className,
  ...props
}: GridProps) => (
  <Box className={clsx("grid", className)} {...props}>
    {children}
  </Box>
);
