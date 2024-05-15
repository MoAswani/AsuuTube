import React from "react";
import "./Video.css";
import Playvideo from "../../Components/Playvideo/Playvideo";
import Recommended from "../../Components/Recommended/Recommended";

const Video = () => {
  return (
    <div className="play-container">
      <Playvideo></Playvideo>
      <Recommended></Recommended>
    </div>
  );
};

export default Video;
