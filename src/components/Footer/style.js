import { keyframes, styled } from "@mui/material";

export const Footer = styled("div")({
  width: "100vw",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media (max-width : 62.5em)": {
    height: "100px",
  },
});

export const Footer_Holder = styled("div")({
  width: "65%",
  height: "80%",
  display: "flex",
  // backgroundColor: "red",
  justifyContent: "space-between",
  alignItems: "center",

  "@media (max-width : 62.5em)": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "80%",
    alignContent: "center",
  },
});

export const Footer_IconDiv = styled("div")({
  width: "250px",
  height: "30px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  "@media (max-width : 30em)": {
    width: "fit-content",
  },
});

export const Footer_TermPara = styled("h5")({
  textTransform: "capitalize",
  color: "#262839",
  textAlign: "end",
  "@media (max-width : 30em)": {
    fontSize: "10px",
  },
});

export const Footer_Icon = styled("div")({
  width: "35px",
  height: "100%",
  fontSize: "25px",
  marginRight: "7px",
  color: "#262839",
  "@media (max-width : 62.5em)": {
    marginRight: "0px",
  },
  "@media (max-width : 30em)": {
    fontSize: "22.5px",
  },
  "@media (max-width : 30em)": {
    fontSize: "18px",
  },
});

export const Footer_CreatedDatePara = styled("p")({
  textTransform: "capitalize",
  fontSize: "14px",
  fontWeight: "bold",
  color: "#262839",
  textAlign: "end",
  "@media (max-width : 62.5em)": {
    textAlign: "start",
  },
  "@media (max-width : 30em)": {
    fontSize: "10px",
  },
});
