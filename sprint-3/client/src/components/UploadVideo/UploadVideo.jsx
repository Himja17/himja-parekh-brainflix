import "./UploadVideo.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UploadVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  //Form validation trim white space
  const isFormValid = () => {
    return title.trim().length > 0 && description.trim().length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      try {
        const response = axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/videos`,
          {
            title,
            description,
            
          }
        );
        console.log(response.data);
        alert("Thank you for uploading!");
        handleOnClickHome();
      } catch (error) {
        console.log(error);
        alert("Title and description must be at least 5 characters long");
      }
    } else {
      alert("Please check your form.");
    }
  };

  const navigate = useNavigate();
  const handleOnClickHome = function () {
    navigate("/");
  };

  return (
    <div className="upload__main">
      <div className="upload__border--top"></div>
      <div className="upload__main--sub-parent">
        <div className="upload__video--title">
          <h1>Upload Video</h1>
        </div>
        <div className="upload__video--parent-container">
          <div className="upload__video--container">
            <div className="upload__video--subheading">
              <h2>VIDEO THUMBNAIL</h2>
            </div>
            <div className="upload__video"></div>
          </div>
          <form className="upload__form" onSubmit={handleSubmit}>
            <div className="upload__video--subheading">
              <h2>TITLE YOUR VIDEO</h2>
              <textarea
                className="upload__text-container"
                name="name"
                rows="2"
                cols="50"
                placeholder="Add a title to your video"
                onChange={handleChangeTitle}
                value={title}
              ></textarea>
            </div>
            <div className="upload__video--subheading">
              <h2>ADD A VIDEO DESCRIPTION</h2>
              <textarea
                className="upload__text-container"
                name="video description"
                id=""
                cols="50"
                rows="6"
                placeholder="Add a description to your video"
                onChange={handleChangeDescription}
                value={description}
              ></textarea>
            </div>
          </form>
        </div>
        <div className="upload__bottom--buttons-parent">
          <div className="upload__bottom--buttons">
            <input
              type="button"
              value="PUBLISH"
              className="upload__publish--button"
              onClick={handleSubmit}
            />
            <input
              type="button"
              value="CANCEL"
              className="upload__cancel--button"
              onClick={handleOnClickHome}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadVideo;
