import React from 'react'
import Intro from "../intro/Intro"
import VendorGrid from "../vendorGrid/VendorGrid"
import Banner from "../banner/Banner"
import Footer from "../footer/Footer"
import RetailMarket from "../../assets/images/retailMarket2.jpeg"
import RoseIcon from "../../assets/images/rose.svg"

function Retail() {

  const imageData = [
    {
      imageSrc: "/src/assets/images/pho.jpg",
      imageText: "pho",
    },
    {
      imageSrc: "/src/assets/images/mooncake.jpg",
      imageText: "mooncake",
    },
    {
      imageSrc: "/src/assets/images/burger.jpg",
      imageText: "burger",
    },
    {
      imageSrc: "/src/assets/images/burrito.jpg",
      imageText: "burrito",
    },
    {
      imageSrc: "/src/assets/images/chickenSkewer.jpg",
      imageText: "chickenSkewer",
    },
    {
      imageSrc: "/src/assets/images/cockedSeafood.jpg",
      imageText: "cockedSeafood",
    },
    {
      imageSrc: "/src/assets/images/iceFruitBowl.jpg",
      imageText: "iceFruitBowl",
    },
    {
      imageSrc: "/src/assets/images/pancakes.jpg",
      imageText: "pancakes",
    },
    {
      imageSrc: "/src/assets/images/salmon.jpg",
      imageText: "salmon",
    },
    {
      imageSrc: "/src/assets/images/saladBacon.jpg",
      imageText: "saladBacon",
    },
  ];

  const vendorData = [
    {
      vendorID: "pho",
      headline: "Vietnamese Soup Pho",
      vendor: "Vietnamese Soup Pho Vendor",
    },
    {
      vendorID: "mooncake",
      headline: "Chinese Mooncake",
      vendor: "Chinese Mooncake Vendor",
    },
    {
      vendorID: "burger",
      headline: "Delicious Burger",
      vendor: "Delicious Burger Vendor",
    },
    {
      vendorID: "burrito",
      headline: "Mexican Burrito",
      vendor: "Mexican Burrito Vendor",
    },
    {
      vendorID: "chickenSkewer",
      headline: "Delightful Chicken Skewer",
      vendor: "Delightful Chicken Skewer Vendo",
    },
    {
      vendorID: "cockedSeafood",
      headline: "Japanese Cocked Seafood",
      vendor: "Japanese Cocked Seafood Vendor",
    },
    {
      vendorID: "iceFruitBowl",
      headline: "Ice Fruit Bow",
      vendor: "Ice Fruit Bowl Vendor",
    },
    {
      vendorID: "pancakes",
      headline: "Delicious Pancakes",
      vendor: "Delicious Pancakes Vendor",
    },
    {
      vendorID: "salmon",
      headline: "Delightful Salmon",
      vendor: "Delightful Salmon Vendor",
    },
    {
      vendorID: "saladBacon",
      headline: "Salad Bacon Plate",
      vendor: "Salad Bacon Plate Vendor",
    },
  ];
  return (
    <div className='pageContainer' style={{ left: "120px" }}>
      <Intro
        page="Retail"
        text={`Retail Market Hours\nFri - Sun: 11:00AM - 7:00PM`}
        headline="The Retail Market"
        image={RetailMarket}
        imageAlt="retail market"
      />
      <VendorGrid imageData={imageData} vendorData={vendorData} />
      <section className="foodBannerContainer">
        <Banner
          image={RoseIcon}
          imageAlt="smiley icon"
          headline="The Best of NYC"
          text="All under one roof!"
        />
      </section>
      <Footer/>
    </div>
  )
}

export default Retail