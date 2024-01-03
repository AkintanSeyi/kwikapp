import { keyframes, styled } from "@mui/material";

export const TransportSystem = styled("div")({
  width: "100vw",
  height: "fit-content",
  overflowX: "hidden",
  marginTop: "50px",
  backgroundColor: "white",
  display: "flex",

  //justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
});

export const TransportSystem_Holder = styled("div")({
  width: "75%",
  height: "800px",
  display: "flex",
  justifyContent: "space-evenly",
  "@media (max-width : 62.5em)": {
    height: "fit-content",
    display: "block",
    width: "60%",
  },
});

export const TransportSystem_ButtonDiv = styled("div")({
  width: "100%",
  height: "40px",
  textTransform: "capitalize",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width : 62.5em)": {
    marginTop: "30px",
  },
});

export const TransportSystem_InnerDiv = styled("div")({
  width: "30%",
  backgroundColor: "red",
  height: "fit-content",
  overflow: "hidden",
  "@media (max-width : 62.5em)": {
    width: "100%",
    height: "fit-content",
    marginBottom: "50px",
    overflow: "hidden",
  },
});

export const TransportSystem_InnerDivParaDiv = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});
export const TransportSystem_InnerDivPara = styled("p")({
  fontSize: "14.5px",
  textAlign: "center",
  marginTop: "20px",
  color: "#27283a",
  lineHeight: "2",
  width: "85%",
  "@media (max-width : 37.5em)": {
    marginTop: "10px",
    width: "100%",
  },
});
export const TransportSystem_InnerDiv_ImageDiv = styled("div")({
  height: "300px",

  "@media (max-width : 62.5em)": {
    height: "500px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "@media (max-width : 37.5em)": {
    height: "350px",
  },
});

export const TransportSystem_InnerDiv_Image = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  objectFit: "cover",
  "@media (max-width : 62.5em)": {
    objectFit: "contain",
  },
  "@media (max-width : 37.5em)": {
    objectFit: "cover",
  },
});
