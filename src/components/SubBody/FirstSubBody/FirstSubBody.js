import React, { useState, useEffect } from "react";
import * as Styling from "./../../SubFooter/style";
import * as Style from "../../Feature/style";
import * as StylePara from "../../TransportSystem/style";
import * as MainStyle from "./style";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FirstSubBody = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <MainStyle.FirstSubBody>
      <MainStyle.FirstSubBody_LeftDotDiv>
        <MainStyle.FirstSubBody_LeftDotImg
          src="https://kwik.delivery/wp-content/uploads/2019/06/bg-dots-left.png"
          alt="img"
        />
      </MainStyle.FirstSubBody_LeftDotDiv>
      <MainStyle.SubFooter_First>
        <Styling.SubFooter_First_Holder>
          <MainStyle.FirstSubBody_InnerDiv data-aos="fade-right">
            <Style.Feature_InnerDiv_Text>
              FOR INDIVIDUALS
            </Style.Feature_InnerDiv_Text>
            <StylePara.TransportSystem_InnerDivPara>
              Want to send regular parcels as individual customer ?{" "}
            </StylePara.TransportSystem_InnerDivPara>
            <Styling.SubFooter_First_Holder_IconDiv>
              <FaArrowRight />
              <Styling.SubFooter_First_Holder_IconDivPara>
                Get started
              </Styling.SubFooter_First_Holder_IconDivPara>
            </Styling.SubFooter_First_Holder_IconDiv>
          </MainStyle.FirstSubBody_InnerDiv>
          <MainStyle.FirstSubBody_InnerDiv data-aos="fade-up">
            <Style.Feature_InnerDiv_Text>
              FOR BUSINESSES
            </Style.Feature_InnerDiv_Text>
            <StylePara.TransportSystem_InnerDivPara>
              Want to offer to your customers a high quality delivery
              experience?
            </StylePara.TransportSystem_InnerDivPara>
            <Styling.SubFooter_First_Holder_IconDiv>
              <FaArrowRight />
              <Styling.SubFooter_First_Holder_IconDivPara>
                Contact us
              </Styling.SubFooter_First_Holder_IconDivPara>
            </Styling.SubFooter_First_Holder_IconDiv>
          </MainStyle.FirstSubBody_InnerDiv>
          <MainStyle.FirstSubBody_InnerDiv data-aos="fade-left">
            <Style.Feature_InnerDiv_Text>
              FOR KWIKSTERS
            </Style.Feature_InnerDiv_Text>
            <StylePara.TransportSystem_InnerDivPara>
              Want to be part of our happy and independent couriers community ?{" "}
            </StylePara.TransportSystem_InnerDivPara>
            <Styling.SubFooter_First_Holder_IconDiv>
              <FaArrowRight />
              <Styling.SubFooter_First_Holder_IconDivPara>
                Join us
              </Styling.SubFooter_First_Holder_IconDivPara>
            </Styling.SubFooter_First_Holder_IconDiv>
          </MainStyle.FirstSubBody_InnerDiv>
        </Styling.SubFooter_First_Holder>
      </MainStyle.SubFooter_First>
    </MainStyle.FirstSubBody>
  );
};

export default FirstSubBody;
