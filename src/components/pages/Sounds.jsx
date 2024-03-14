import React from "react";
import "./Sounds.css";

// Import button images
import button1Image from "../../assets/sounds/IG12yes.gif";
import button2Image from "../../assets/sounds/IG12no.gif";
import button3Image from "../../assets/sounds/hellothere.gif";
import button4Image from "../../assets/sounds/vaderno.gif";
import button5Image from "../../assets/sounds/dramaticchipmunk.png";
import button6Image from "../../assets/sounds/spongebob-fail.jpg";
import button7Image from "../../assets/sounds/wrongbuzzer.jpg";
import button8Image from "../../assets/sounds/sadsong.jpg";

// Import audio files
import button1Audio from "../../assets/sounds/IG12yes.mp3";
import button2Audio from "../../assets/sounds/IG12no.mp3";
import button3Audio from "../../assets/sounds/hellothere.mp3";
import button4Audio from "../../assets/sounds/vaderno.mp3";
import button5Audio from "../../assets/sounds/dundundun.mp3";
import button6Audio from "../../assets/sounds/spongebob-fail.mp3";
import button7Audio from "../../assets/sounds/wrongbuzzer.mp3";
import button8Audio from "../../assets/sounds/sadsong.mp3";

const Sounds = () => {
  // Function to handle button click
  const handleButtonClick = (buttonKey) => {
    const audio = new Audio(audioFiles[buttonKey]);
    audio.play();
  };

  // Define button images
  const buttonImages = {
    button1: button1Image,
    button2: button2Image,
    button3: button3Image,
    button4: button4Image,
    button5: button5Image,
    button6: button6Image,
    button7: button7Image,
    button8: button8Image,
  };

  // Define audio files
  const audioFiles = {
    button1: button1Audio,
    button2: button2Audio,
    button3: button3Audio,
    button4: button4Audio,
    button5: button5Audio,
    button6: button6Audio,
    button7: button7Audio,
    button8: button8Audio,
  };

  return (
    <div className="sounds">
      <h1>SOUNDBOARD</h1>
      <div className="soundboard">
        <button
          className="soundboard-button"
          onClick={() => handleButtonClick("button1")}
        >
          <img src={buttonImages["button1"]} alt="Button 1" />
        </button>
        <button
          className="soundboard-button"
          onClick={() => handleButtonClick("button2")}
        >
          <img src={buttonImages["button2"]} alt="Button 2" />
        </button>
        <button
          className="soundboard-button"
          onClick={() => handleButtonClick("button3")}
        >
          <img src={buttonImages["button3"]} alt="Button 3" />
        </button>
        <button
          className="soundboard-button"
          onClick={() => handleButtonClick("button4")}
        >
          <img src={buttonImages["button4"]} alt="Button 4" />
        </button>
        <button
          className="soundboard-button"
          onClick={() => handleButtonClick("button5")}
        >
          <img src={buttonImages["button5"]} alt="Button 5" />
        </button>
        <button
          className="soundboard-button"
          onClick={() => handleButtonClick("button6")}
        >
          <img src={buttonImages["button6"]} alt="Button 6" />
        </button>
        <button
          className="soundboard-button"
          onClick={() => handleButtonClick("button7")}
        >
          <img src={buttonImages["button7"]} alt="Button 7" />
        </button>
        <button
          className="soundboard-button"
          onClick={() => handleButtonClick("button8")}
        >
          <img src={buttonImages["button8"]} alt="Button 8" />
        </button>
        {/* <button
          className="soundboard-button"
          onClick={() => handleButtonClick("button9")}
        >
          <img src={buttonImages["button9"]} alt="Button 9" />
        </button>
        <button
          className="soundboard-button"
          onClick={() => handleButtonClick("button10")}
        >
          <img src={buttonImages["button10"]} alt="Button 10" />
        </button> */}
      </div>
    </div>
  );
};

export default Sounds;
