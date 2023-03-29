import React from "react";
import { Link } from "react-router-dom";

function VendorGrid({ vendorData }) {

  const enterVendor = (e) => {
    const foodImageContainer = document.querySelector(".foodImage");
    const randomX = Math.floor(Math.random() * 100) * 10 + 60;
    const randomY = (Math.floor(Math.random() * 10) * 40)
    
    foodImageContainer.childNodes.forEach((obj) => {
      if (obj.classList.contains(e.currentTarget.id)) {
        obj.style.opacity = "1";
        obj.style.transform = `translate(${randomX}px, ${randomY}px)`;
      }
    });
  };

  const exitVendor = () => {
    const foodImageContainer = document.querySelector(".foodImage");
    foodImageContainer.childNodes.forEach((obj) => {
      obj.style.opacity = "0";
    });
  };

  return (
    <>
      <div className="foodImage">
        {vendorData.map((obj, index) => {
          const imageClass = `foodImage__card ${obj.vendorID}`;
          const bgImage = `no-repeat url(${obj.imageSrc})`;
          const imageCard = (
            <div className={imageClass} style={{ background: bgImage, backgroundSize: "100%" }} key={index}></div>
          );
          return imageCard;
        })}
      </div>
      <section className="foodVendors">
        {vendorData.map((obj, index) => {
          const vendorCard = (
            <div className="foodVendors__card" key={index}>
              <Link
                id={obj.vendorID}
                to={`/food/${obj.vendor.replace(" ", "-")}`}
                className="foodVendors__anchor"
                onMouseEnter={enterVendor}
                onMouseLeave={exitVendor}
              >
                <p className="foodVendors__food">{obj.headline}</p>
                <p className="foodVendors__vendor">{obj.vendor}</p>
              </Link>
            </div>
          );
          return vendorCard;
        })}
      </section>
    </>
  );
}

export default VendorGrid;
