import React, { useRef, useEffect } from "react";
import video from "./ARTIZIRI.webm";
import "./style.css"
const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        className="video"
        loop
        autoplay
        muted
        playsInline
        style={{ display: "block", margin: "0 auto" }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
