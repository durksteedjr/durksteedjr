import { Stack } from "@durksteedjr/ui";

import { StyledBox } from "./components";

export const Example = () => (
  <Stack>
    <StyledBox />
    <StyledBox />
  </Stack>
);

export const Styled = () => (
  <Stack className="space-y-4">
    <StyledBox />
    <StyledBox />
  </Stack>
);
