import clsx from "clsx";

import { Flex, type FlexProps } from "./Flex";

export interface StackProps extends FlexProps {}

export const Stack = ({
  children,
  className,
  ...props
}: StackProps) => (
  <Flex className={clsx("flex-col", className)} {...props}>
    {children}
  </Flex>
);
