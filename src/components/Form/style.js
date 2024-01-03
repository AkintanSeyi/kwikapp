import { keyframes, styled } from "@mui/material";

export const Form = styled("div")({
  width: "100vw",
  height: "75vh",
  overflowX: "hidden",
  marginTop: "50px",
  display: "flex",
  marginTop: "60px",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width : 62.5em)": {
    display: "block",
    height: "50vh",
  },
  "@media (max-width : 30em)": {
    height: "fit-content",
  },
});

export const Form_Second = styled("div")({
  width: "50%",
  height: "100%",
  "@media (max-width : 62.5em)": {
    display: "none",
  },
});

export const Form_Second_img = styled("img")({
  width: "100%",
  objectFit: "cover",
  height: "100%",
});

export const Form_First = styled("div")({
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#00BF6F",
  "@media (max-width : 62.5em)": {
    width: "100%",
  },
  "@media (max-width : 30em)": {
    height: "fit-content",
    padding: "45px 0px 45px 0px",
  },
});

export const Form_First_Holder = styled("div")({
  width: "80%",
  height: "60%",
  color: "white",
});
export const Form_First_Input = styled("input")({
  width: "100%",
  height: "55px",
  borderRadius: "8px",
  padding: "3px 3px 3px 15px",
  border: "1px solid lightgrey",
  outline: "none",
  marginBottom: "13px",
  "@media (max-width : 62.5em)": {
    marginBottom: "15px",
  },
  "@media (max-width : 37.5em)": {
    marginTop: "10px",
  },
});

export const Form_First_Button = styled("button")({
  width: "100%",
  height: "40px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",
  justifyContent: "center",
  border: "none",
  backgroundColor: "#27283a",
  color: "white",
  fontWeight: "bold",
  outline: "none",
  //  marginBottom: "13px",
  "@media (max-width : 62.5em)": {
    height: "45px",
    marginTop: "5px",
  },
});
export const Form_First_Header = styled("h4")({
  textTransform: "capitalize",
  fontSize: "32px",
  marginBottom: "10px",
  "@media (max-width : 62.5em)": {
    marginBottom: "13px",
  },
  "@media (max-width : 37.5em)": {
    marginBottom: "8px",
  },
});

export const Form_First_SubHeader = styled("h5")({
  textTransform: "capitalize",
  fontSize: "15px",
  marginBottom: "10px",
  "@media (max-width : 62.5em)": {
    marginBottom: "13px",
  },
  "@media (max-width : 37.5em)": {
    marginBottom: "5px",
  },
});
