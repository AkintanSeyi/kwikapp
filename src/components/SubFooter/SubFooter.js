import React, { useState, useEffect } from "react";
import * as Styling from "./style";
import * as Style from "../Feature/style";
import * as StylePara from "../TransportSystem/style";
import { FaArrowRight } from "react-icons/fa";
import * as StyleHomeIntro from "../HomeIntroSection/style";
import Googleimage from "../../image/google-play-badge-logo-black-and-white.png";
import AOS from "aos";
import "aos/dist/aos.css";

const SubFooter = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Styling.SubFooter>
      <Styling.SubFooter_First>
        <Styling.SubFooter_First_Holder>
          <Styling.SubFooter_InnerDiv data-aos="fade-right">
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
          </Styling.SubFooter_InnerDiv>
          <Styling.SubFooter_InnerDiv data-aos="fade-up">
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
          </Styling.SubFooter_InnerDiv>
          <Styling.SubFooter_InnerDiv data-aos="fade-left">
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
          </Styling.SubFooter_InnerDiv>
        </Styling.SubFooter_First_Holder>
      </Styling.SubFooter_First>
      <Styling.SubFooter_Second>
        <Styling.SubFooter_Second_Holder>
          <Styling.SubFooter_Second_Holder_FirstHolder>
            <Styling.SubFooter_Second_Holder_SecondHoldelDotImgDiv data-aos="fade-right">
              <Styling.SubFooter_Second_Holder_SecondHoldelDotImg
                src="https://kwik.delivery/wp-content/uploads/2019/06/bg-dots-left.png"
                alt="img"
              />
            </Styling.SubFooter_Second_Holder_SecondHoldelDotImgDiv>

            <Styling.SubFooter_Second_Holder_FirstHolderDiv data-aos="fade-right">
              <Styling.SubFooter_Second_Holder_FirstHolderHeaderLi>
                About Kwikd
              </Styling.SubFooter_Second_Holder_FirstHolderHeaderLi>
              <Styling.SubFooter_Second_Holder_FirstHolderUl>
                <Styling.SubFooter_Second_Holder_FirstHolderLi>
                  CORPORATE CLIENTS
                </Styling.SubFooter_Second_Holder_FirstHolderLi>
                <Styling.SubFooter_Second_Holder_FirstHolderLi>
                  PRICING
                </Styling.SubFooter_Second_Holder_FirstHolderLi>
                <Styling.SubFooter_Second_Holder_FirstHolderLi>
                  DEVELOPER
                </Styling.SubFooter_Second_Holder_FirstHolderLi>
                <Styling.SubFooter_Second_Holder_FirstHolderLi>
                  RESOURCES/PLUGINS
                </Styling.SubFooter_Second_Holder_FirstHolderLi>

                <Styling.SubFooter_Second_Holder_FirstHolderLi>
                  AREAS COVERED
                </Styling.SubFooter_Second_Holder_FirstHolderLi>
              </Styling.SubFooter_Second_Holder_FirstHolderUl>
            </Styling.SubFooter_Second_Holder_FirstHolderDiv>
            <Styling.SubFooter_Second_Holder_FirstHolderDiv data-aos="fade-right">
              <Styling.SubFooter_Second_Holder_FirstHolderHeaderLi>
                Company info
              </Styling.SubFooter_Second_Holder_FirstHolderHeaderLi>
              <Styling.SubFooter_Second_Holder_FirstHolderUl>
                <Styling.SubFooter_Second_Holder_FirstHolderLi>
                  JOB OFFERS
                </Styling.SubFooter_Second_Holder_FirstHolderLi>
                <Styling.SubFooter_Second_Holder_FirstHolderLi>
                  FAQ
                </Styling.SubFooter_Second_Holder_FirstHolderLi>
                <Styling.SubFooter_Second_Holder_FirstHolderLi>
                  BLOG
                </Styling.SubFooter_Second_Holder_FirstHolderLi>
                <Styling.SubFooter_Second_Holder_FirstHolderLi>
                  BECOME KWIKSTER
                </Styling.SubFooter_Second_Holder_FirstHolderLi>
                <Styling.SubFooter_Second_Holder_FirstHolderLi>
                  BECOME PADI
                </Styling.SubFooter_Second_Holder_FirstHolderLi>
              </Styling.SubFooter_Second_Holder_FirstHolderUl>
            </Styling.SubFooter_Second_Holder_FirstHolderDiv>
          </Styling.SubFooter_Second_Holder_FirstHolder>

          <Styling.SubFooter_Second_Holder_SecondHolder data-aos="fade-left">
            <Styling.SubFooter_Second_Holder_FirstHolderHeaderLi>
              Download Our App
            </Styling.SubFooter_Second_Holder_FirstHolderHeaderLi>
            <Styling.SubFooter_Second_Holder_SecondHolderDiv>
              <Styling.SubFooter_Second_Holder_SecondHolderDivImg
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkuhAQMnawI-S_UiHhjtqfuavJ_EsRFQtrPqvkrPmNA&s"
                alt="img"
              />
              <Styling.SubFooter_Second_Holder_SecondHolderDivImg
                src={Googleimage}
                alt="img"
              />
            </Styling.SubFooter_Second_Holder_SecondHolderDiv>
            <Styling.SubFooter_Second_Holder_SecondHoldelRightDotImgDiv>
              <Styling.SubFooter_Second_Holder_SecondHoldelDotImg
                src="https://kwik.delivery/wp-content/uploads/2019/06/bg-dots-left.png"
                alt="img"
              />
            </Styling.SubFooter_Second_Holder_SecondHoldelRightDotImgDiv>
          </Styling.SubFooter_Second_Holder_SecondHolder>
        </Styling.SubFooter_Second_Holder>
      </Styling.SubFooter_Second>
    </Styling.SubFooter>
  );
};

export default SubFooter;
