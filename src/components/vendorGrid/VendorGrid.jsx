import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./VendorGrid.sass"

function VendorGrid({ vendorData, retail }) {
  const imageContainer = useRef()

  //mouse-enter vendor card -> display image
  const enterVendor = (e) => {
    const randomX = Math.floor(Math.random() * 100) * 10 + 60;
    const randomY = (Math.floor(Math.random() * 10) * 40)

    imageContainer.current.childNodes.forEach((obj) => {
      if (obj.id === e.currentTarget.id) {
        obj.style.opacity = "1";
        obj.style.transform = `translate(${randomX}px, ${randomY}px)`;
      }
    });
  };

  //mouse-exit vendor card -> hide image
  const exitVendor = () => {
    imageContainer.current.childNodes.forEach((obj) => {
      obj.style.opacity = "0";
    });
  };

  const linkCat = retail ? "retail" : "food"

  return (
    <>
      <div className="vendorImage" aria-hidden={true} ref={imageContainer}>
        {vendorData.map((obj) => {
          const bgImage = `no-repeat url(${obj.imageSrc})`;
          const imageCard = (
            <div id={obj.vendor.replace(/\s/gi, "")} className="vendorImage__card" style={{ background: bgImage, backgroundSize: "100%" }} key={obj.vendor}></div>
          );
          return imageCard;
        })}
      </div>
      <section className="vendorCard">
        {vendorData.map((obj) => {
          const vendorCard = (
            <Link
              key={obj.vendor}
              id={obj.vendor.replace(/\s/gi, "")}
              to={`/${linkCat}/${obj.vendor.replace(/\s/gi, "-")}`}
              className="vendorCard__anchor"
              onMouseEnter={enterVendor}
              onMouseLeave={exitVendor}
            >
              <p className="vendorCard__cat">{obj.headline}</p>
              <p className="vendorCard__vendor">{obj.vendor}</p>
            </Link>
          );
          return vendorCard;
        })}
      </section>
    </>
  );
}

export default VendorGrid;
