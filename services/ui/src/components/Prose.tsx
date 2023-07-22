import type { BoxProps } from "@durksteedjr/ui";
import { Box } from "@durksteedjr/ui";
import clsx from "clsx";

export interface ProseProps extends BoxProps {}

export const Prose = ({
  children,
  className,
  ...props
}: ProseProps) => (
  <Box
    className={clsx(
      "[&_h1]:xs:!text-3xl [&_code]:!text-sm [&_code]:!font-light [&_h1]:!text-2xl [&_h1]:!font-extrabold [&_h1]:sm:!text-4xl [&_h1]:md:!text-5xl [&_h2]:!relative [&_h2]:!mb-0 [&_h2]:!mt-12 [&_h2]:!border-none [&_h2]:!p-0 [&_h2]:!text-2xl [&_h2]:!font-bold [&_h2]:md:!mt-16 [&_h2]:md:!text-3xl [&_h2_a]:!absolute [&_h2_a]:!h-full [&_h2_a]:!w-full [&_h3]:!relative [&_h3]:!mt-8 [&_h3]:!text-xl [&_h3]:!font-bold [&_h3]:md:!mt-12 [&_h3]:md:!text-2xl [&_h3_a]:!absolute [&_h3_a]:!h-full [&_h3_a]:!w-full [&_p]:!mt-4 [&_p]:!text-gray-500 [&_p]:md:!mt-6 [&_p_a]:!border-b [&_p_a]:!border-cyan-800/20 [&_p_a]:!font-medium [&_p_a]:!text-cyan-800 hover:[&_p_a]:!text-cyan-900 [&_p_code]:!font-mono [&_p_code]:!font-bold [&_p_code]:!text-gray-800 [&_pre]:!mt-4 [&_pre]:!overflow-x-scroll [&_pre]:!rounded-xl [&_pre]:!bg-gray-800 [&_pre]:!px-5 [&_pre]:!py-3 [&_pre]:!font-mono [&_pre]:md:!mt-6",
      className
    )}
    {...props}
  >
    {children}
  </Box>
);
