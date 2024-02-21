import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const path = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`burger-menu__overlay ${
          isOpen ? "burger-menu__overlay_type_opened" : ""
        }`}
      ></div>
      <div className="burger-menu">
        <button
          className={`burger-menu__toggle ${
            isOpen ? "burger-menu__toggle_type_open" : ""
          }`}
          onClick={toggleMenu}
        >
          <span className="burger-menu__bar"></span>
          <span className="burger-menu__bar"></span>
          <span className="burger-menu__bar"></span>
        </button>
        <nav
          className={`burger-menu__nav ${
            isOpen ? "burger-menu__nav_type_open" : ""
          }`}
        >
          <ul className="burger-menu__list">
            <li
              className={`burger-menu__item${
                path.pathname === "/" ? " burger-menu__item_type_active" : ""
              }`}
            >
              <Link to="/">Главная</Link>
            </li>
            <li
              className={`burger-menu__item${
                path.pathname === "/movies"
                  ? " burger-menu__item_type_active"
                  : ""
              }`}
            >
              <Link to="/movies">Фильмы</Link>
            </li>
            <li
              className={`burger-menu__item${
                path.pathname === "/saved-movies"
                  ? " burger-menu__item_type_active"
                  : ""
              }`}
            >
              <Link to="/saved-movies">Сохранённые фильмы</Link>
            </li>
          </ul>
          <Link to="/profile">
            <button className="burger-menu__account">Аккаунт</button>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default BurgerMenu;
