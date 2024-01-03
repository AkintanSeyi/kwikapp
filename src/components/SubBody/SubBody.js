import React, { useState, useEffect } from "react";
import * as Style from "./style";
import FirstSubBody from "./FirstSubBody/FirstSubBody";
import SecondBody from "./SecondBody/SecondBody";
import ThirdBody from "./ThirdBody/ThirdBody";

const SubBody = () => {
  return (
    <Style.SubBody>
      <FirstSubBody />
      <Style.SubBody_Holder>
        <SecondBody />
        <ThirdBody />
      </Style.SubBody_Holder>
    </Style.SubBody>
  );
};

export default SubBody;
