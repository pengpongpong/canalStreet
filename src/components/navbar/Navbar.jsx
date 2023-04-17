import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.sass"
import FoodIcon from "/src/assets/icons/food.svg"
import CommunityIcon from "/src/assets/icons/community.svg"
import RetailIcon from "/src/assets/icons/retail.svg"

function Navbar({
  backgroundColor,
  homeClass,
  retailClass,
  communityClass,
  foodClass,
}) {


  const homeStyle = classNames(
    { "nav__item": true },
    { "nav__item--open": homeClass }
  );
  const foodStyle = classNames(
    { "nav__item": true },
    { "nav__item--open": foodClass }
  );
  const retailStyle = classNames(
    { "nav__item": true },
    { "nav__item--open": retailClass }
  );
  const communityStyle = classNames(
    { "nav__item": true },
    { "nav__item--open": communityClass }
  );

  const homeIconStyle = classNames(
    { "nav__homeIconAnchor": true },
    { "nav__homeIconAnchor--open": homeClass }
  )

  return (
    <header>
      <nav className="nav">
        <Link className={homeIconStyle} to="/"></Link>
        <ul className="nav__list" style={{ backgroundColor: backgroundColor }}>
          <li className={homeStyle} id="home">
            <Link className="nav__anchor" to="/">
              <span className="nav__text">home</span>
            </Link>
          </li>
          <li className={foodStyle} id="food">
            <Link className="nav__anchor" to="/food">
              <img className="nav__icon" src={FoodIcon} />
              <span className="nav__text">Food</span>
            </Link>
          </li>
          <li className={retailStyle} id="retail">
            <Link className="nav__anchor" to="/retail">
              <img className="nav__icon" src={RetailIcon} />
              <span className="nav__text">Retail</span>
            </Link>
          </li>
          <li className={communityStyle} id="community">
            <Link className="nav__anchor" to="/community">
              <img className="nav__icon" src={CommunityIcon} />
              <span className="nav__text">Community</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
