import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
const Slider = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const [toggle, settoggle] = useState("first");

  return (
    <Style.Slider className="slider">
      {toggle == "first" && (
        <>
          {" "}
          <Style.Slider_FirstHolder data-aos="fade-right">
            <Style.Slider_SectionFirstImg
              src="https://kwik.delivery/wp-content/uploads/2023/11/momokwik.png"
              alt="img"
            />
          </Style.Slider_FirstHolder>
          <Style.Slider_SectionHolder>
            <Style.Slider_SectionFirstDivArrow
              onClick={() => settoggle("third")}
              className="sliderfirst"
            >
              <MdKeyboardArrowLeft />
            </Style.Slider_SectionFirstDivArrow>
            <Style.Slider_AnimationDotDIv data-aos="fade-up">
              <Style.Slider_AnimationDot
                onClick={() => settoggle("first")}
                className={toggle == "first" && "togglecolor"}
              ></Style.Slider_AnimationDot>
              <Style.Slider_AnimationDot
                onClick={() => settoggle("second")}
                className={toggle == "second" && "togglecolor"}
              ></Style.Slider_AnimationDot>
              <Style.Slider_AnimationDot
                onClick={() => settoggle("third")}
                className={toggle == "third" && "togglecolor"}
              ></Style.Slider_AnimationDot>
            </Style.Slider_AnimationDotDIv>
            <Style.Slider_SectionHolderHolder data-aos="fade-up">
              <Style.Slider_SectionHolder_Header>
                MoMo by MTN partners with Kwik Africa to revolutionise payment
                system in logistics
              </Style.Slider_SectionHolder_Header>
              <Style.Slider_SectionHolder_Para>
                Most businesses that manufacture, import, export, or transport
                goods require warehousing. Although it may appear to be an
                unnecessary expense, it can actually save you money and increase
                your productivity. When a customer places an order, their
                journey does not end. A...
              </Style.Slider_SectionHolder_Para>
              <Style.Slider_SectionRaedDiv className="readdiv">
                <Style.Slider_SectionHolder_ReadPara className="readtext">
                  read
                </Style.Slider_SectionHolder_ReadPara>
                <Style.Slider_SectionReadIconDiv className="readicondiv">
                  <MdKeyboardArrowRight />
                </Style.Slider_SectionReadIconDiv>
              </Style.Slider_SectionRaedDiv>
            </Style.Slider_SectionHolderHolder>
            <Style.Slider_SectionSecondDivArrow
              onClick={() => settoggle("second")}
              className="slidersecond"
            >
              <MdKeyboardArrowRight />
            </Style.Slider_SectionSecondDivArrow>
          </Style.Slider_SectionHolder>
        </>
      )}

      {toggle == "second" && (
        <>
          {" "}
          <Style.Slider_FirstHolder data-aos="fade-right">
            <Style.Slider_SectionFirstImg
              src="https://kwik.delivery/wp-content/uploads/2022/11/kwik-bus.png"
              alt="img"
            />
          </Style.Slider_FirstHolder>
          <Style.Slider_SectionHolder>
            <Style.Slider_SectionFirstDivArrow
              onClick={() => settoggle("first")}
              className="sliderfirst"
            >
              <MdKeyboardArrowLeft />
            </Style.Slider_SectionFirstDivArrow>
            <Style.Slider_AnimationDotDIv data-aos="fade-up">
              <Style.Slider_AnimationDot
                onClick={() => settoggle("first")}
                className={toggle == "first" && "togglecolor"}
              ></Style.Slider_AnimationDot>
              <Style.Slider_AnimationDot
                onClick={() => settoggle("second")}
                className={toggle == "second" && "togglecolor"}
              ></Style.Slider_AnimationDot>
              <Style.Slider_AnimationDot
                onClick={() => settoggle("third")}
                className={toggle == "third" && "togglecolor"}
              ></Style.Slider_AnimationDot>
            </Style.Slider_AnimationDotDIv>
            <Style.Slider_SectionHolderHolder data-aos="fade-up">
              <Style.Slider_SectionHolder_Header>
                Reasons Why Warehousing Is The Best Way To Store Your Inventory
              </Style.Slider_SectionHolder_Header>
              <Style.Slider_SectionHolder_Para>
                Reasons Why Warehousing Is The Best Way To Store Your Inventory
                Most businesses that manufacture, import, export, or transport
                goods require warehousing. Although it may appear to be an
                unnecessary expense, it can actually save you money and increase
                your productivity. When a customer places an order, their
                journey does not end. A...
              </Style.Slider_SectionHolder_Para>
              <Style.Slider_SectionRaedDiv className="readdiv">
                <Style.Slider_SectionHolder_ReadPara className="readtext">
                  read
                </Style.Slider_SectionHolder_ReadPara>
                <Style.Slider_SectionReadIconDiv className="readicondiv">
                  <MdKeyboardArrowRight />
                </Style.Slider_SectionReadIconDiv>
              </Style.Slider_SectionRaedDiv>
            </Style.Slider_SectionHolderHolder>
            <Style.Slider_SectionSecondDivArrow
              onClick={() => settoggle("third")}
              className="slidersecond"
            >
              <MdKeyboardArrowRight />
            </Style.Slider_SectionSecondDivArrow>
          </Style.Slider_SectionHolder>
        </>
      )}

      {toggle == "third" && (
        <>
          {" "}
          <Style.Slider_FirstHolder data-aos="fade-right">
            <Style.Slider_SectionFirstImg
              src="https://kwik.delivery/wp-content/uploads/2022/08/Untitled-design-2-768x475.png"
              alt="img"
            />
          </Style.Slider_FirstHolder>
          <Style.Slider_SectionHolder>
            <Style.Slider_SectionFirstDivArrow
              onClick={() => settoggle("second")}
              className="sliderfirst"
            >
              <MdKeyboardArrowLeft />
            </Style.Slider_SectionFirstDivArrow>
            <Style.Slider_AnimationDotDIv data-aos="fade-up">
              <Style.Slider_AnimationDot
                onClick={() => settoggle("first")}
                className={toggle == "first" && "togglecolor"}
              ></Style.Slider_AnimationDot>
              <Style.Slider_AnimationDot
                onClick={() => settoggle("second")}
                className={toggle == "second" && "togglecolor"}
              ></Style.Slider_AnimationDot>
              <Style.Slider_AnimationDot
                onClick={() => settoggle("third")}
                className={toggle == "third" && "togglecolor"}
              ></Style.Slider_AnimationDot>
            </Style.Slider_AnimationDotDIv>
            <Style.Slider_SectionHolderHolder data-aos="fade-up">
              <Style.Slider_SectionHolder_Header>
                Requirements For Registering As A Corporate client
              </Style.Slider_SectionHolder_Header>
              <Style.Slider_SectionHolder_Para>
                Requirements For Registering As A Corporate client Our corporate
                delivery service gives larger businesses such as yours the power
                to move and track your high volume or multiple package
                shipments, and much more. We give you a fully functional
                dashboard that keeps you informed about shipping changes,
                updates, and routes...
              </Style.Slider_SectionHolder_Para>
              <Style.Slider_SectionRaedDiv className="readdiv">
                <Style.Slider_SectionHolder_ReadPara className="readtext">
                  read
                </Style.Slider_SectionHolder_ReadPara>
                <Style.Slider_SectionReadIconDiv className="readicondiv">
                  <MdKeyboardArrowRight />
                </Style.Slider_SectionReadIconDiv>
              </Style.Slider_SectionRaedDiv>
            </Style.Slider_SectionHolderHolder>
            <Style.Slider_SectionSecondDivArrow
              onClick={() => settoggle("first")}
              className="slidersecond"
            >
              <MdKeyboardArrowRight />
            </Style.Slider_SectionSecondDivArrow>
          </Style.Slider_SectionHolder>
        </>
      )}
    </Style.Slider>
  );
};

export default Slider;
