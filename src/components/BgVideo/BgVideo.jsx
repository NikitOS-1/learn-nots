import "./BgVideo.scss";

const BgVideo = () => {
  return (
    <div className="video-bg">
      <div className="video-bg__inner">
        <video autoPlay muted playsInline loop className="video-bg__video">
          <source src="two-vid.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="video-bg__content">
        <h1>Video Background</h1>
      </div>
    </div>
  );
};
export default BgVideo;
