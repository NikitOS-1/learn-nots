import "./BgVideo.scss";

const BgVideo = () => {
  return (
    <div className="video-bg">
      <div className="video-bg__inner">
        <video
          src="smokeVideo.mp4"
          autoPlay="true"
          loop
          className="video-bg__video"></video>
      </div>
      <div className="video-bg__content">
        <h1>Video Background</h1>
      </div>
    </div>
  );
};
export default BgVideo;
