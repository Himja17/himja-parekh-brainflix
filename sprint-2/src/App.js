import "./App.scss";
import React, { useState } from "react";
import VideoData from "./data/video-details.json";

// Import components
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Highlights from "./components/Highlights/Highlights";
import VideoList from "./components/VideoList/VideoList";
import CommentForm from "./components/Comments/CommentForm/CommentForm";
import CommentList from "./components/Comments/CommentList/CommentList";

function App() {
  const [currentVideo, setCurrentVideo] = useState(VideoData[0]);
  const [videoList, setVideoList] = useState(VideoData);

  const handleVideoClick = (id) => {
    setCurrentVideo(videoList.find((videoList) => videoList.id === id));
  };

  return (
    <>
      <Header />
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
      </div>
    </>
  );
}

export default App;
