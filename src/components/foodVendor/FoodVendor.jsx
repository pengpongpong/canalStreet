import React, { useEffect } from 'react'
import { useParams, useLoaderData } from "react-router-dom"
import VendorBanner from "../banner/VendorBanner"
import NoodleBowl from "../../assets/images/noodleBowl.svg"
import VendorGrid from "../vendorGrid/VendorGrid"
import Footer from "../footer/Footer"
import Vendor from "../vendor/Vendor"

function FoodVendor() {
  const { id } = useParams()
  const loaderData = useLoaderData()

  const data = loaderData.foodVendors.filter(obj => obj.vendor.replace(" ", "-") === id);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (data) {

    return (
      <section className="pageContainer" style={{ left: "60px" }}>
        <Vendor
          data={data}
          headerText={`Food Hall Hours:\nMon – Sun: 11:00AM - 8:00PM`}
          returnButton="all food"
          />
        <section className="radioBannerContainer">
          <VendorBanner
            image={NoodleBowl}
            headline="More Food"
          />
        </section>
        <VendorGrid vendorData={loaderData.foodVendors} />
        <Footer />
      </section>
    )
  }
}




export default FoodVendor