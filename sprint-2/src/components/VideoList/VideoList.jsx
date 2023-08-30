import VideoListItem from "../VideoListItem/VideoListItem";

import "./VideoList.scss";
import { Link } from "react-router-dom";

const VideoList = ({ videoList, handleVideoClick }) => {
  return (
    <div>
      <div className="videolist__nextvideos">
        <h3>NEXT VIDEOS</h3>
      </div>
      <div className="videolist__list--container">
        {videoList.map((videoList) => {
          return (
            <Link>
              <VideoListItem
                handleVideoClick={handleVideoClick}
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
