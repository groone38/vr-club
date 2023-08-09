import React from "react";
import logo from "../assets/images/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className="header__list">
        <li>
          <a href="!#" className="header__link">
            Цены
          </a>
        </li>
        <li>
          <a href="!#" className="header__link">
            Игры
          </a>
        </li>
        <li>
          <a href="!#" className="header__link">
            Праздники
          </a>
        </li>
        <li>
          <a href="!#" className="header__link">
            Галерея
          </a>
        </li>
        <li>
          <a href="!#" className="header__link">
            Контакты
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
