import "./Highlights.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import heartIcon from "../../assets/Icons/likes.svg";
import dateConvertor from "../../timestamp";

function Highlights({ title, channel, timestamp, views, likes, description }) {
  return (
    <>
      <main>
        {/* main title */}
        <div className="main__title">
          <h1> {title}</h1>
        </div>

        <div className="main__subtitle--container">
          {/* main subtitle and timestamp */}
          <div className="main__subtitle-timestamp">
            <p className="main__subtitle">By {channel}</p>
            <p className="main__timestamp">{dateConvertor(timestamp)}</p>
          </div>

          {/* main views and likes */}
          <div className="main__likes--container">
            <p className="main__likes-views">
              <img src={viewsIcon} alt="" />
              {views}
            </p>

            <p className="main__likes-views">
              <img src={heartIcon} alt="" />
              {likes}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="main__description">
          <p>{description}</p>
        </div>
      </main>
    </>
  );
}

export default Highlights;
