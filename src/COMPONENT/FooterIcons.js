import React from "react";
import github from "./images/github.svg";
import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";
import twitter from "./images/twitter.svg";

function FooterIcons() {
    return (
      <nav className="icons">
        <img src={github} alt=''/>
        <img src={instagram} alt=''/>
        <img src={linkedin} alt=''/>
        <img src={twitter} alt=''/>
      </nav>
    );
  }


  export default FooterIcons;