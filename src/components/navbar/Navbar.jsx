import React from "react";
import { Link } from "react-router-dom";

/*   transitionPages.forEach((obj) => {
    obj.classList.remove("open");
    obj.childNodes.forEach((obj) => (obj.style.opacity = "1"));
    if (obj.classList.contains(currentNav)) {
      obj.classList.add("open");
      obj.childNodes.forEach((obj) => (obj.style.opacity = "0"));
    }
  }); */

function Navbar() {
  const transitionPages = document.querySelectorAll(".navLink");
  const currentUrl = document.URL;
  const regEx = /\w*$/;
  const matchUrl = currentUrl.match(regEx)[0];
  let currentNav;
  const handleNavPage = (e) => {
    e.preventDefault();
    currentNav = e.target.id;
  };

  
  console.log(matchUrl);
  if (matchUrl === "food") {
    currentNav = matchUrl;

    transitionPages.forEach((obj) => {
      obj.classList.remove("open");
      obj.childNodes.forEach((obj) => (obj.style.opacity = "1"));
      if (obj.classList.contains(currentNav)) {
        obj.classList.add("open");
        obj.childNodes.forEach((obj) => (obj.style.opacity = "0"));
      }
    });

    return (
      <header>
        <nav className="navContainer" onClick={handleNavPage}>
          <Link id="home" className="navLink home" to="/">
            <p>餐饮</p>
            <span>home</span>
          </Link>
          <Link id="food" className="navLink food open" to="/food">
            <p>餐饮</p>
            <span>Food</span>
          </Link>
          <Link id="retail" className="navLink retail" to="/retail">
            <p>餐饮</p>
            <span>Retail</span>
          </Link>
          <Link id="community" className="navLink community" to="/community">
            <p>餐饮</p>
            <span>Community</span>
          </Link>
        </nav>
      </header>
    );
  } else {
    currentNav = "home";

    transitionPages.forEach((obj) => {
      obj.classList.remove("open");
      obj.childNodes.forEach((obj) => (obj.style.opacity = "1"));
      if (obj.classList.contains(currentNav)) {
        obj.classList.add("open");
        obj.childNodes.forEach((obj) => (obj.style.opacity = "0"));
      }
    });

    return (
      <header>
        <nav className="navContainer" onClick={handleNavPage}>
          <Link id="home" className="navLink home open" to="/">
            <p>餐饮</p>
            <span>home</span>
          </Link>
          <Link id="food" className="navLink food" to="/food">
            <p>餐饮</p>
            <span>Food</span>
          </Link>
          <Link id="retail" className="navLink retail" to="/retail">
            <p>餐饮</p>
            <span>Retail</span>
          </Link>
          <Link id="community" className="navLink community" to="/community">
            <p>餐饮</p>
            <span>Community</span>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Navbar;
