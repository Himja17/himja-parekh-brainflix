import "./VideoListItem.scss";

const VideoListItem = ({ id, image, title, channel, handleVideoClick }) => {
  return (
    <div className="videolist__main" onClick={()=>handleVideoClick(id)}>
      <div className="videolist">
        <div key={id} className="videolist__image--container">
          <video poster={image} className="videolist__image"></video>
        </div>
        <div className="videolist__title--container">
          <h2 className="videolist__tile--title">{title}</h2>
          <h3 className="videolist__title--channel">{channel}</h3>
        </div>
      </div>
    </div>
  );
};
export default VideoListItem;
