import { useMediaQuery } from "react-responsive";

import "./Navigation.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link, useLocation } from "react-router-dom";

function Navigation({ isLoggedIn }) {
  const isMobile = useMediaQuery({ query: `(max-width: 1180px)` });
  const path = useLocation().pathname;

  return (
    <div className='navigation'>
      {!isLoggedIn ? (
        <nav className='navigation__log-buttons'>
          <Link to='/signup'>
            <button className='navigation__register'>Регистрация</button>
          </Link>
          <Link to='/signin'>
            <button className='navigation__login'>Войти</button>
          </Link>
        </nav>
      ) : isMobile ? (
        <BurgerMenu />
      ) : (
        <>
          <div className='navigation__films'>
            <Link
              to='/movies'
              className={`navigation__film-item navigation__all-films${
                path === "/movies" ? " navigation__film-item_type_active" : ""
              }`}
            >
              Фильмы
            </Link>
            <Link
              to='/saved-movies'
              className={`navigation__film-item navigation__all-films${
                path === "/saved-movies"
                  ? " navigation__film-item_type_active"
                  : ""
              }`}
            >
              Сохраненные фильмы
            </Link>
          </div>
          <Link to='/profile' className='navigation__user-button'>
            Аккаунт
          </Link>
        </>
      )}
    </div>
  );
}

export default Navigation;
