import React from "react";

import "./App.css";
import  Header from "./COMPONENT/Header.jsx";
import Main from "./COMPONENT/Main.jsx";
import Mainsection from "./COMPONENT/Mainsection.jsx";
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
