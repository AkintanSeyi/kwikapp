import { keyframes, styled } from "@mui/material";

export const Slider = styled("div")({
  width: "100vw",
  height: "78vh",
  display: "flex",
  transition: "all 2s",

  "@media (max-width : 62.5em)": {
    height: "42vh",
  },
  "@media (max-width : 30em)": {
    height: "fit-content",
  },
});

export const Slider_FirstHolder = styled("div")({
  width: "49.5%",
  height: "100%",
  position: "relative",
  "@media (max-width : 62.5em)": {
    display: "none",
  },
});

export const Slider_AnimationDotDIv = styled("div")({
  width: "35px",
  height: "30px",
  zIndex: "30",
  position: "absolute",
  bottom: "5%",
  left: "-16px",
  display: "flex",
  alignItems: "center",
  zIndex: "1000",
  justifyContent: "space-between",
  "@media (max-width : 62.5em)": {
    left: "48.3%",
  },
});
export const Slider_AnimationDot = styled("div")({
  width: "7px",
  height: "7px",
  cursor: "pointer",
  backgroundColor: "#bec2c5",
  borderRadius: "50%",
});

export const Slider_SectionHolder = styled("div")({
  width: "50.5%",
  height: "100%",
  backgroundColor: "#f8f9fa",
  display: "flex",
  justifyContent: "center",
  position: "relative",
  alignItems: "center",
  "@media (max-width : 62.5em)": {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
  },
});

export const Slider_SectionHolderHolder = styled("div")({
  width: "85%",
  height: "80%",
  padding: "20px",
  color: "#262839",

  "@media (max-width : 62.5em)": {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  "@media (max-width : 37.5em)": {
    width: "80%",
  },
  "@media (max-width : 30em)": {
    width: "90%",
    height: "70%",
    padding: "35px 0px 95px 0px",
  },
});
export const Slider_SectionRaedDiv = styled("div")({
  width: "100%",
  height: "fit-content",
  marginTop: "30px",
  "@media (max-width : 62.5em)": {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export const Slider_SectionFirstImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
export const Slider_SectionFirstDivArrow = styled("div")({
  width: "35px",
  height: "35px",
  position: "absolute",
  color: "#262839",
  fontSize: "45px",
  left: "-102%",
  top: "40%",
  "@media (max-width : 62.5em)": {
    left: "-3%",
  },
  "@media (max-width : 37.5em)": {
    left: "-7.5%",
  },
  "@media (max-width : 37.5em)": {
    left: "-10.5%",
    top: "22%",
  },
});

export const Slider_SectionSecondDivArrow = styled("div")({
  width: "35px",
  height: "35px",
  position: "absolute",
  color: "#262839",
  fontSize: "45px",
  right: "0%",
  top: "40%",
  "@media (max-width : 37.5em)": {
    right: "-2.5%",
  },
  "@media (max-width : 30em)": {
    right: "-7%",
    top: "22%",
  },
});
export const Slider_SectionReadIconDiv = styled("div")({
  width: "20px",
  height: "20px",
});

export const Slider_SectionHolder_ReadPara = styled("p")({
  fontSize: "15px",
  textAlign: "start",
  cursor: "pointer",
  textTransform: "capitalize",
  color: "#00BF6F",
  fontWeight: "bold",
  "@media (max-width : 62.5em)": {
    textAlign: "center",
    fontSize: "16.5px",
  },
});

export const Slider_SectionHolder_Header = styled("h3")({
  fontSize: "36px",
  textAlign: "center",
  fontWeight: "bold",
  marginBottom: "35px",
  "@media (max-width : 37.5em)": {
    fontSize: "30px",
  },
  "@media (max-width : 30em)": {
    fontSize: "23px",
    marginBottom: "25px",
  },
});

export const Slider_SectionHolder_Para = styled("p")({
  fontSize: "17px",
  lineHeight: "1.5",
  fontWeight: "300",
  fontFamily: "monospace",
  color: "#262839",
  "@media (max-width : 30em)": {
    fontSize: "15px",
  },
});
