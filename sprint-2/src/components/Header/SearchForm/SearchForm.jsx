import "./SearchForm.scss";
// Importing the avatar
import avatar from "../../../assets/Images/Mohan-muruge.jpg";
// Importing the search icon
import searchIcon from "../../../assets/Icons/search.svg";
// Importing the upload arrow
import uploadArrow from "../../../assets/Icons/upload.svg";

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
        <input type="button" value={"UPLOAD"} className="nav__upload" />
      </form>
    </>
  );
}

export default SearchForm;
