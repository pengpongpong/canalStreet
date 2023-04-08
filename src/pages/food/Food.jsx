import React from "react";
import { useLoaderData } from "react-router-dom";
import Intro from "/src/components/intro/Intro";
import Banner from "/src/components/banner/Banner";
import SmileyIcon from "/src/assets/icons/smiley.svg";
import Footer from "/src/components/footer/Footer";
import FoodHall from "/src/assets/images/pages-images/food/foodImage.jpg";
import VendorGrid from "/src/components/vendorGrid/VendorGrid";
import BgZickZackTopBottomContainer from "../../components/container/BgZickZackTopBottomContainer";
import PageContainer from "/src/components/container/PageContainer"
import VendorRegisterBanner from "/src/components/footer/VendorRegisterBanner"

function Food() {
  const data = useLoaderData()

  return (
    <PageContainer left= "60px" >
      <Intro
        page="Food"
        text={`Food Hall Hours:\nMon – Sun: 11:00AM - 8:00PM`}
        headline="The Food Hall"
        image={FoodHall}
        imageAlt="Food Hall"
      />
      <VendorGrid vendorData={data.foodVendors} />

      <BgZickZackTopBottomContainer>
        <Banner
          image={SmileyIcon}
          headline="The Best of NYC"
          text="All under one roof!"
        />
      </BgZickZackTopBottomContainer>
      <VendorRegisterBanner/>
      <Footer />
    </PageContainer>
  );
}

export default Food;
