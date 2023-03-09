import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const handleNavPage = (e) => {
    const transitionPages = document.querySelectorAll(".transitionPage");
    const transitionContainer = document.querySelector(".transitionContainer");
    console.log(e.target.id);

    const community = document.getElementById("communityTransition");
    const retail = document.getElementById("retailTransition");
    const food = document.getElementById("foodTransition");
    const home = document.getElementById("homeTransition");

    // transitionPages.forEach((obj) => {
    const transformStyle = "translateX(calc(-100% + 60px))";
    const transformStyleDefault = "translate3d(0px, 0px, 0px)";
    const transistionDurationStyle = ".5s";
    const widthStyle = "calc(100vw - 180px)";
    const widthStyleDefault = "60px";

    // if (obj.classList.contains(e.target.id)) {
    //   obj.style.transform = transformStyle;
    //   obj.style.transitionDuration = transistionDurationStyle;
    //   obj.style.width = widthStyle;
    // }
    console.log(e.target.id);
    if (e.target.id === "home") {
      home.style.width = widthStyleDefault;
      community.style.transform = transformStyleDefault;
      retail.style.transform = transformStyleDefault;
      food.style.transform = transformStyleDefault;
    }
    if (e.target.id === "food") {
      home.style.width = widthStyleDefault;
      food.style.transform = transformStyle;
      food.style.transitionDuration = transistionDurationStyle;
      food.style.width = widthStyle;
      community.style.transform = transformStyleDefault;
      retail.style.transform = transformStyleDefault;
    }

    if (e.target.id === "retail") {
      home.style.width = widthStyleDefault;
      food.style.width = widthStyleDefault;
      retail.style.transform = transformStyle;
      retail.style.transitionDuration = transistionDurationStyle;
      retail.style.width = widthStyle;
      community.style.transform = transformStyleDefault;
    }
    if (e.target.id === "community") {
      home.style.transform = transformStyleDefault;
      retail.style.width = widthStyleDefault;
      food.style.width = widthStyleDefault;
      community.style.transform = transformStyle;
      community.style.transitionDuration = transistionDurationStyle;
      community.style.width = widthStyle;
    }
    // });
  };

  // const allLinks = document.querySelectorAll(".mainNav");
  // allLinks.forEach((obj) => obj.addEventListener("click", handleNavPage));

  return (
    <header>
      <nav className="transitionContainer" onClick={handleNavPage}>
        <Link id="home" className="mainNav home open" to="/">
          <p>餐饮</p>
          <span>home</span>
        </Link>
        <Link id="food" className="mainNav food" to="/food">
          <p>餐饮</p>
          <span>Food</span>
        </Link>
        <Link id="retail" className="mainNav retail" to="/retail">
          <p>餐饮</p>
          <span>Retail</span>
        </Link>
        <Link id="community" className="mainNav community" to="/community">
          <p>餐饮</p>
          <span>Community</span>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
