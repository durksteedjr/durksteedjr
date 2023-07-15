import { Flex } from "@durksteedjr/ui";

import { StyledBox } from "./components";

export const Example = () => (
  <Flex>
    <StyledBox />
    <StyledBox />
  </Flex>
);

export const Styled = () => (
  <Flex className="space-x-4">
    <StyledBox />
    <StyledBox />
  </Flex>
);
