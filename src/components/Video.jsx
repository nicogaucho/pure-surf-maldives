"use client";
import ReactPlayer from "react-player";
import videosrc from "../../public/maldives.mp4";
import classes from '../styles/page.module.css';

const VideoPlayer = () => {
  return (
      <ReactPlayer
        className={`img-fluid mx-auto ${classes.video}`}
        url={videosrc}
        controls={true}
      />
  );
};

export default VideoPlayer;
