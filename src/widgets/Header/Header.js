import React, { useState, useEffect } from "react";
import * as Style from "./style";

const Header = ({ toggleVal, settoggleVal }) => {
  return (
    <Style.Header>
      <Style.Header_Holder>
        <Style.Header_Icon_Div>
          <Style.Header_Icon
            src="https://kwik.delivery/wp-content/uploads/2023/05/kwick_secondary_logo_RGB_green_transparent_background-e1685121401616.png
 "
            alt="icon"
          />
        </Style.Header_Icon_Div>
        <Style.Header_Navbar_Div>
          <Style.Header_Icon_Text
            style={{
              color: "#00BF6F",
            }}
          >
            HOME
          </Style.Header_Icon_Text>

          <Style.Header_Icon_Text>CORPORATES</Style.Header_Icon_Text>
          <Style.Header_Icon_Text>RIDERS</Style.Header_Icon_Text>

          <Style.Header_Icon_Text>KWIKPAY</Style.Header_Icon_Text>

          <Style.Header_Icon_Text>KWIKSHELF</Style.Header_Icon_Text>

          <Style.Header_Icon_Text>KWIKSTORE</Style.Header_Icon_Text>

          <Style.Header_Icon_Text>AGENT NETWORK</Style.Header_Icon_Text>
          <Style.Header_Icon_Text>DEVELOPERS</Style.Header_Icon_Text>
          <Style.Header_Icon_Text>CONTACT</Style.Header_Icon_Text>

          <Style.Header_Icon_Text>NEWS</Style.Header_Icon_Text>
        </Style.Header_Navbar_Div>
        <Style.Header_SigninAndSignUp>
          <Style.Header_SigninAndSignUpButton>
            get started
          </Style.Header_SigninAndSignUpButton>
          <Style.Header_SigninAndSignUpButtonSignUp>
            sign IN
          </Style.Header_SigninAndSignUpButtonSignUp>
        </Style.Header_SigninAndSignUp>
        <Style.DottedNavBox onClick={() => settoggleVal(!toggleVal)}>
          {toggleVal == false && (
            <>
              <Style.DottedNavBoxLine></Style.DottedNavBoxLine>
              <Style.DottedNavBoxLine></Style.DottedNavBoxLine>
              <Style.DottedNavBoxLine></Style.DottedNavBoxLine>
            </>
          )}
          {toggleVal == true && (
            <>
              <Style.DottedNavBoxLineCrossOne></Style.DottedNavBoxLineCrossOne>
              <Style.DottedNavBoxLineCrossTwo></Style.DottedNavBoxLineCrossTwo>
            </>
          )}
        </Style.DottedNavBox>
      </Style.Header_Holder>
    </Style.Header>
  );
};

export default Header;
