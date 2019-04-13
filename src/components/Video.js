import React from "react";

const Video = props => {
  const videoRef = el => {
    const player = el;
    if (player) {
      player.srcObject = props.stream;
    }
  };

  return (
    <div>
      <video ref={videoRef} />
    </div>
  );
};

export default Video;
