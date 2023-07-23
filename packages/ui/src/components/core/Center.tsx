import clsx from "clsx";

import { Box, type BoxProps } from "./Box";

export interface CenterProps extends BoxProps {}

export const Center = ({
  children,
  className,
  ...props
}: CenterProps) => (
  <Box className={clsx("mx-auto", className)} {...props}>
    {children}
  </Box>
);
