import NavLogo from "./NavLogo/NavLogo";
import SearchForm from "./SearchForm/SearchForm";
import "./Header.scss";
   
function Header() {
  return (
    <header>
      <div className="nav__container">
        <div className="nav__item">
          <NavLogo />
          <SearchForm />
        </div>
      </div>
    </header>
  );
}

export default Header;
