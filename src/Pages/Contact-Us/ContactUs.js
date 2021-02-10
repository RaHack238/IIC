import React, { Component } from "react";
import ContactUsFooter from "../../Components/ContactUsFooter/ContactUsFooter";
import "./ContactUs.css";
import iitGoaLogo from "./assets/iitGoaLogo.png";
import iicLogo from "./assets/iicLogo.png";
import PersonCard from "../../Components/PersonCard/PersonCard";

export default class ContactUs extends Component {
  render() {
    return (
      <div class="contact__us">
        <div class="navbar__div">
          <div class="navbar__left">
            <img scr={iitGoaLogo} alt="IIT Goa" class="iit__goa__logo" />
            <img scr={iicLogo} alt="IIC" class="iic__logo" />
          </div>
          <div class="navbar__center">
            <h1 class="navbar__title">Council</h1>
          </div>
          <div class="navbar__right">
            Navbar
            {/* Insert navbar here  */}
          </div>
        </div>
        <div>
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
