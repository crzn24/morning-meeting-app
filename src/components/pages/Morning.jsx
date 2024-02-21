import React from "react";
import "./Morning.css";
import ReactPlayer from "react-player";
// import goodmorning from "../../assets/videos/goodmorning.mp4";
import { useNavigate } from "react-router-dom";

const Morning = () => {
  const navigate = useNavigate(); // Initialize useHistory hook

  const handleVideoEnd = () => {
    navigate("/class"); 
  };

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=-0o79IMmAYE&embeds_referring_euri=https%3A%2F%2Fdocs.google.com%2F&embeds_referring_origin=https%3A%2F%2Fdocs.google.com&source_ve_path=MjM4NTE&feature=emb_title"
        width="100%"
        height="100%"
        controls
        onEnded={handleVideoEnd}
      />
      {/* <video src={goodmorning} autoPlay /> */}
      {/* <h1>WELCOME TO ILC</h1>
      <p>Let's start the day!</p> */}
    </div>
  );
};

export default Morning;
