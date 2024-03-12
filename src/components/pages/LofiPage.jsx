import React, { useState } from "react";
import "./LofiPage.css";
import ReactPlayer from "react-player";

const LofiPage = () => {
  const [glowColor, setGlowColor] = useState("rgba(0, 0, 255, 0.5)");

  const changeGlowColor = (color) => {
    console.log("Changing glow color to:", color);
    setGlowColor(color);
  };

  return (
    <div className="lofipage">
      <div className="lofi-player-wrapper">
        <div className="player-container">
          <ReactPlayer
            className="lofi-react-player"
            url="https://youtube.com/playlist?list=PLOseBaVQKym0-ZUXIHYlXV23jN90XwjAJ&si=jtt5u8W5inv3n2MH"
            width="100%"
            height="100%"
            controls
          />
          <div className="pulse-container">
            <div className="pulse-animation" style={{ boxShadow: `0 0 20px ${glowColor}` }}></div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="red" onClick={() => changeGlowColor("rgba(255, 0, 0, 0.5)")}>Red Glow</button>
        <button className="green" onClick={() => changeGlowColor("rgba(0, 255, 0, 0.5)")}>Green Glow</button>
        <button className="blue" onClick={() => changeGlowColor("rgba(0, 0, 255, 0.5)")}>Blue Glow</button>
      </div>
    </div>
  );
};

export default LofiPage;
