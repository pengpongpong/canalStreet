import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

function Navbar({
  backgroundColor,
  homeClass,
  retailClass,
  communityClass,
  foodClass,
}) {
  const transitionPages = document.querySelectorAll(".nav__item");

  const currentUrl = document.URL;
  const regEx = /\w*$/;
  const matchUrl = currentUrl.match(regEx)[0];
  let currentNav;
  const handleNavPage = (e) => {
    e.preventDefault();
    /* currentNav = e.target.id; */
  };
/* 
  if (transitionPages) {
    transitionPages.forEach((page) => {
      page.classList.remove("open");

      if (page.classList.contains(currentNav)) {
        page.classList.add("open");
      }
    });
  } */

  /*   currentNav = matchUrl; */

  const homeStyle = classNames(
    { "nav__item home": true },
    { "nav__item--open": homeClass }
  );
  const foodStyle = classNames(
    { "nav__item food": true },
    { "nav__item--open": foodClass }
  );
  const retailStyle = classNames(
    { "nav__item retail": true },
    { "nav__item--open": retailClass }
  );
  const communityStyle = classNames(
    { "nav__item community": true },
    { "nav__item--open": communityClass }
  );

  return (
    <header>
      <nav className="nav" onClick={handleNavPage}>
        <ul className="nav__list" style={{ backgroundColor: backgroundColor }}>
          <li className={homeStyle} id="home">
            <Link className="nav__anchor" to="/">
              <p className="nav__headline">餐饮</p>
              <span className="nav__text">home</span>
            </Link>
          </li>
          <li className={foodStyle} id="food">
            <Link className="nav__anchor" to="/food">
              <p className="nav__headline">餐饮</p>
              <span className="nav__text">Food</span>
            </Link>
          </li>
          <li className={retailStyle} id="retail">
            <Link className="nav__anchor" to="/retail">
              <p className="nav__headline">餐饮</p>
              <span className="nav__text">Retail</span>
            </Link>
          </li>
          <li className={communityStyle} id="community">
            <Link className="nav__anchor" to="/community">
              <p className="nav__headline">餐饮</p>
              <span className="nav__text">Community</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
