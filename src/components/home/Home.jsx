import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  window.addEventListener("scroll", () => {
    const bgImage = document.getElementById("bgContainer");
    const descriptions = document.querySelector(".descriptions__list");

    if (window.scrollY > 400) {
      bgImage.style.opacity = "1";
    }
    if (window.scrollY > 1200) {
      descriptions.style.opacity = "1";
    }
    /*     console.log(window.scrollY) */
  });

  return (
    <section className="pageContainer">
      <section className="homePage">
        <h1 className="homePage__headline">
          Canal Street Market is a carefully curated retail market, food hall &
          community space open year-round at 265 Canal Street.{" "}
          <Link className="homePage__anchor" to="/community">
            Support Small Business{" "}
          </Link>
          this weekend!
        </h1>
      </section>
      <section className="bgContainer" id="bgContainer"></section>
      <section className="descriptions">
        <h2 className="descriptions__headline">A New Kind of Market</h2>
        <ul className="descriptions__list">
          <li className="descriptions__item">
            <img
              className="descriptions__image"
              src="src/assets/images/canalStreetMarket.jpg"
              alt="Canal Street Market"
            />
            <p className="descriptions__text">
              Merging retail, food, art, and culture, Canal Street Market
              highlights top retail and design concepts, restaurants, and
              up-and-coming players in the downtown New York City community.
            </p>
          </li>
          <li className="descriptions__item">
            <img
              className="descriptions__image"
              src="src/assets/images/retailMarket.jpg"
              alt="Retail Market"
            />
            <p className="descriptions__text">Retail Market Hours:</p>
            <p className="descriptions__text">Fri– Sun: 11:00AM - 7:00PM</p>
          </li>
          <li className="descriptions__item">
            <img
              className="descriptions__image"
              src="src/assets/images/foodHall.jpg"
              alt="Food Hall"
            />
            <p className="descriptions__text">Food Hall Hours:</p>
            <p className="descriptions__text">Mon – Sun: 11:00AM - 8:00PM</p>
          </li>
        </ul>
      </section>
      <section className="homeEvents">
        <div className="eventsBanner">
          <span className="eventsBanner__logo">活動</span>
          <h2 className="eventsBanner__headline">Market Events</h2>
          <span className="eventsBanner__logo">活動</span>
        </div>
        <ul className="homeEvents__list">
          <li className="homeEvents__item">
            <p className="homeEvents__date">12/02</p>
            <p className="homeEvents__headline">
              Small Business Retail Pop Up Weekend!
            </p>
          </li>
          <li className="homeEvents__item">
            <p className="homeEvents__date">02/07</p>
            <p className="homeEvents__headline">
              New Balance x Paperboy Paris by Greenhouse @ Canal Street Market
            </p>
          </li>
          <li className="homeEvents__item">
            <p className="homeEvents__date">12/11</p>
            <p className="homeEvents__headline">Hack City 12/11</p>
          </li>
        </ul>
        <button className="homeEvents__button">see all</button>
      </section>
      <section className="address">
        <div className="address__box">
          <h3 className="address__text">265 Canal St. New York, NY</h3>
        </div>
        <div className="address__box">
          <img className="address__map" src="src/assets/images/map.jpg"></img>
        </div>
      </section>
      <section className="vendor">
        <h3 className="vendor__headline">Interested in becoming a vendor?</h3>
        <button className="vendor__button">click here</button>
      </section>
      <section className="socials">
        <ul className="socials__list">
          <li className="socials__item">
            <p>Email us</p>
          </li>
          <li className="socials__item">
            <p>Follow us on facebook</p>
          </li>
          <li className="socials__item">
            <p>Follow us on instagram</p>
          </li>
        </ul>
      </section>
      <section className="newsletter"></section>

      <footer></footer>
    </section>
  );
}

export default Home;
