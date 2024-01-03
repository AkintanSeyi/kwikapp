import { keyframes, styled } from "@mui/material";

export const HomeIntroSection = styled("div")({
  width: "100vw",
  height: "80vh",
  overflowX: "hidden",
  position: "relative",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "@media (max-width : 62.5em)": {
    height: "72vh",
  },
  "@media (max-width : 50em)": {
    height: "79vh",
  },
  "@media (max-width : 24.0625em)": {
    height: "87vh",
  },
});

export const HomeIntroSection_Holder = styled("div")({
  width: "100%",
  height: "100%",
  clipPath: "polygon(0% 0%, 100% 0 , 100% 65vh , 0 100%)",
  display: "flex",
  backgroundColor: "#00BF6F",
  // position: "relative",
  // top: "7%",
  "@media (max-width : 62.5em)": {
    clipPath: "polygon(0% 0%, 100% 0 , 100% 38vh , 0 100%)",
    display: "block",
    height: "60%",
  },
  "@media (max-width : 50em)": {
    clipPath: "polygon(0% 0%, 100% 0 , 100% 42vh , 0 100%)",
    height: "59%",
  },
  "@media (max-width : 37.5em)": {
    clipPath: "polygon(0% 0%, 100% 0 , 100% 50.5vh , 0 100%)",
    height: "75%",
  },
  "@media (max-width : 24.0625em)": {
    clipPath: "polygon(0% 0%, 100% 0 , 100% 58.5vh , 0 100%)",
    height: "75%",
  },
});

export const HomeIntroSection_Second = styled("div")({
  width: "50%",
  height: "100%",
  padding: "10px",
  "@media (max-width : 62.5em)": {
    width: "100%",
    height: "40%",
  },
});

export const HomeIntroSection_SecondDotImgDiv = styled("div")({
  width: "350px",
  height: "500px",
  position: "absolute",
  top: "10%",
  right: "2%",
  zIndex: "5",
  "@media (max-width : 62.5em)": {
    right: "-7%",
  },
  "@media (max-width : 50em)": {
    top: "-4%",
    height: "450px",
    right: "-10%",
  },
  "@media (max-width : 37.5em)": {
    top: "-15%",
    height: "450px",
    right: "-35%",
  },
});

export const HomeIntroSection_SecondDotImg = styled("img")({
  width: "100%",
  height: "100%",
});

export const HomeIntroSection_SecondAppPhoneImg = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
});
export const HomeIntroSection_SecondPhoneImgDiv = styled("div")({
  width: "350px",
  height: "350px",
  position: "absolute",
  bottom: "10.8%",
  right: "16%",
  zIndex: "10",
  "@media (max-width : 62.5em)": {
    bottom: "5%",
    right: "23%",
    width: "490px",
    height: "490px",
  },
  "@media (max-width : 50em)": {
    bottom: "5%",
    right: "14.5%",
  },
  "@media (max-width : 37.5em)": {
    width: "350px",
    height: "350px",
    bottom: "-.5%",
    right: "20.5%",
  },
  "@media (max-width : 30em)": {
    width: "300px",
    height: "300px",
    bottom: "7%",
    right: "6.5%",
  },
  "@media (max-width : 24.0625em)": {
    right: "2.5%",
    bottom: "1%",
  },
});

export const HomeIntroSection_SecondAppDiv = styled("div")({
  width: "100%",
  height: "fit-content",
  display: "flex",
  alignItems: "center",
});

const AnimateImage = keyframes`
   0% {
    transform : translateX(300px) translateY(-150px) rotate(0deg)
   }
   25% {
    transform : translateX(225px) translateY(-150px) rotate(90deg)
   }
   50% {
    transform : translateX(150px) translateY(-150px) rotate(180deg)
   }
   75% {
    transform : translateX(75px) translateY(-150px) rotate(270deg)

   }
   100% {
    transform : translateX(0px) translateY(0px) rotate(360deg)
   }

`;

export const HomeIntroSection_SecondPhoneImg = styled("img")({
  width: "100%",
  height: "100%",
  animation: `${AnimateImage}  1.5s  linear 1`,
});

export const HomeIntroSection_SecondAppInerDiv = styled("div")({
  width: "120px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  marginRight: "20px",
  justifyContent: "center",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "25px",
  "@media (max-width : 30em)": {
    width: "120px",
    height: "45px",
  },
});

export const HomeIntroSection_SecondSubTextDiv = styled("div")({
  width: "fit-content",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const HomeIntroSection_SecondSubTextAlignLeftDiv = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  "@media (max-width : 62.5em)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    color: "white",
  },
});

export const HomeIntroSection_SecondSubTextPaymentInnerDiv = styled("div")({
  height: "100%",
  lineHeight: "1.5",
  width: "fit-content",
  paddingRight: "7px",
  paddingLeft: "7px",
});
export const HomeIntroSection_SecondSubTextInnerDiv = styled("div")({
  borderRight: "2px solid #27283a",
  height: "100%",
  width: "fit-content",
  paddingRight: "7px",
  paddingLeft: "7px",
  "@media (max-width : 62.5em)": {
    borderRight: "2px solid white",
  },
});
export const HomeIntroSection_SecondSubText = styled("h3")({
  fontSize: "18px",
  "@media (max-width : 62.5em)": {
    fontSize: "25px",
  },
  "@media (max-width : 37.5em)": {
    fontSize: "17px",
  },
  "@media (max-width : 30em)": {
    fontSize: "15px",
  },
});
export const HomeIntroSection_SecondTextHeader = styled("h2")({
  fontSize: "28px",
  textAlign: "right",

  "@media (max-width : 62.5em)": {
    textAlign: "left",
    textTransform: "uppercase",
    color: "white",
    marginBottom: "10px",
    fontSize: "34px",
  },

  "@media (max-width : 37.5em)": {
    fontSize: "26px",
  },
  "@media (max-width : 30em)": {
    fontSize: "20px",
  },
});

export const HomeIntroSection_SecondTextDiv = styled("div")({
  width: "65.5%",
  height: "fit-content",

  position: "absolute",
  color: "#27283a",

  top: "25%",
  left: "47.5%",
  "@media (max-width : 62.5em)": {
    width: "75%",
    left: "0",
    height: "fit-content",

    padding: "0px 0px 40px 0px",
  },
  "@media (max-width : 37.5em)": {
    width: "85%",
  },
  "@media (max-width : 30em)": {
    marginTop: "20px",
  },
});

export const HomeIntroSection_First = styled("div")({
  width: "44%",
  height: "100%",
  padding: "10px",
  position: "relative",
  backgroundPosition: "bottom right",
  backgroundSize: "cover",
  //background: "linear-gradient(to right bottom ,  #7bdcb5 , #00d084  )",
  backgroundImage:
    " url('https://kwik.delivery/wp-content/uploads/2021/11/jayjay-optimized_new.png')",

  "@media (max-width : 62.5em)": {
    width: "100%",
    height: "60%",
    marginLeft: "100px",

    backgroundImage: "none",
  },
  "@media (max-width : 37.5em)": {
    marginLeft: "50px",
  },
});
