import React, { Component } from "react";

import "./PersonCard.css";

export default class PersonCard extends Component {
  state = { flipped: false };

  setFlipTrue = () => {
    this.setState({ flipped: true });
    console.log(true);
  };
  setFlipFalse = () => {
    this.setState({ flipped: false });
    console.log(false);
  };
  toggleFlip = () => {
    console.log(!this.state.flipped);
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    return (
      <div
        className="col-sm-3 flip-card"
        onMouseEnter={this.setFlipTrue}
        onMouseLeave={this.setFlipFalse}
        onClick={this.toggleFlip}
      >
        <div
          className={
            this.state.flipped ? "flip-card-inner flipped" : "flip-card-inner"
          }
        >
          <div className="flip-card-front">
            <img src="img_avatar.png" alt="Avatar" className="avatar__image" />
          </div>
          <div className="flip-card-back">
            <h1 className="member__name">Full Name</h1>
            <p className="member_designation">Designation</p>
            <p className="member__email">Email</p>
          </div>
        </div>
      </div>
    );
  }
}
