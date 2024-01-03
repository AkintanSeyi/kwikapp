import { keyframes, styled } from "@mui/material";

export const FirstSubBody = styled("div")({
  top: "3.5%",
  // left: "40%",
  zIndex: "60",
  position: "absolute",
});

export const FirstSubBody_InnerDivPara = styled("p")({
  fontSize: "14.5px",
  textAlign: "center",
  marginTop: "20px",
  color: "#27283a",
  lineHeight: "2",
  width: "85%",
});

export const FirstSubBody_LeftDotDiv = styled("div")({
  width: "150px",
  left: "5px",
  // height: "300px",
  position: "absolute",
  top: "230px",
  "@media (max-width : 62.5em)": {
    top: "550px",
    left: "-95px",
  },
});

export const FirstSubBody_LeftDotImg = styled("img")({
  width: "100%",
  height: "100%",
});

export const FirstSubBody_InnerDiv = styled("div")({
  width: "26%",
  borderRadius: "8px",
  backgroundColor: "white",
  height: "290px",
  padding: "30px",
  display: "flex",
  boxShadow: "0 0px 2px rgba(0,0,0.15)",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 62.5em)": {
    width: "95%",
    height: "190px",
    marginBottom: "30px",
    boxShadow: "0 0px 4px rgba(0,0,0.15)",
  },
});

export const SubFooter_First = styled("div")({
  width: "100vw",
  height: "70.5%",

  display: "flex",
  // alignItems: "center",
  justifyContent: "center",
  "@media (max-width : 62.5em)": {
    height: "1200px",
    width: "100vw",
  },
});
