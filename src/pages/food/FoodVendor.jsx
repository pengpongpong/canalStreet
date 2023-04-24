import React from 'react'
import { useParams, useLoaderData } from "react-router-dom"
import VendorBanner from "/src/components/banner/VendorBanner"
import NoodleBowl from "/public/icons/noodleBowl.svg"
import VendorGrid from "/src/components/vendorGrid/VendorGrid"
import Footer from "/src/components/footer/Footer"
import Vendor from "/src/components/vendor/Vendor"
import BgZickzackTopContainer from "/src/components/container/BgZickzackTopContainer"
import PageContainer from "/src/components/container/PageContainer"
import VendorRegisterBanner from "/src/components/footer/VendorRegisterBanner"

function FoodVendor({bgColor}) {
  const { id } = useParams()
  const loaderData = useLoaderData()

  const data = loaderData.foodVendors.filter(obj => obj.vendor.replace(/\s/gi, "-") === id);


  if (data) {

    return (
      <PageContainer left="60px" id={id} bgColor={bgColor}>
        <Vendor
          data={data}
          headerText={`Food Hall Hours:\nMon – Sun: 11:00AM - 8:00PM`}
          returnButtonText="all food"
        />
        <BgZickzackTopContainer>
          <VendorBanner
            image={NoodleBowl}
            headline="More Food"
          />
        </BgZickzackTopContainer>
        <VendorGrid vendorData={loaderData.foodVendors} />
        <VendorRegisterBanner/>
        <Footer />
      </PageContainer>
    )
  }
}




export default FoodVendor