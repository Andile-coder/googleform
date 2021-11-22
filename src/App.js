import "./styles/dist/header.css";
import "./styles/dist/body.css";
import "./styles/dist/title.css";
import "./styles/dist/form.css";
import "./styles/dist/formSide.css";
import "./styles/dist/cheader.css";
import "./styles/dist/pages.css";
import "./styles/dist/theme.css";
import CHeader from "./components/CHeader";

import Pages from "./components/Pages";
import Title from "./components/Title";

import React, { useState } from "react";
function App() {
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup(!popup);
  };
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <CHeader handlePopup={handlePopup} />
      <Pages />
      <Title handlePopup={handlePopup} popup={popup} />
    </div>
  );
}

export default App;
