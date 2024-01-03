import { keyframes, styled } from "@mui/material";

export const BodyHeader = styled("div")({
  width: "100vw",
  height: "15vh",
  overflowX: "hidden",
  marginTop: "50px",
  display: "flex",
  marginTop: "60px",

  justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 62.5em)": {
    height: "fit-content",
  },
});

export const BodyHeader_Para = styled("h1")({
  textTransform: "capitalize",
  "@media (max-width : 37.5em)": {
    fontSize: "25px",
  },
});
