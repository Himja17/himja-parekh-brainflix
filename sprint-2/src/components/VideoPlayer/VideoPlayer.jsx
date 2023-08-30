import "./VideoPlayer.scss";

function VideoPlayer({ currentVideo }) {
  return (
    <div className="videoplayer__main">
      <video poster={currentVideo.image} width={"500px"} controls></video>
    </div>
  );
}

export default VideoPlayer;
