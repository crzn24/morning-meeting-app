import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import video1 from '../assets/videos/video-1.mp4';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={video1} autoPlay loop muted />
      <h1>WELCOME TO ILC</h1>
      <p>Let's start the day!</p>
      {/* <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p> */}
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH MORNING VIDEO <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
