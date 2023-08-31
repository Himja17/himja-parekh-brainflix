import "../../App.scss";
import React, { useState } from "react";
import VideoData from "../../data/video-details.json";
import axios from "axios";

// Import components

import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Highlights from "../Highlights/Highlights";
import VideoList from "../VideoList/VideoList";
import CommentForm from "../Comments/CommentForm/CommentForm";
import CommentList from "../Comments/CommentList/CommentList";

function Home() {
  const [currentVideo, setCurrentVideo] = useState(VideoData[0]);
  const [videoList, setVideoList] = useState(VideoData);
  const [allVideos, setAllVideos] = useState();

  const handleVideoClick = (id) => {
    setCurrentVideo(videoList.find((videoList) => videoList.id === id));
  };

  // Getting all videos from the API with the below axios call
  axios
    .get(
      "https://project-2-api.herokuapp.com/videos?api_key=ff48d547-6d0d-4c12-82d6-1897785980f2"
    )
    .then((response) => {
        let allVideos = response.data;
        console.log(allVideos);
    });
  
  return (
    <>
      <VideoPlayer currentVideo={currentVideo} />
      <div className="main__content--container">
        <div className="main__content--left-container">
          <Highlights
            title={currentVideo.title}
            channel={currentVideo.channel}
            timestamp={currentVideo.timestamp}
            views={currentVideo.views}
            likes={currentVideo.likes}
            description={currentVideo.description}
          />
          <CommentForm />
          <CommentList currentComments={currentVideo} />
        </div>
        <div className="main__content--right-container">
          <VideoList
            handleVideoClick={handleVideoClick}
            videoList={videoList.filter(
              (videoList) => videoList.id !== currentVideo.id
            )}
          />
        </div>
        {/* <UploadVideo /> */}
      </div>
    </>
  );
}

export default Home;
