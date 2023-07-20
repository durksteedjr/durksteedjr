import clsx from "clsx";

import { Box, type BoxProps } from "./Box";

export interface SpacerProps extends BoxProps {}

export const Spacer = ({
  children,
  className,
  ...props
}: SpacerProps) => (
  <Box className={clsx("grow", className)} {...props}>
    {children}
  </Box>
);
