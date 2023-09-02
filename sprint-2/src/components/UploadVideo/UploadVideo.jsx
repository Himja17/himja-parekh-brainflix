import "./UploadVideo.scss";

function UploadVideo() {
  return (
    <div className="upload__main">
      <div className="upload__video--title">
        <h1>Upload Video</h1>
      </div>
      <div className="upload__video--subheading">
        <h2>VIDEO THUMBNAIL</h2>
      </div>
      <div className="upload__video"></div>
      <form>
        <div className="upload__video--subheading">
          <h2>TITLE YOUR VIDEO</h2>
          <textarea
            className="upload__text-container"
            name="name"
            rows="2"
            cols="50"
            placeholder="Add a title to your video"
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
          ></textarea>
        </div>
      </form>
      <input
        type="button"
        value="PUBLISH"
        className="upload__publish--button"
      />
      <input type="button" value="CANCEL" className="upload__cancel--button" />
    </div>
  );
}

export default UploadVideo;
