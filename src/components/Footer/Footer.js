import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Style.Footer>
      <Style.Footer_Holder>
        <Style.Footer_IconDiv>
          <Style.Footer_Icon>
            <FaFacebookF />
          </Style.Footer_Icon>
          <Style.Footer_Icon>
            <FaLinkedinIn />
          </Style.Footer_Icon>
          <Style.Footer_Icon>
            <FaYoutube />
          </Style.Footer_Icon>
          <Style.Footer_Icon>
            <BiLogoInstagramAlt />
          </Style.Footer_Icon>
          <Style.Footer_Icon>
            <FaTwitter />
          </Style.Footer_Icon>
        </Style.Footer_IconDiv>
        <Style.Footer_TermPara>
          Terms & conditions - Privacy
        </Style.Footer_TermPara>
        <Style.Footer_CreatedDatePara>
          2020 - Kwik - Africa Delivery Technologies SAS
        </Style.Footer_CreatedDatePara>
      </Style.Footer_Holder>
    </Style.Footer>
  );
};

export default Footer;
