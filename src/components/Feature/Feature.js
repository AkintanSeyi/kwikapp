import React, { useState, useEffect } from "react";
import * as Style from "./style";
import * as Styling from "../TransportSystem/style";
import { BsBoxSeam } from "react-icons/bs";
import { TfiWallet } from "react-icons/tfi";
import { GoRocket } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const Feature = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.Feature>
      <Style.Feature_Holder>
        <Style.Feature_InnerDiv data-aos="fade-right">
          <Style.Feature_InnerDiv_Icon_Div>
            <BsBoxSeam />
          </Style.Feature_InnerDiv_Icon_Div>
          <Style.Feature_InnerDiv_Text>BETTER</Style.Feature_InnerDiv_Text>
          <Styling.TransportSystem_InnerDivPara>
            Kwik uses the power of technology to give you more visibility and
            more flexibility for your urban, last-mile shipments
          </Styling.TransportSystem_InnerDivPara>
        </Style.Feature_InnerDiv>
        <Style.Feature_InnerDiv data-aos="zoom-in">
          <Style.Feature_InnerDiv_Icon_Div>
            <TfiWallet />
          </Style.Feature_InnerDiv_Icon_Div>

          <Style.Feature_InnerDiv_Text>CHEAPER</Style.Feature_InnerDiv_Text>
          <Styling.TransportSystem_InnerDivPara>
            Our platform cuts the unnecessary logistics steps to make B2B
            deliveries more affordable, without hidden costs{" "}
          </Styling.TransportSystem_InnerDivPara>
        </Style.Feature_InnerDiv>
        <Style.Feature_InnerDiv data-aos="fade-left">
          <Style.Feature_InnerDiv_Icon_Div>
            <GoRocket />
          </Style.Feature_InnerDiv_Icon_Div>

          <Style.Feature_InnerDiv_Text>KWIKER</Style.Feature_InnerDiv_Text>
          <Styling.TransportSystem_InnerDivPara>
            We commit to deliver within 2 hours max in the urban areas where we
            operate{" "}
          </Styling.TransportSystem_InnerDivPara>
        </Style.Feature_InnerDiv>
      </Style.Feature_Holder>
    </Style.Feature>
  );
};

export default Feature;
