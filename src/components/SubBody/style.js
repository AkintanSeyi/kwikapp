import { keyframes, styled } from "@mui/material";

export const SubBody = styled("div")({
  width: "100vw",
  height: "1480px",
  position: "relative",
  top: "0",
  "@media (max-width : 62.5em)": {
    height: "2250px",
  },
  "@media (max-width : 37.5em)": {
    height: "2000px",
  },
  "@media (max-width : 30em)": {
    height: "1850px",
  },
});

export const SubBody_Holder = styled("div")({
  width: "100%",
  height: "100%",
  overflowX: "hidden",
  // background: "linear-gradient(to right bottom ,  #7bdcb5 , #00d084  )",
  clipPath: "polygon(0% 7%, 100% 17% , 100% 100% , 0 100%)",
  display: "flex",
  backgroundColor: "#262839",
  "@media (max-width : 62.5em)": {
    clipPath: "polygon(0% 7%, 100% 12% , 100% 100% , 0 100%)",
  },
});
