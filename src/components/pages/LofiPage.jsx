import React, { useState, useEffect } from "react";
import "./LofiPage.css";
import ReactPlayer from "react-player";

const LofiPage = () => {
  const [glowColor, setGlowColor] = useState("rgba(0, 0, 255, 0.5)");

  const changeGlowColor = (color) => {
    console.log("Changing glow color to:", color);
    setGlowColor(color);
    console.log("Glow color state:", glowColor);
  };

  useEffect(() => {
    console.log("Glow color state updated:", glowColor);
    
    // Create a style element and set its content dynamically
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      @keyframes pulse {
        0% {
          box-shadow: 0 0 20px ${glowColor};
        }
        100% {
          box-shadow: 0 0 40px ${glowColor};
        }
      }
    `;

    // Append the style element to the document head
    document.head.appendChild(styleElement);

    // Cleanup: Remove the style element when component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, [glowColor]);

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
            <div key={glowColor} className="pulse-animation"></div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="red" onClick={() => {console.log("Red button clicked"); changeGlowColor("rgba(255, 0, 0, 0.5)")}}>Red Glow</button>
        <button className="green" onClick={() => changeGlowColor("rgba(0, 255, 0, 0.5)")}>Green Glow</button>
        <button className="blue" onClick={() => changeGlowColor("rgba(0, 0, 255, 0.5)")}>Blue Glow</button>
      </div>
    </div>
  );
};

export default LofiPage;
