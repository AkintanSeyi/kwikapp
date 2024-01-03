import React, { useState, useEffect } from "react";
import * as Style from "./style";
import GooglePlayImage from "../../image/google-play-badge-logo-black-and-white.png";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeIntroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Style.HomeIntroSection>
      <Style.HomeIntroSection_SecondPhoneImgDiv>
        <Style.HomeIntroSection_SecondPhoneImg
          src="https://kwik.delivery/wp-content/uploads/2020/12/mockup_kwik-15.34.12.png"
          alt="img"
        />
      </Style.HomeIntroSection_SecondPhoneImgDiv>
      <Style.HomeIntroSection_Holder>
        <Style.HomeIntroSection_First>
          <Style.HomeIntroSection_SecondTextDiv data-aos="fade-right">
            <Style.HomeIntroSection_SecondTextHeader>
              grows your business now with our on-demand platform
            </Style.HomeIntroSection_SecondTextHeader>
            <Style.HomeIntroSection_SecondSubTextAlignLeftDiv>
              <Style.HomeIntroSection_SecondSubTextDiv>
                <Style.HomeIntroSection_SecondSubTextInnerDiv>
                  <Style.HomeIntroSection_SecondSubText>
                    deliveries
                  </Style.HomeIntroSection_SecondSubText>
                </Style.HomeIntroSection_SecondSubTextInnerDiv>

                <Style.HomeIntroSection_SecondSubTextInnerDiv>
                  <Style.HomeIntroSection_SecondSubText>
                    warehousing
                  </Style.HomeIntroSection_SecondSubText>
                </Style.HomeIntroSection_SecondSubTextInnerDiv>
                <Style.HomeIntroSection_SecondSubTextPaymentInnerDiv>
                  <Style.HomeIntroSection_SecondSubText>
                    payment
                  </Style.HomeIntroSection_SecondSubText>
                </Style.HomeIntroSection_SecondSubTextPaymentInnerDiv>
              </Style.HomeIntroSection_SecondSubTextDiv>
            </Style.HomeIntroSection_SecondSubTextAlignLeftDiv>
            <Style.HomeIntroSection_SecondAppDiv>
              <Style.HomeIntroSection_SecondAppInerDiv>
                <Style.HomeIntroSection_SecondAppPhoneImg
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkuhAQMnawI-S_UiHhjtqfuavJ_EsRFQtrPqvkrPmNA&s"
                  alt="img"
                />
              </Style.HomeIntroSection_SecondAppInerDiv>
              <Style.HomeIntroSection_SecondAppInerDiv>
                <Style.HomeIntroSection_SecondAppPhoneImg
                  src={GooglePlayImage}
                  alt="img"
                />
              </Style.HomeIntroSection_SecondAppInerDiv>
            </Style.HomeIntroSection_SecondAppDiv>
          </Style.HomeIntroSection_SecondTextDiv>
        </Style.HomeIntroSection_First>
        <Style.HomeIntroSection_Second>
          <Style.HomeIntroSection_SecondDotImgDiv>
            <Style.HomeIntroSection_SecondDotImg
              src="https://kwik.delivery/wp-content/uploads/2019/06/bg-dots-right.svg"
              alt="img"
            />
          </Style.HomeIntroSection_SecondDotImgDiv>
        </Style.HomeIntroSection_Second>
      </Style.HomeIntroSection_Holder>
    </Style.HomeIntroSection>
  );
};

export default HomeIntroSection;
