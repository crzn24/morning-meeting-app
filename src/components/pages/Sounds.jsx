import React from 'react';
import "./Sounds.css";

// Import button images
import button1Image from '../../assets/sounds/IG12yes.gif';
import button2Image from '../../assets/sounds/IG12no.gif';

// Import audio files
import button1Audio from '../../assets/sounds/IG12yes.mp3';
import button2Audio from '../../assets/sounds/IG12no.mp3';

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
    // Add more button images as needed
  };

  // Define audio files
  const audioFiles = {
    button1: button1Audio,
    button2: button2Audio,
    // Add more audio files as needed
  };

  return (
    <div className="sounds">
      <h1>SOUNDBOARD</h1>
      <div className="soundboard">
        <button
          className="soundboard-button"
          onClick={() => handleButtonClick('button1')}
        >
          <img src={buttonImages['button1']} alt="Button 1" />
        </button>
        <button
          className="soundboard-button"
          onClick={() => handleButtonClick('button2')}
        >
          <img src={buttonImages['button2']} alt="Button 2" />
        </button>
        {/* Add more buttons as needed */}
      </div>
    </div>
  );
}

export default Sounds;
