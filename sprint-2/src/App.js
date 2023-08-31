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
        <Route path="/" element={<Home />} />
        <Route path="/uploadVideo" element={<UploadVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
