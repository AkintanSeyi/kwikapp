import { keyframes, styled } from "@mui/material";

export const ThirdBody = styled("div")({
  width: "100vw",
  height: "100%",
  top: "63.2%",

  // left: "40%",
  //  zIndex: "60",
  display: "flex",
  position: "absolute",
  "@media (max-width : 62.5em)": {
    top: "62.2%",
    display: "block",
  },
});

export const ThirdBody_First = styled("div")({
  width: "46%",
  height: "100%",
  display: "flex",
  marginTop: "105px",
  color: "white",
  justifyContent: "end",

  "@media (max-width : 62.5em)": {
    width: "100%",
    height: "fit-content",
    display: "block",
    padding: "0px 2px 2px 92px",
  },
  "@media (max-width : 37.5em)": {
    paddingLeft: "45px",
  },
});

export const ThirdBody_First_holder = styled("div")({
  width: "68%",

  height: "100%",
  flexDirection: "column",
  // width: "50%",
  display: "flex",
  "@media (max-width : 62.5em)": {
    width: "90%",
  },
  "@media (max-width : 37.5em)": {
    width: "90%",

    marginTop: "150px",
    // height: "600px",
  },
  "@media (max-width : 30em)": {
    marginTop: "160px",
  },
});

export const ThirdBody_SecodDotDiv = styled("div")({
  width: "190x",
  height: "500px",
  position: "absolute",
  top: "-15%",
  right: "16%",
  zIndex: "2",
  "@media (max-width : 62.5em)": {
    top: "-480px",
    right: "4%",
    height: "450px",
  },
  "@media (max-width : 37.5em)": {
    top: "-550px",
    right: "-10%",
    height: "450px",
  },
});

export const ThirdBody_SecodDotDivImg = styled("img")({
  width: "100%",
  objectFit: "cover",
  height: "100%",
});

export const ThirdBody_Second = styled("div")({
  width: "54%",
  height: "100%",
  position: "relative",

  // display: "flex",
  //justifyContent: "end",
  //alignItems: "end",
  "@media (max-width : 62.5em)": {
    width: "100%",
    height: "fit-content",
  },
  "@media (max-width : 37.5em)": {
    //  width: "100%",
    //  height: "fit-content",
  },
});

export const ThirdBody_SecondImg = styled("img")({
  width: "100%",
  zIndex: "20",
  position: "relative",
  height: "37.75%",
  objectFit: "cover",
  "@media (max-width : 62.5em)": {
    top: "-40px",

    height: "680px",
  },
  "@media (max-width : 37.5em)": {
    top: "-75px",
    objectFit: "contain",
    // height: "600px",
  },
  "@media (max-width : 30em)": {
    top: "-85px",
    objectFit: "contain",
    // height: "600px",
  },
});
