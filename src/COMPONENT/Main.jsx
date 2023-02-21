import React from "react";
import gmail from "./images/gmail.svg";
import linkedin from "./images/linkedin.svg";

function Main() {
    return (
        <main>
            <h1>Annette Bwemere</h1>
            <p className="frontend"> Front-End Developer </p>
            <p className="webside"> annettebwemere.website</p>
            <div className="mesButtons">
                <div className="mailImage">
                    <img className="mailimage" src={gmail} alt='' />
                    <h6>E-mail</h6>
                </div>
                <div className="linkedin">
                    <img src={linkedin} alt='' />
                    <h6>LinkedIn</h6>
                </div>
            </div>

        </main>
    );
}

export default Main;
