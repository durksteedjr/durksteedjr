import type { BoxProps } from "@durksteedjr/ui";
import { Box } from "@durksteedjr/ui";
import clsx from "clsx";

export interface WrapperProps extends BoxProps {}

export const Wrapper = ({
  children,
  className,
  ...props
}: WrapperProps) => (
  <Box
    className={clsx(
      "!text-gray-800 !antialiased md:!text-lg [&_*]:transition-all",
      className
    )}
    {...props}
  >
    {children}
  </Box>
);
