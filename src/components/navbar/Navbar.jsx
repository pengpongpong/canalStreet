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
  const transitionPages = document.querySelectorAll(".navLink");

  const currentUrl = document.URL;
  const regEx = /\w*$/;
  const matchUrl = currentUrl.match(regEx)[0];
  let currentNav;
  const handleNavPage = (e) => {
    e.preventDefault();
    currentNav = e.target.id;
  };

  if (transitionPages) {
    transitionPages.forEach((page) => {
      page.classList.remove("open");
      /* page.childNodes.forEach((el) => (el.style.color = "1")); */
      if (page.classList.contains(currentNav)) {
        page.classList.add("open");
        /* page.childNodes.forEach((obj) => (obj.style.opacity = "0")); */
      }
    });
  }

/*   currentNav = matchUrl; */

  const homeStyle = classNames({ "navLink home": true }, { open: homeClass });
  const foodStyle = classNames({ "navLink food": true }, { open: foodClass });
  const retailStyle = classNames({ "navLink retail": true }, { open: retailClass });
  const communityStyle = classNames({ "navLink community": true }, { open: communityClass });

  return (
    <header>
      <nav
        className="navContainer"
        style={{ backgroundColor: backgroundColor }}
        onClick={handleNavPage}
      >
        <Link id="home" className={homeStyle} to="/">
          <p>餐饮</p>
          <span>home</span>
        </Link>
        <Link id="food" className={foodStyle} to="/food">
          <p>餐饮</p>
          <span>Food</span>
        </Link>
        <Link id="retail" className={retailStyle} to="/retail">
          <p>餐饮</p>
          <span>Retail</span>
        </Link>
        <Link id="community" className={communityStyle} to="/community">
          <p>餐饮</p>
          <span>Community</span>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
