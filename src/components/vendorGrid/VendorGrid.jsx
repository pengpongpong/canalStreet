import React from "react";
import { Link } from "react-router-dom";
import "./VendorGrid.sass"

function VendorGrid({ vendorData, retail }) {

  //enter vendor card -> display image
  const enterVendor = (e) => {
    const foodImageContainer = document.querySelector(".vendorImage");
    const randomX = Math.floor(Math.random() * 100) * 10 + 60;
    const randomY = (Math.floor(Math.random() * 10) * 40)

    foodImageContainer.childNodes.forEach((obj) => {
      if (obj.id === e.currentTarget.id) {
        obj.style.opacity = "1";
        obj.style.transform = `translate(${randomX}px, ${randomY}px)`;
      }
    });
  };

  //exit vendor card -> hide image
  const exitVendor = () => {
    const foodImageContainer = document.querySelector(".vendorImage");
    foodImageContainer.childNodes.forEach((obj) => {
      obj.style.opacity = "0";
    });
  };

  const linkCat = retail ? "retail" : "food"

  return (
    <>
      <div className="vendorImage" aria-hidden={true}>
        {vendorData.map((obj, index) => {
          const bgImage = `no-repeat url(${obj.imageSrc})`;
          const imageCard = (
            <div id={obj.vendor.replace(/\s/gi, "")} className="vendorImage__card" style={{ background: bgImage, backgroundSize: "100%" }} key={index}></div>
          );
          return imageCard;
        })}
      </div>
      <section className="vendorCard">
        {vendorData.map((obj, index) => {
          const vendorCard = (
            <div key={index}>
              <Link
                id={obj.vendor.replace(/\s/gi, "")}
                to={`/${linkCat}/${obj.vendor.replace(/\s/gi, "-")}`}
                className="vendorCard__anchor"
                onMouseEnter={enterVendor}
                onMouseLeave={exitVendor}
              >
                <p className="vendorCard__cat">{obj.headline}</p>
                <p className="vendorCard__vendor">{obj.vendor}</p>
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
