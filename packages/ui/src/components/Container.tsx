import clsx from "clsx";

import { Center, type CenterProps } from "./Center";

export interface ContainerProps extends CenterProps {}

export const Container = ({
  children,
  className,
  ...props
}: CenterProps) => (
  <Center className={clsx("max-w-3xl", className)} {...props}>
    {children}
  </Center>
);
