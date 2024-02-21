import "./Header.css";
import logo_header from "../../images/logo_header.svg";

import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo_header} alt="Логотип" />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
