import { keyframes, styled } from "@mui/material";

export const SecondBody = styled("div")({
  width: "100vw",
  height: "450px",

  top: "32.5%",

  // left: "40%",
  //  zIndex: "60",
  display: "flex",

  position: "absolute",
  "@media (max-width : 62.5em)": {
    top: "34%",
    display: "block",
  },
});

export const SecondBody_First = styled("div")({
  width: "50%",
  height: "100%",
  position: "relative",
  "@media (max-width : 62.5em)": {
    width: "100%",
    height: "100%",
  },
});

export const SecondBody_FirstImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  left: "-7%",
  "@media (max-width : 62.5em)": {
    left: ".5%",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  "@media (max-width : 37.5em)": {
    left: "-17%",
    width: "100%",
    height: "90%",
    top: "70px",
    objectFit: "cover",
  },
  "@media (max-width : 30.5em)": {
    left: "-14%",
    width: "100%",
    height: "100%",
    top: "30px",
    objectFit: "contain",
  },
});

export const SecondBody_Second = styled("div")({
  width: "50%",
  height: "60%",
  "@media (max-width : 62.5em)": {
    width: "100%",
    height: "60%",

    paddingLeft: "90px",
  },
  "@media (max-width : 37.5em)": {
    paddingLeft: "45px",
  },
});

export const SecondBody_SecondDiv = styled("div")({
  width: "100%",
  height: "100%",
  justifyContent: "center",
  display: "flex",
  width: "60%",
  color: "whitesmoke",
  flexDirection: "column",
  "@media (max-width : 62.5em)": {
    width: "90%",
  },
  "@media (max-width : 30em)": {
    height: "fit-content",
  },
});

export const SecondBody_SecondDivButon = styled("button")({
  width: "fit-content",
  outline: "none",
  cursor: "pointer",
  padding: "2px 10px 2px 10px",
  height: "30px",
  borderRadius: "3px",
  border: "none",
  fontSize: "15px",
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 30em)": {
    fontSize: "13.5px",
  },
});

export const SecondBody_SecondDivHeader = styled("h2")({
  // textAlign: "left",
  fontSize: "37px",
  marginBottom: "10px",
  "@media (max-width : 30em)": {
    fontSize: "31px",
  },
});

export const SecondBody_SecondDivPara = styled("h5")({
  textTransform: "capitalize",
  fontSize: "14px",
  lineHeight: "1.9",
  "@media (max-width : 30em)": {
    fontSize: "12.5px",
  },
});
