import type { BoxProps } from "@durksteedjr/ui";
import { Box } from "@durksteedjr/ui";
import clsx from "clsx";

export interface OverlayGridProps extends BoxProps {}

export const OverlayGrid = ({
  className,
  ...props
}: OverlayGridProps) => (
  <Box
    className={clsx(
      "absolute inset-0 top-0 -z-10 h-screen max-h-[1000px] w-screen bg-[linear-gradient(rgba(0,0,0,0.0375)_1px,rgba(255,255,255,0)_1px),linear-gradient(90deg,rgba(0,0,0,0.0375)_1px,rgba(255,255,255,0)_1px)] bg-[length:2rem_2rem] [mask-image:linear-gradient(175deg,rgba(255,255,255,0)_5%,rgba(255,255,255,1)_20%,rgba(255,255,255,0)_60%)] lg:bg-[length:3rem_3rem]",
      className
    )}
    {...props}
  />
);
