import moonlitii from "@configs/moonlitii/moonlitii.json";
import type { BoxProps } from "@durksteedjr/ui";
import { Box } from "@durksteedjr/ui";
import clsx from "clsx";

export interface SnippetProps extends BoxProps {}

export const Snippet = ({
  children,
  className,
  ...props
}: SnippetProps) => (
  <Box
    className={clsx("", className)}
    style={{ color: moonlitii.colors.foreground }}
    {...props}
  >
    <pre>
      <code>{children}</code>
    </pre>
  </Box>
);
