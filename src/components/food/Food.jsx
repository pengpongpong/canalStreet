import React from "react";
import { useLoaderData } from "react-router-dom";
import Intro from "../intro/Intro";
import Banner from "../banner/Banner";
import SmileyIcon from "/src/assets/images/smiley.svg";
import Footer from "/src/components/footer/Footer";
import FoodHall from "/src/assets/images/foodImage.jpg";
import VendorGrid from "../vendorGrid/VendorGrid";

function Food() {
  const data = useLoaderData()
  
  const vendorData = [
    {
      vendorID: "pho",
      headline: "Vietnamese Soup Pho",
      vendor: "Vietnamese Soup Pho Vendor",
      link: "Vietnamese-Soup-Pho-Vendor",
      imageSrc: "/src/assets/images/pho.jpg",
      imageText: "pho",
    },
    {
      vendorID: "mooncake",
      headline: "Chinese Mooncake",
      vendor: "Chinese Mooncake Vendor",
      link: "Chinese-Mooncake-Vendor",
      imageSrc: "/src/assets/images/mooncake.jpg",
      imageText: "mooncake",
    },
    {
      vendorID: "burger",
      headline: "Delicious Burger",
      vendor: "Delicious Burger Vendor",
      link: "Delicious-Burger-Vendor",
      imageSrc: "/src/assets/images/burger.jpg",
      imageText: "burger",
    },
    {
      vendorID: "burrito",
      headline: "Mexican Burrito",
      vendor: "Mexican Burrito Vendor",
      link: "Mexican-Burrito-Vendor",
      imageSrc: "/src/assets/images/burrito.jpg",
      imageText: "burrito",
    },
    {
      vendorID: "chickenSkewer",
      headline: "Delightful Chicken Skewer",
      vendor: "Delightful Chicken Skewer Vendo",
      link: "Delightful-Chicken-Skewer-Vendo",
      imageSrc: "/src/assets/images/chickenSkewer.jpg",
      imageText: "chickenSkewer",
    },
    {
      vendorID: "cockedSeafood",
      headline: "Japanese Cocked Seafood",
      vendor: "Japanese Cocked Seafood Vendor",
      link: "Japanese-Cocked-Seafood-Vendor",
      imageSrc: "/src/assets/images/cockedSeafood.jpg",
      imageText: "cockedSeafood",
    },
    {
      vendorID: "iceFruitBowl",
      headline: "Ice Fruit Bow",
      vendor: "Ice Fruit Bowl Vendor",
      link: "Ice-Fruit-Bowl-Vendor",
      imageSrc: "/src/assets/images/iceFruitBowl.jpg",
      imageText: "iceFruitBowl",
    },
    {
      vendorID: "pancakes",
      headline: "Delicious Pancakes",
      vendor: "Delicious Pancakes Vendor",
      link: "Delicious-Pancakes-Vendor",
      imageSrc: "/src/assets/images/pancakes.jpg",
      imageText: "pancakes",
    },
    {
      vendorID: "salmon",
      headline: "Delightful Salmon",
      vendor: "Delightful Salmon Vendor",
      link: "Delightful-Salmon-Vendor",
      imageSrc: "/src/assets/images/salmon.jpg",
      imageText: "salmon",
    },
    {
      vendorID: "saladBacon",
      headline: "Salad Bacon Plate",
      vendor: "Salad Bacon Plate Vendor",
      link: "Salad-Bacon-Plate-Vendor",
      imageSrc: "/src/assets/images/saladBacon.jpg",
      imageText: "saladBacon",
    },
  ];

  return (
    <div className="pageContainer" style={{ left: "60px" }}>
      <Intro
        page="Food"
        text={`Food Hall Hours:\nMon – Sun: 11:00AM - 8:00PM`}
        headline="The Food Hall"
        image={FoodHall}
        imageAlt="Food Hall"
      />
      <VendorGrid vendorData={data.foodVendors} />
    
      <section className="foodBannerContainer">
        <Banner
          image={SmileyIcon}
          imageAlt="smiley icon"
          headline="The Best of NYC"
          text="All under one roof!"
        />
      </section>
      <Footer />
    </div>
  );
}

export default Food;
