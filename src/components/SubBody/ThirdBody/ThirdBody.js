import React, { useState, useEffect } from "react";
import * as Style from "./style";
import * as Styling from "../SecondBody/style";
import AOS from "aos";
import "aos/dist/aos.css";
const ThirdBody = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.ThirdBody>
      <Style.ThirdBody_First>
        <Style.ThirdBody_First_holder data-aos="fade-right">
          <Styling.SecondBody_SecondDivHeader
            style={{
              textAlign: "start",
            }}
          >
            We fit your needs.
          </Styling.SecondBody_SecondDivHeader>
          <Styling.SecondBody_SecondDivPara>
            Kwik can handle every kind of delivery, no matter what size. A wide
            range of shipping options for a better, faster and bigger on-demand
            delivery service.{" "}
          </Styling.SecondBody_SecondDivPara>
        </Style.ThirdBody_First_holder>
      </Style.ThirdBody_First>
      <Style.ThirdBody_Second data-aos="fade-left">
        <Style.ThirdBody_SecodDotDiv>
          <Style.ThirdBody_SecodDotDivImg
            src="https://kwik.delivery/wp-content/uploads/2019/06/bg-dots-right.svg"
            alt="img"
          />
        </Style.ThirdBody_SecodDotDiv>
        <Style.ThirdBody_SecondImg
          src="https://kwik.delivery/wp-content/uploads/2021/01/kwiksters-home.png"
          alt="img"
        />
      </Style.ThirdBody_Second>
    </Style.ThirdBody>
  );
};

export default ThirdBody;
