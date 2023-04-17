import React from 'react'
import { useLoaderData } from "react-router-dom"
import Intro from "/src/components/intro/Intro"
import VendorGrid from "/src/components/vendorGrid/VendorGrid"
import Banner from "/src/components/banner/Banner"
import Footer from "/src/components/footer/Footer"
import RetailMarket from "/src/assets/images/pages-images/retail/retailMarket.jpeg"
import RoseIcon from "/src/assets/icons/rose.svg"
import BgZickZackTopBottomContainer from "../../components/container/BgZickZackTopBottomContainer"
import PageContainer from "/src/components/container/PageContainer"
import VendorRegisterBanner from "/src/components/footer/VendorRegisterBanner"

function Retail() {
  const data = useLoaderData()

  return (
    <PageContainer left="120px" >
      <Intro
        page="Retail"
        text={`Retail Market Hours\nFri - Sun: 11:00AM - 7:00PM`}
        headline="The Retail Market"
        image={RetailMarket}
        imageAlt="retail market"
      />
      <VendorGrid vendorData={data.retailVendors} retail={true} />
      <BgZickZackTopBottomContainer>
        <Banner
          image={RoseIcon}
          headline="The Best of Street Market"
          text="All under one roof!"
        />
      </BgZickZackTopBottomContainer>
      <VendorRegisterBanner/>
      <Footer />
    </PageContainer>
  )
}

export default Retail