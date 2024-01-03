import React, { useState, useEffect } from "react";
import * as Style from "./style";
import AOS from "aos";
import "aos/dist/aos.css";

const SecondBody = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.SecondBody>
      <Style.SecondBody_First data-aos="fade-right">
        <Style.SecondBody_FirstImg
          src="https://kwik.delivery/wp-content/uploads/2019/06/mockup-macbook-kwik.png"
          alt="img"
        />
      </Style.SecondBody_First>
      <Style.SecondBody_Second>
        <Style.SecondBody_SecondDiv data-aos="fade-left">
          <Style.SecondBody_SecondDivHeader>
            Easy as it seems.
          </Style.SecondBody_SecondDivHeader>
          <Style.SecondBody_SecondDivPara>
            Whether you are a business owner or a courier, our user-friendly
            interface will help you to manage your parcels in a minute.
          </Style.SecondBody_SecondDivPara>
          <Style.SecondBody_SecondDivButon>
            CHECK PRICES NOW
          </Style.SecondBody_SecondDivButon>
        </Style.SecondBody_SecondDiv>
      </Style.SecondBody_Second>
    </Style.SecondBody>
  );
};

export default SecondBody;
