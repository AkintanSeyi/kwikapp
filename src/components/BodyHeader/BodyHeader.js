import React, { useState, useEffect } from "react";
import * as Style from "./style";
import AOS from "aos";
import "aos/dist/aos.css";

const BodyHeader = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.BodyHeader data-aos="zoom-in">
      <Style.BodyHeader_Para>Work with Kwik today !</Style.BodyHeader_Para>
    </Style.BodyHeader>
  );
};

export default BodyHeader;
