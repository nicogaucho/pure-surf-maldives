"use client";
import ReactPlayer from "react-player";
import videosrc from "../../public/maldives.mp4";

const VideoPlayer = () => {
  return (
      <ReactPlayer
        className="img-fluid"
        url={videosrc}
        controls={true}
      />
  );
};

export default VideoPlayer;
