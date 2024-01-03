import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Header from "./widgets/Header/Header";

const App = () => {
  const [toggleVal, settoggleVal] = useState(false);
  return (
    <>
      <Header toggleVal={toggleVal} settoggleVal={settoggleVal} />

      <div
        style={{
          height: "fit-content",
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        <Homepage toggleVal={toggleVal} settoggleVal={settoggleVal} />
      </div>
    </>
  );
};

export default App;
