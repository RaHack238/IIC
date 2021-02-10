import React, { Component } from "react";

import "./PersonCard.css";

export default class PersonCard extends Component {
  render() {
    return (
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="img_avatar.png" alt="Avatar" />
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    );
  }
}
