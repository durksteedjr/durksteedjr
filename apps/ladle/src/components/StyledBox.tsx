import { Box, type BoxProps } from "@durksteedjr/ui";
import clsx from "clsx";

export interface StyledBoxProps extends BoxProps {}

export const StyledBox = ({
  children,
  className,
  ...props
}: StyledBoxProps) => (
  <Box
    className={clsx(
      "h-8 w-16 animate-pulse rounded border border-green-800 bg-green-400",
      className
    )}
    {...props}
  >
    {children}
  </Box>
);
