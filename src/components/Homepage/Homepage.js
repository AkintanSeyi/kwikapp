import React, { useState, useEffect } from "react";
import Header from "../../widgets/Header/Header";
import HomeIntroSection from "../HomeIntroSection/HomeIntroSection";
import TransportSystem from "../TransportSystem/TransportSystem";
import Feature from "../Feature/Feature";
import Form from "../Form/Form";
import SubFooter from "../SubFooter/SubFooter";
import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";
import BodyHeader from "../BodyHeader/BodyHeader";
import SubBody from "../SubBody/SubBody";
import WhatAppicon from "../WhatAppicon/WhatAppicon";
import SideBar from "../../widgets/SideBar/SideBar";

const Homepage = ({ toggleVal, settoggleVal }) => {
  return (
    <div style={{ position: "relative", zIndex: "1" }}>
      <SideBar toggleVal={toggleVal} settoggleVale={settoggleVal} />
      <HomeIntroSection />
      <BodyHeader />
      <SubBody />
      <TransportSystem />
      <Feature />
      <Form />
      <Slider />
      <WhatAppicon />
      <SubFooter />
      <Footer />
    </div>
  );
};

export default Homepage;
