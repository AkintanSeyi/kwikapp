import { keyframes, styled } from "@mui/material";

export const WhatAppicon = styled("div")({
  width: "100vw",
  height: "fit-content",
  overflowX: "hidden",
  position: "fixed",
  display: "flex",
  bottom: "2.5%",

  right: "4%",
  zIndex: "900",
  justifyContent: "end",
  alignItems: "center",
  "@media (max-width : 37.5em)": {
    right: "6%",
    bottom: "2.5%",
  },
});

export const WhatAppicon_Div = styled("div")({
  width: "60px",
  height: "60px",
  fontSize: "35px",
  cursor: "pointer",
  color: "white",
  display: "flex",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: "#00bf6f",

  alignItems: "center",
  "@media (max-width : 37.5em)": {
    width: "50px",
    height: "50px",
    fontSize: "30px",
  },
});
