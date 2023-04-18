import classNames from "classnames";
import React, { useRef } from "react";
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

  const nav = useRef()


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

  //change visibility or set bg color from ul to main
  const closeNav = () => {
    const navItems = document.querySelectorAll(".nav__item")
    navItems.forEach(obj => {
      obj.style.visibility = "hidden"
    })
  }

  return (
    <header>
      <button onClick={closeNav}>minimize</button>
      <nav className="nav" ref={nav}>
        <Link className={homeIconStyle} to="/"></Link>
        <ul className="nav__list" style={{  }}>
          <li className={homeStyle} id="home">
            <Link className="nav__anchor" to="/">
              <span className="nav__text">Home</span>
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
