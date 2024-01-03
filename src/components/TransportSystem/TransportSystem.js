import React, { useState, useEffect } from "react";
import * as Style from "./style";
import * as Styling from "../../widgets/Header/style";
import AOS from "aos";
import "aos/dist/aos.css";

const TransportSystem = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.TransportSystem>
      <Style.TransportSystem_Holder>
        <Style.TransportSystem_InnerDiv data-aos="fade-right">
          <Style.TransportSystem_InnerDiv_ImageDiv>
            <Style.TransportSystem_InnerDiv_Image
              src="https://kwik.delivery/wp-content/uploads/2021/12/Bikes-kwik_deliveryservice.png"
              alt="img"
            />
          </Style.TransportSystem_InnerDiv_ImageDiv>
          <Style.TransportSystem_InnerDivParaDiv>
            <Style.TransportSystem_InnerDivPara>
              Our Bikes are Kwik to navigate traffic and ensure your items are
              delivered within 2 hours in Lagos and 1hr in Abuja, Nigeria.
            </Style.TransportSystem_InnerDivPara>
          </Style.TransportSystem_InnerDivParaDiv>
          <Style.TransportSystem_InnerDivParaDiv>
            <Style.TransportSystem_InnerDivPara>
              All our bikes are equipped with insulated box that can accommodate
              most of your business needs.{" "}
            </Style.TransportSystem_InnerDivPara>
          </Style.TransportSystem_InnerDivParaDiv>
          <Style.TransportSystem_InnerDivParaDiv>
            <Style.TransportSystem_InnerDivPara>
              Frozen foods can be kept in our boxes up to 4 hours.
            </Style.TransportSystem_InnerDivPara>
          </Style.TransportSystem_InnerDivParaDiv>
          <Style.TransportSystem_InnerDivParaDiv>
            <Style.TransportSystem_InnerDivPara>
              Just keep in mind, it has to fit in a box of the following
              dimensions: 48x50x50cm.{" "}
            </Style.TransportSystem_InnerDivPara>
          </Style.TransportSystem_InnerDivParaDiv>
        </Style.TransportSystem_InnerDiv>
        <Style.TransportSystem_InnerDiv data-aos="zoom-in">
          <Style.TransportSystem_InnerDiv_ImageDiv>
            <Style.TransportSystem_InnerDiv_Image
              src="https://kwik.delivery/wp-content/uploads/2021/01/Vans-ok.png"
              alt="img"
            />
          </Style.TransportSystem_InnerDiv_ImageDiv>

          <Style.TransportSystem_InnerDivParaDiv>
            <Style.TransportSystem_InnerDivPara>
              Do you have large items or quantities that Bike capacity cannot
              accommodate?{" "}
            </Style.TransportSystem_InnerDivPara>
          </Style.TransportSystem_InnerDivParaDiv>
          <Style.TransportSystem_InnerDivParaDiv>
            <Style.TransportSystem_InnerDivPara>
              Our vans and other utility vehicles are available at your
              fingertips for quick pick-up and delivery.{" "}
            </Style.TransportSystem_InnerDivPara>
          </Style.TransportSystem_InnerDivParaDiv>
          <Style.TransportSystem_InnerDivParaDiv>
            <Style.TransportSystem_InnerDivPara>
              With maximum weight of 2,500 kg, we assure you we will not leave
              you stranded{" "}
            </Style.TransportSystem_InnerDivPara>
          </Style.TransportSystem_InnerDivParaDiv>
        </Style.TransportSystem_InnerDiv>
        <Style.TransportSystem_InnerDiv data-aos="fade-left">
          <Style.TransportSystem_InnerDiv_ImageDiv>
            <Style.TransportSystem_InnerDiv_Image
              src="https://kwik.delivery/wp-content/uploads/2021/01/Trucks.png"
              alt="img"
            />
          </Style.TransportSystem_InnerDiv_ImageDiv>
          <Style.TransportSystem_InnerDivParaDiv>
            <Style.TransportSystem_InnerDivPara>
              For your large items, our Trucks are available to ensure inclusion
              of large items.{" "}
            </Style.TransportSystem_InnerDivPara>
          </Style.TransportSystem_InnerDivParaDiv>
          <Style.TransportSystem_InnerDivParaDiv>
            <Style.TransportSystem_InnerDivPara>
              With trucks capacity from 3 Tons to 30 Tons, Kwik has provided
              options to meet your delivery specifications. This service comes
              with an optional offering of “loaders” to take care of loading and
              offloading of your cargo{" "}
            </Style.TransportSystem_InnerDivPara>
          </Style.TransportSystem_InnerDivParaDiv>
        </Style.TransportSystem_InnerDiv>
      </Style.TransportSystem_Holder>
      <Style.TransportSystem_ButtonDiv data-aos="fade-up">
        <Styling.Header_SigninAndSignUpButton
          style={{
            textTransform: "uppercase",
          }}
        >
          Sign Up now
        </Styling.Header_SigninAndSignUpButton>
      </Style.TransportSystem_ButtonDiv>
    </Style.TransportSystem>
  );
};

export default TransportSystem;
