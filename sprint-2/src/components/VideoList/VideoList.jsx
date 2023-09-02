import VideoListItem from "../VideoListItem/VideoListItem";
import { Link } from "react-router-dom";
import "./VideoList.scss";

const VideoList = ({ videoList, id }) => {
  return (
    <div>
      <div className="videolist__nextvideos">
        <h3>NEXT VIDEOS</h3>
      </div>
      <div className="videolist__list--container">
        {videoList
          .filter((video) => video.id !== id)
          .map((videoList) => {
            return (
              <Link className="videolist__link" to={`/videos/${videoList.id}`}>
                <VideoListItem
                  id={videoList.id}
                  key={videoList.id}
                  image={videoList.image}
                  title={videoList.title}
                  channel={videoList.channel}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default VideoList;
