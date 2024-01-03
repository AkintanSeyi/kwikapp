import { keyframes, styled } from "@mui/material";

export const Header = styled("div")({
  width: "100vw",
  height: "75px",
  overflowX: "hidden",
  position: "sticky",
  top: "-2%",
  zIndex: "500",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 62.5em)": {
    position: "static",
  },
});

export const DottedNavBox = styled("div")({
  width: "80px",
  height: "100%",
  backgroundColor: "#262839",
  // marginRight: "-5px",

  /// paddingRight: "7px",
  display: "none",
  "@media (max-width : 62.5em)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    justifyContent: "center",
  },
});
export const DottedNavBoxLineCrossOne = styled("div")({
  width: "40%",
  marginBottom: "3.5px",
  height: "5px",
  transform: "rotate(-140deg) translateY(-4px) translateX(-2px)",
  borderRadius: "8px",
  backgroundColor: "white",
});
export const DottedNavBoxLineCrossTwo = styled("div")({
  width: "40%",
  marginBottom: "3.5px",
  height: "5px",
  transform: "rotate(138deg)  translateY(4px)  translateX(-2px)",
  borderRadius: "8px",
  backgroundColor: "white",
});
export const DottedNavBoxLine = styled("div")({
  width: "40%",
  marginBottom: "3.5px",
  height: "5px",
  borderRadius: "8px",
  backgroundColor: "white",
});
export const Header_Holder = styled("div")({
  width: "97%",
  height: "85%",
  display: "flex",

  padding: "10px",
  "@media (max-width : 62.5em)": {
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    height: "100%",
    width: "100%",
  },
});
export const Header_Icon_Div = styled("div")({
  width: "17%",
  height: "100%",
  padding: "10px",
  "@media (max-width : 62.5em)": {
    paddingTop: "20px",
  },
  "@media (max-width : 37.5em)": {
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
export const Header_Navbar_Div = styled("div")({
  width: "83%",
  fontSize: "13.9px",
  textTransform: "capitalize",
  padding: "10px",
  height: "100%",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@media (max-width : 62.5em)": {
    display: "none",
  },
});
export const Header_Icon = styled("img")({});

export const Header_Icon_Text = styled("h5")({
  cursor: "pointer",
  color: "black",
  transition: "all .5s",
  "&:hover": {
    color: "rgb(131, 127, 127)",
  },
});

export const Header_SigninAndSignUp = styled("div")({
  width: "220px",
  marginRight: "20px",
  height: "100%",
  padding: "4.5px 7.5px 4.5px 7.5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media (max-width : 62.5em)": {
    display: "none",
  },
});

export const Header_SigninAndSignUpButton = styled("button")({
  width: "fit-content",
  borderRadius: "4px",
  outline: "none",
  border: "none",
  textTransform: "capitalize",
  fontSize: "13px",
  fontWeight: "bold",
  height: "100%",
  padding: "1.5px 8px 1.5px 8px",
  backgroundColor: "#00BF6F",
  color: "white",
  cursor: "pointer",
  transition: "all .8s",
  "&:hover": {
    backgroundColor: "#25e293",
  },
});

export const Header_SigninAndSignUpButtonSignUp = styled("button")({
  width: "fit-content",
  transition: "all .8s",
  borderRadius: "4px",
  cursor: "pointer",
  outline: "none",
  border: "1px solid black",
  color: "black",
  textTransform: "capitalize",
  fontSize: "13px",
  fontWeight: "bold",
  height: "100%",
  padding: "1px 8px 1.5px 8px",
  "&:hover": {
    color: "rgb(131, 127, 127)",
  },
});
