import React, { useState } from "react";
import "./SelPage.css";
import ReactPlayer from "react-player";

const SelPage = () => {
  // State to keep track of marker positions
  const [markers, setMarkers] = useState([]);
  const colors = [
    "#ff5733",
    "#33ff57",
    "#5733ff",
    "#ff5733",
    "#33ff57",
    "#5733ff",
    "#ff33ff",
    "#33ffff",
    "#ffff33",
    "#3333ff",
    "#ff6633",
    "#33ff66",
    "#6633ff",
    "#ff3366",
    "#66ff33",
    "#3366ff",
    "#ff9933",
    "#33ff99",
    "#9933ff",
    "#ff3399",
    "#99ff33",
    "#3399ff",
    "#ffcc33",
    "#33ffcc",
    "#cc33ff",
    "#ff33cc",
    "#ccff33",
    "#33ccff",
  ];

  // Function to handle marker drag
  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("index", index.toString());
  };

  // Function to handle marker drop
  const handleDrop = (event) => {
    event.preventDefault();
    const index = parseInt(event.dataTransfer.getData("index"));
    const containerRect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;
    const newMarkers = [...markers];
    newMarkers[index] = { x, y };
    setMarkers(newMarkers);
  };

  // Function to add a new marker
  const addMarker = (event) => {
    // Get container's position relative to the viewport
    const containerRect = event.currentTarget.getBoundingClientRect();
    // Calculate the click position relative to the container
    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;
    // Choose a color for the new marker
    const color = colors[markers.length % colors.length];
    const newMarkers = [...markers, { x, y, color }];
    setMarkers(newMarkers);
  };

  return (
    <div className="sel-container">
      <div className="sel-content-wrapper">
        <div className="sel-react-player-wrapper">
          <ReactPlayer
            className="sel-react-player"
            url="https://youtu.be/l-nXHtfAgY0"
            controls
          />
        </div>
        <div
          className="emotions-chart"
          onClick={addMarker}
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleDrop}
        >
          {/* Render markers */}
          {markers.map((marker, index) => (
            <div
              key={index}
              className="marker"
              style={{
                left: marker.x,
                top: marker.y,
                backgroundColor: marker.color,
              }}
              draggable="true"
              onDragStart={(event) => handleDragStart(event, index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelPage;
