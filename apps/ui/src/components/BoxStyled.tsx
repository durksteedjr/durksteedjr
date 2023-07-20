import type { BoxProps } from "@durksteedjr/ui";
import { Box } from "@durksteedjr/ui";
import clsx from "clsx";

export interface BoxStyledProps extends BoxProps {}

export const BoxStyled = ({
  children,
  className,
  ...props
}: BoxStyledProps) => (
  <Box
    className={clsx(
      "h-8 w-8 rounded-xl border border-indigo-600 bg-indigo-200 md:h-12 md:w-12",
      className
    )}
    {...props}
  >
    {children}
  </Box>
);
