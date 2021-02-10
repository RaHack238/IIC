import React, { Component } from "react";
import ContactUsFooter from "../../Components/ContactUsFooter/ContactUsFooter";
import "./ContactUs.css";
import iitGoaLogo from "./assets/iitGoaLogo.png";
import iicLogo from "./assets/iicLogo.png";
import PersonCard from "../../Components/PersonCard/PersonCard";

export default class ContactUs extends Component {
  render() {
    return (
      <div className="contact__us">
        <div className="navbar__div">
          <div className="navbar__left">
            <img scr={iitGoaLogo} alt="IIT Goa" className="iit__goa__logo" />
            <img scr={iicLogo} alt="IIC" className="iic__logo" />
          </div>
          <div className="navbar__center">
            <h1 className="navbar__title">Council</h1>
          </div>
          <div className="navbar__right">
            Navbar
            {/* Insert navbar here  */}
          </div>
        </div>
        <div className="row main__council__window">
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
        <ContactUsFooter />
      </div>
    );
  }
}
