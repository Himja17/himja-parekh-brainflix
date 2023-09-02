import "./SearchForm.scss";
// Importing the avatar
import avatar from "../../../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";


function SearchForm() {
  return (
    <>
      <form className="nav__search-container">
        <div className="nav__search-wrapper">
          {/* Search tab and icon */}
          <input type="text" placeholder="Search" className="nav__search-tab" />

          {/*avatar image*/}
          <div className="nav__avatar-container">
            <img src={avatar} alt="" className="nav__avatar" />
          </div>
        </div>

        {/* Upload Button */}
        <Link to="/uploadVideo">
          <input type="button" value={"UPLOAD"} className="nav__upload" />
        </Link>
      </form>
    </>
  );
}

export default SearchForm;
