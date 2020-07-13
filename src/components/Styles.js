import { styled, Box } from "@material-ui/core";

export const HeaderBarContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "coral",
  height: 60,

  position: "fixed",
  top: 0,
  width: "100vw",
  zIndex: 1
});
