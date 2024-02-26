import React from "react";
import "./Morning.css";
import ReactPlayer from "react-player";
// import goodmorning from "../../assets/videos/goodmorning.mp4";
import { useNavigate } from "react-router-dom";

const Morning = () => {
  // to redirect to class page
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    navigate("/class");
  };

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://youtu.be/wVBYryccseU"
        width="100%"
        height="100%"
        controls
        onEnded={handleVideoEnd}
      />
      {/* <video src={goodmorning} autoPlay /> */}
    </div>
  );
};

export default Morning;
