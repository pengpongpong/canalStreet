import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "/src/components/footer/Footer"
import EventBanner from "/src/components/EventBanner/EventBanner";
import PageContainer from "/src/components/container/PageContainer"
import VendorRegisterBanner from "/src/components/footer/VendorRegisterBanner"
import "./Home.sass"

const marketDescription = [
  { imageSrc: "/public/images/pages-images/home/canalStreetMarket.jpg", imageAlt: "Canal Street Market", description: "Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community." },
  { imageSrc: "/public/images/pages-images/home/retailMarket.jpg", imageAlt: "Retail Market", description: `Retail Market Hours:\nFri– Sun: 11:00AM - 7:00PM` },
  { imageSrc: "/public/images/pages-images/home/foodHall.jpg", imageAlt: "Food Hall", description: `Food Hall Hours:\nMon – Sun: 11:00AM - 8:00PM` }
]

const MarketDescriptionItems = ({ arr }) => (
  arr.map(obj => {
    return (
      <li className="descriptions__item" key={obj.imageAlt}>
        <img
          className="descriptions__image"
          src={process.env.PUBLIC_URL + obj.imageSrc}
          alt={obj.imageAlt}
        />
        <p className="descriptions__text">{obj.description}</p>
      </li>
    )
  })
)

const AddressBox = ({ element }) => (
  <Link to="https://www.google.com/maps/place/Albert+Cuyp+Market/@52.3559705,4.8928122,17z/data=!4m6!3m5!1s0x47c609f28b745671:0xd2d8aeb9aaa10b4b!8m2!3d52.3559673!4d4.8953871!16s%2Fm%2F0269ljs" target="_blank" className="address__box">
    {element}
  </Link>
)

function Home({ bgColor }) {
  const data = useLoaderData()
  const screenWidth = window.innerWidth

  window.addEventListener("scroll", () => {
    const bgImage = document.getElementById("bgContainer");
    const descriptions = document.querySelector(".descriptions__list");

    if (window.scrollY > 100 && screenWidth < 400) {
      bgImage.style.opacity = "1";
    }

    if (window.scrollY > 450 && screenWidth < 400) {
      descriptions.style.opacity = "1";
    }

    if (window.scrollY > 450) {
      bgImage.style.opacity = "1";
    }

    if (window.scrollY > 1550) {
      descriptions.style.opacity = "1";
    }
  });

  return (
    <PageContainer bgColor={bgColor}>
      <section className="homePage">
        <h1 className="homePage__headline">
          Discover the Street Market - open all year round, showcasing a diverse range of small businesses and artisanal treasures. Join us in{" "}
          <Link className="homePage__anchor" to="/community">supporting small business</Link>{" "}
          and experience the best of our vibrant community at the Street Market!
        </h1>
      </section>
      <div className="bgContainer" id="bgContainer"></div>
      <section className="descriptions">
        <h2 className="descriptions__headline">A New Kind of Market</h2>
        <ul className="descriptions__list">
          <MarketDescriptionItems
            arr={marketDescription}
          />
        </ul>
      </section>
      <section className="eventsBanner">
        <span className="eventsBanner__logo" aria-hidden={true}>活動</span>
        <h2 className="eventsBanner__headline">{`Market\nEvents`}</h2>
        <span className="eventsBanner__logo" aria-hidden={true}>活動</span>
      </section>
      <EventBanner
        data={data.eventData}
        bgColor="#fff" />
      <section className="address">
        <AddressBox
          element={<h3 className="address__text">Albert Cuypstraat, Netherlands</h3>}
        />
        <AddressBox
          element={<img className="address__map" src={process.env.PUBLIC_URL + "/public/images/pages-images/home/map.png"}></img>}
        />
      </section>
      <VendorRegisterBanner />
      <Footer />
    </PageContainer>
  );
}

export default Home;
