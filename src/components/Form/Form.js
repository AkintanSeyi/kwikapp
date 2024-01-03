import React, { useState, useEffect } from "react";
import * as Style from "./style";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Style.Form>
      <Style.Form_First>
        <Style.Form_First_Holder>
          <Style.Form_First_Header data-aos="fade-down">
            Keep in touch.
          </Style.Form_First_Header>
          <Style.Form_First_SubHeader data-aos="fade-down">
            Don't want to miss our exciting news ?
          </Style.Form_First_SubHeader>
          <Style.Form_First_SubHeader data-aos="fade-down">
            Just leave us your contact information and we'll keep you updated !
          </Style.Form_First_SubHeader>
          <form data-aos="fade-right">
            <Style.Form_First_Input type="text" placeholder="First Name" />
            <Style.Form_First_Input type="text" placeholder="Last Name" />
            <Style.Form_First_Input type="email" placeholder="Email" />
            <Style.Form_First_Button data-aos="fade-up">
              subscribe
            </Style.Form_First_Button>
          </form>
        </Style.Form_First_Holder>
      </Style.Form_First>
      <Style.Form_Second data-aos="fade-up">
        <Style.Form_Second_img
          src="https://kwik.delivery/wp-content/uploads/2019/06/woman-parcel.png"
          alt="img"
        />
      </Style.Form_Second>
    </Style.Form>
  );
};

export default Form;
