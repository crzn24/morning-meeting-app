import React from "react";
import "./LofiPage.css";
import ReactPlayer from "react-player";

const LofiPage = () => {
  return (
    <div className="lofipage">
      <div className="lofi-player-wrapper">
        <ReactPlayer
          className="lofi-react-player"
          url="https://youtube.com/playlist?list=PLOseBaVQKym0-ZUXIHYlXV23jN90XwjAJ&si=jtt5u8W5inv3n2MH"
          width="100%"
          height="100%"
          controls
        />
      </div>
    </div>
  );
};

export default LofiPage;
