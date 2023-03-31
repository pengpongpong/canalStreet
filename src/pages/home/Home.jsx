import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "/src/components/footer/Footer"
import Events from "/src/components/events/Events";
import PageContainer from "/src/components/container/PageContainer"
import "./Home.sass"

function Home() {

  window.addEventListener("scroll", (e) => {
    const bgImage = document.getElementById("bgContainer");
    const descriptions = document.querySelector(".descriptions__list");

    //console.log(window.screen.width);
    if (window.scrollY > 450) {
      bgImage.style.opacity = "1";
    }

    if (window.scrollY > 1550) {
      descriptions.style.opacity = "1";
    }
  });

  const eventsData =
    [
      { date: "12/02", event: "Small Business Retail Pop Up Weekend!" },
      {
        date: "02/07", event:
          "New Balance x Paperboy Paris by Greenhouse @ Canal Street Market"
      },
      {
        date: "12/11",
        event: "Hack City 12/11<"
      }
    ]

  const marketDescription = [
    { imageSrc: "src/assets/images/pages-images/home/canalStreetMarket.jpg", imageAlt: "Canal Street Market", description: "Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community." },
    { imageSrc: "src/assets/images/pages-images/home/retailMarket.jpg", imageAlt: "Retail Market", description: `Retail Market Hours:\nFri– Sun: 11:00AM - 7:00PM` },
    { imageSrc: "src/assets/images/pages-images/home/foodHall.jpg", imageAlt: "Food Hall", description: `Food Hall Hours:\nMon – Sun: 11:00AM - 8:00PM` }
  ]

  const marketDescriptionItems = marketDescription.map(obj => {
    return (
      <li className="descriptions__item">
        <img
          className="descriptions__image"
          src={obj.imageSrc}
          alt={obj.imageAlt}
        />
        <p className="descriptions__text">{obj.description}</p>
      </li>
    )
  })

  return (
    <PageContainer>
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
      <div className="bgContainer" id="bgContainer"></div>
      <section className="descriptions">
        <h2 className="descriptions__headline">A New Kind of Market</h2>
        <ul className="descriptions__list">
          {marketDescriptionItems}
        </ul>
      </section>
      <section className="eventsBanner">
        <span className="eventsBanner__logo" aria-hidden={true}>活動</span>
        <h2 className="eventsBanner__headline">{`Market\nEvents`}</h2>
        <span className="eventsBanner__logo" aria-hidden={true}>活動</span>
      </section>
      <Events
        data={eventsData}
        bgColor="#fff" />
      <section className="address">
        <div className="address__box">
          <h3 className="address__text">265 Canal St. New York, NY</h3>
        </div>
        <div className="address__box">
          <img className="address__map" src="src/assets/images/pages-images/home/map.jpg"></img>
        </div>
      </section>
      <Footer />
    </PageContainer>
  );
}

export default Home;
