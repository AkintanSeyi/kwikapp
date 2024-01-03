import { keyframes, styled } from "@mui/material";

export const SubFooter = styled("div")({
  width: "100vw",
  height: "82.5vh",
  backgroundColor: "#262839",
  overflowX: "hidden",
  "@media (max-width : 62.5em)": {
    height: "fit-content",
  },
});

export const SubFooter_First = styled("div")({
  width: "100%",
  height: "57.5%",

  display: "flex",
  // alignItems: "center",
  justifyContent: "center",
  "@media (max-width : 62.5em)": {
    height: "fit-content",
  },
});

export const SubFooter_First_Holder = styled("div")({
  width: "75%",
  height: "85%",
  display: "flex",
  justifyContent: "space-evenly",
  "@media (max-width : 62.5em)": {
    display: "block",
    width: "85%",
    marginLeft: "8px",
  },
});

export const SubFooter_Second = styled("div")({
  width: "100%",
  height: "42.5%",
  display: "flex",
  justifyContent: "center",
  "@media (max-width : 62.5em)": {
    height: "fit-content",
  },
});

export const SubFooter_First_Holder_IconDiv = styled("div")({
  width: "100%",
  height: "20px",
  display: "flex",
  marginTop: "33px",
  cursor: "pointer",
  color: "#262839",
  justifyContent: "center",
});

export const SubFooter_First_Holder_IconDivPara = styled("h4")({
  fontSize: "14.5px",
  textTransform: "capitalize",

  marginLeft: "15px",
});

export const SubFooter_InnerDiv = styled("div")({
  width: "26%",
  borderRadius: "8px",
  backgroundColor: "white",
  height: "100%",
  padding: "30px",
  boxShadow: "0 0px 4px rgba(0,0,0.15)",
  display: "flex",
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

export const SubFooter_Second_Holder = styled("div")({
  width: "67%",
  height: "85%",
  display: "flex",
  justifyContent: "space-evenly",
  "@media (max-width : 62.5em)": {
    height: "fit-content",
    display: "block",
    width: "84%",
  },
});

export const SubFooter_Second_Holder_FirstHolder = styled("div")({
  width: "50%",
  height: "100%",
  position: "relative",
  display: "flex",
  "@media (max-width : 62.5em)": {
    width: "100%",
  },
  "@media (max-width : 37.5em)": {
    display: "block",
  },
});

export const SubFooter_Second_Holder_FirstHolderUl = styled("div")({
  width: "100%",
  height: "fit-content",
  // marginRight: "40px",

  padding: "4px 2px 2px 15px",
  color: "white",
});

export const SubFooter_Second_Holder_FirstHolderHeaderLi = styled("h3")({
  marginBottom: "8px",
  width: "100%",
  fontWeight: "bold",
  color: "#00BF6F",
  marginBottom: "20px",
});
export const SubFooter_Second_Holder_FirstHolderLi = styled("p")({
  marginBottom: "16px",
  fontSize: "13px",
  "@media (max-width : 30em)": {
    fontSize: "12px",
  },
});

export const SubFooter_Second_Holder_FirstHolderDiv = styled("p")({
  width: "50%",

  "@media (max-width : 37.5em)": {
    width: "100%",
  },
});
export const SubFooter_Second_Holder_SecondHolder = styled("div")({
  width: "50%",
  height: "100%",
  position: "relative",
  "@media (max-width : 62.5em)": {
    width: "100%",
    marginTop: "60px",
    marginBottom: "35px",
  },
});

export const SubFooter_Second_Holder_SecondHolderDiv = styled("div")({
  width: "270px",
  height: "55px",

  marginTop: "20px",
  display: "flex",
  paddingTop: "5px",
  "@media (max-width : 62.5em)": {},
});

export const SubFooter_Second_Holder_SecondHoldelDotImg = styled("img")({
  width: "100%",
  height: "100%",
});

export const SubFooter_Second_Holder_SecondHoldelDotImgDiv = styled("div")({
  width: "150px",
  height: "160px",
  position: "absolute",
  right: "112.5%",
  top: "20%",
  "@media (max-width : 62.5em)": {
    left: "-20%",
    top: "60%",
    height: "180px",
  },
  "@media (max-width : 37.5em)": {
    display: "none",
  },
});
export const SubFooter_Second_Holder_SecondHoldelRightDotImgDiv = styled("div")(
  {
    width: "150px",
    height: "160px",
    position: "absolute",
    right: "-40%",
    top: "20%",
    "@media (max-width : 62.5em)": {
      right: "-20%",
      top: "-145%",
      height: "180px",
    },
    "@media (max-width : 37.5em)": {
      display: "none",
    },
  }
);

export const SubFooter_Second_Holder_SecondHolderDivImg = styled("img")({
  width: "50%",
  height: "90%",
  marginRight: "20px",
  borderRadius: "8px",
});
