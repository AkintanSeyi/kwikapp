import React, { useState, useEffect } from "react";
import * as Style from "./style";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const WhatAppicon = () => {
  return (
    <Style.WhatAppicon>
      <Style.WhatAppicon_Div>
        <FaWhatsapp />
      </Style.WhatAppicon_Div>
    </Style.WhatAppicon>
  );
};

export default WhatAppicon;
