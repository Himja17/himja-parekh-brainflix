import './NavLogo.scss'
import logo from "../../../assets/Logo/BrainFlix-logo.svg";
// In JSX file, the file path does not work so importing logo from the assets folder
// using logo inside the curly brackets as we imported- need to write in jsx format

function NavLogo() {
  return (
    <div className="nav__logo">
      <img src={logo} alt="" />
    </div>
  );
}

export default NavLogo;
