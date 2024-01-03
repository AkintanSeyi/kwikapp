import React, { useState, useEffect } from "react";
import * as Style from "./style";

const SideBar = ({ toggleVal, settoggleVal }) => {
  console.log(toggleVal);
  return (
    <div
      className={`sidebarSlide ${
        toggleVal == true ? "movesidebar" : "movesidebarhide"
      }`}
    >
      <Style.SideBar_Holder>
        <Style.SideBar_Icon_Text
          style={{
            color: "#00BF6F",
          }}
        >
          HOME
        </Style.SideBar_Icon_Text>

        <Style.SideBar_Icon_Text>CORPORATES</Style.SideBar_Icon_Text>
        <Style.SideBar_Icon_Text>RIDERS</Style.SideBar_Icon_Text>

        <Style.SideBar_Icon_Text>KWIKPAY</Style.SideBar_Icon_Text>

        <Style.SideBar_Icon_Text>KWIKSHELF</Style.SideBar_Icon_Text>

        <Style.SideBar_Icon_Text>KWIKSTORE</Style.SideBar_Icon_Text>

        <Style.SideBar_Icon_Text>AGENT NETWORK</Style.SideBar_Icon_Text>
        <Style.SideBar_Icon_Text>DEVELOPERS</Style.SideBar_Icon_Text>
        <Style.SideBar_Icon_Text>CONTACT</Style.SideBar_Icon_Text>

        <Style.SideBar_Icon_Text>NEWS</Style.SideBar_Icon_Text>
        <Style.SideBar_SigninAndSignUpButtonSignUp>
          get started
        </Style.SideBar_SigninAndSignUpButtonSignUp>
        <Style.SideBar_SigninAndSignUpButton>
          sign IN
        </Style.SideBar_SigninAndSignUpButton>
      </Style.SideBar_Holder>
    </div>
  );
};

export default SideBar;
