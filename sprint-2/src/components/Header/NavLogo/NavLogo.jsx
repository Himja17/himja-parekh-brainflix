import "./NavLogo.scss";
import logo from "../../../assets/Logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";
// In JSX file, the file path does not work so importing logo from the assets folder
// using logo inside the curly brackets as we imported- need to write in jsx format

function NavLogo() {
  return (
    <div className="nav__logo">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}

export default NavLogo;
