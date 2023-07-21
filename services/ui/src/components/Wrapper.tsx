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
      "[&_pre]:!md:mt-8 [&_h1]:!text-4xl [&_h1]:!font-extrabold [&_h1]:md:!text-5xl [&_h2]:!mt-8 [&_h2]:!border-none [&_h2]:!text-3xl [&_h2]:!font-extrabold [&_h2]:md:!mt-12 [&_h2]:md:!text-4xl [&_p]:!mt-4 [&_p]:md:!mt-8 [&_pre]:!mt-4 [&_pre]:!overflow-x-scroll [&_pre]:!rounded-xl [&_pre]:!bg-gray-800 [&_pre]:!p-4 [&_pre]:!font-mono [&_pre]:md:!px-6",
      className
    )}
    {...props}
  >
    {children}
  </Box>
);
