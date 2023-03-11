import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  window.addEventListener("scroll", () => {
    const bgImage = document.getElementById("imageContainer");
    if (window.scrollY > 400) {
      bgImage.style.opacity = "1";
    }
  });

  return (
    <div className="landing">
      <section className="homePage">
        <p>
          Canal Street Market is a carefully curated retail market, food hall &
          community space open year-round at 265 Canal Street.{" "}
          <Link to="/community">Support Small Business</Link> this weekend!
        </p>
      </section>
      <section className="imageContainer" id="imageContainer"></section>
      <section className="descriptionContainer">
        <h1>A New Kind of Market</h1>
        <div className="descriptions">
          <div className="descriptions__card">
            <img src="src/assets/images/canalStreetMarket.jpg" alt="Canal Street Market" />
            <p>
              Merging retail, food, art, and culture, Canal Street Market
              highlights top retail and design concepts, restaurants, and
              up-and-coming players in the downtown New York City community.
            </p>
          </div>
          <div className="descriptions__card">
            <img src="src/assets/images/retailMarket.jpg" alt="Retail Market" />
            <p> Retail Market Hours: Fri– Sun: 11:00AM - 7:00PM</p>
          </div>
          <div className="descriptions__card">
            <img src="src/assets/images/foodHall.jpg" alt="Food Hall" />
            <p>Food Hall Hours: Mon – Sun: 11:00AM - 8:00PM</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
