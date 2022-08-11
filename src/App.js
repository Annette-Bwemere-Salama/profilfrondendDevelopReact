import React from "react";

import "./App.css";
import  Header from "./COMPONENT/Header.js";
import Main from "./COMPONENT/Main.js";
import Mainsection from "./COMPONENT/Mainsection.js";
import FooterIcons from "./COMPONENT/FooterIcons";

function App() {
  return (
    <div className="diveDensemble">
      <Header />
      <Main />
      <Mainsection />
      <FooterIcons />
    </div>
  );
}

export default App;
