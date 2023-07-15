import clsx from "clsx";

import { Box, type BoxProps } from "./Box";

export interface FlexProps extends BoxProps {}

export const Flex = ({
  children,
  className,
  ...props
}: FlexProps) => (
  <Box className={clsx("flex", className)} {...props}>
    {children}
  </Box>
);
