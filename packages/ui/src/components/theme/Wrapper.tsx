import clsx from "clsx";

import type { BoxProps } from "../core";
import { Box } from "../core";

export interface WrapperProps extends BoxProps {}

export const Wrapper = ({
  children,
  className,
  ...props
}: WrapperProps) => (
  <Box
    className={clsx(
      "text-gray-800 antialiased md:text-lg [&_*]:transition-all",
      className
    )}
    {...props}
  >
    {children}
  </Box>
);
