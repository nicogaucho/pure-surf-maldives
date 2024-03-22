import maldivesURL from "../../public/maldives.mp4";
const VideoComponent = () => {
  return (
      <div>
          <video className="img-fluid" controls>
              <source src={maldivesURL} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
      </div>
  );
};

export default VideoComponent;