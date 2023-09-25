import "../../App.scss";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// Import components

import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Highlights from "../Highlights/Highlights";
import VideoList from "../VideoList/VideoList";
import CommentForm from "../Comments/CommentForm/CommentForm";
import CommentList from "../Comments/CommentList/CommentList";
const apiKey = "ff48d547-6d0d-4c12-82d6-1897785980f2";

function Home() {
  const { videoId } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);

  // CALL API TO GET DATA AND STORE IN VIDEOLIST STATE
  useEffect(() => {
    //   Mounting state
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/videos`)
      .then((response) => {
        const videoArr = response.data;
        setVideoList(videoArr);
      });
  }, []);

  // FUNCTION FOR CURRENT VIDEO
  // Using useCallback to stop re-rendering getVideo
  const getVideo = useCallback((id) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/videos/${id}`)
      .then((response) => {
        setCurrentVideo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //GRAB VIDEO DATA ON MOUNT
  useEffect(() => {
    let id = videoId || videoList[0]?.id;
    if (id) {
      getVideo(id);
    }
  }, [videoId, videoList, getVideo]);

  return (
    <>
      {currentVideo && <VideoPlayer currentVideo={currentVideo} />}

      <div className="main__content--container">
        <div className="main__content--left-container">
          {currentVideo && (
            <Highlights
              title={currentVideo.title}
              channel={currentVideo.channel}
              timestamp={currentVideo.timestamp}
              views={currentVideo.views}
              likes={currentVideo.likes}
              description={currentVideo.description}
            />
          )}
          <CommentForm />
          {currentVideo && <CommentList currentComments={currentVideo} />}
        </div>
        <div className="main__content--right-container">
          {currentVideo && videoList && (
            <VideoList videoList={videoList} id={currentVideo.id} />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
