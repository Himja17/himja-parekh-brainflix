import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import UploadVideo from "./components/UploadVideo/UploadVideo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        {/* The Home/Video Player Page for displaying the details of a video */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/videos" element={<Home />} /> */}
        {/* The Video Upload Page. */}
        <Route path="/uploadVideo" element={<UploadVideo />} />
        {/* A route that will load the video with the provided video id to be displayed using the Video Player Page */}
        <Route path="/videos/:videoId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
