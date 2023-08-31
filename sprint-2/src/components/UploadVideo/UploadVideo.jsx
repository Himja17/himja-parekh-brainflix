function UploadVideo() {
  return (
    <div>
      <div>
        <h1>Upload Video</h1>
      </div>
      <div>
        <h2>VIDEO THUMBNAIL</h2>
      </div>
      <div className="upload__video"></div>
      <form>
        <div>
          <h2>TITLE YOUR VIDEO</h2>
          <input
            type="text"
            name="video title"
            placeholder="Add a title to your video"
          />
        </div>
        <div>
          <h2>ADD A VIDEO DESCRIPTION</h2>
          <textarea
            name="video description"
            id=""
            cols="30"
            rows="10"
            placeholder="Add a description to your video"
          ></textarea>
        </div>
      </form>
      <input type="button" value="PUBLISH" />
      <input type="button" value="CANCEL" />
    </div>
  );
}

export default UploadVideo;
