import { keyframes, styled } from "@mui/material";

export const SideBar_Holder = styled("div")({
  width: "100%",
  height: "fit-content",
});

export const SideBar_Icon_Text = styled("h5")({
  cursor: "pointer",

  marginBottom: "40px",
  transition: "all .5s",
  "&:hover": {
    color: "rgb(131, 127, 127)",
  },
  "@media (max-width : 30em)": {
    marginBottom: "30px",
  },
});

export const SideBar_SigninAndSignUpButtonSignUp = styled("button")({
  width: "120px",
  transition: "all .8s",
  borderRadius: "4px",
  marginTop: "20px",
  cursor: "pointer",
  outline: "none",
  border: "none",
  textTransform: "uppercase",
  fontSize: "13px",
  fontWeight: "bold",
  height: "40px",

  backgroundColor: "#00BF6F",
  padding: "1px 8px 1.5px 8px",
  color: "white",
  "&:hover": {
    backgroundColor: "#25e293",
  },
  "@media (max-width : 30em)": {
    marginTop: "10px",
  },
});

export const SideBar_SigninAndSignUpButton = styled("button")({
  width: "120px",
  borderRadius: "4px",
  outline: "none",
  marginTop: "20px",
  border: "1px solid black",

  textTransform: "capitalize",
  fontSize: "13px",
  fontWeight: "bold",
  height: "40px",
  padding: "1.5px 8px 1.5px 8px",
  color: "black",

  cursor: "pointer",
  transition: "all .8s",
  "&:hover": {
    color: "rgb(131, 127, 127)",
  },
  "@media (max-width : 30em)": {
    marginTop: "10px",
  },
});
