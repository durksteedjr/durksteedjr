import { Grid } from "@durksteedjr/ui";

import { StyledBox } from "./components";

export const Example = () => (
  <Grid>
    <StyledBox />
    <StyledBox />
  </Grid>
);

export const Styled = () => (
  <Grid className="gap-4">
    <StyledBox />
    <StyledBox />
  </Grid>
);
