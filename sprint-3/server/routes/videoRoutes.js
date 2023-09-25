const router = require("express").Router();
const fs = require("fs");
const { v4: uuid } = require("uuid");
const videoData = require("../data/video-details.json");

// Getting video list data
router.get("/videos", (req, res) => {
  const videoDetails = videoData.map((data) => {
    return {
      id: data.id,
      title: data.title,
      channel: data.channel,
      image: data.image,
    };
  });
  res.status(200).send(videoDetails);
  console.log(videoDetails);
});

// Getting video data for a specific id

router.get("/videos/:id", (req, res) => {
  const videoId = req.params.id;
  const selectedVideo = videoData.find((data) => data.id === videoId);
  res.status(200).send(selectedVideo);
});

// Posting video

router.post("/videos", (req, res) => {
  const newData = {
    id: uuid(),
    title: req.body.title,
    channel: req.body.channel,
    image: `http://localhost:8080/public/test-image.jpg`,
    description: req.body.description,
    views: 0,
    likes: 0,
    duration: req.body.duration,
    video: req.body.video,
    timestamp: req.body.timestamp,
    comments: [],
  };
  console.log(newData.title);
  videoData.push(newData);
  fs.writeFile(
    __dirname + "/../data/video-details.json",
    JSON.stringify(videoData, null, 2),
    (err) => {
      if (err) {
        console.log("File could not found");
      } else {
        res.status(200).send("Success!");
      }
    }
  );
});

module.exports = router;
