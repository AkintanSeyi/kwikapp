import { keyframes, styled } from "@mui/material";

export const Feature = styled("div")({
  width: "100vw",
  height: "50vh",
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

export const Feature_Holder = styled("div")({
  width: "85%",
  height: "85%",

  display: "flex",
  justifyContent: "space-evenly",
  "@media (max-width : 62.5em)": {
    height: "fit-content",
    display: "block",
  },
});

export const Feature_InnerDiv = styled("div")({
  width: "30%",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  padding: "10px",
  justifyContent: "center",

  alignItems: "center",
  "@media (max-width : 62.5em)": {
    width: "100%",
    height: "fit-content",
    marginBottom: "50px",
  },
});

export const Feature_InnerDiv_Text = styled("h3")({
  textTransform: "uppercase",
  color: "#00BF6F",

  marginBottom: "-10px",
});

export const Feature_InnerDiv_Icon_Div = styled("div")({
  width: "75px",
  height: "75px",
  fontSize: "35px",
  marginBottom: "18px",
  borderRadius: "50%",
  border: "1px solid black",
  display: "flex",

  justifyContent: "center",
  alignItems: "center",
});
