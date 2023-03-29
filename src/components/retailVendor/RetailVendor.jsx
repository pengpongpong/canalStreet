import React, { useEffect } from 'react'
import { useParams, useLoaderData } from "react-router-dom"

function RetailVendor() {
    const { id } = useParams()
    const loaderData = useLoaderData()

    const data = loaderData.retailVendors.filter(obj => obj.vendor.replace(" ", "-") === id);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    if (data) {
        return (
            <section className="pageContainer" style={{ left: "120px" }}>
                <Vendor
                    data={data}
                    headerText={`Retail Market Hours:\nMon – Sat: 11AM – 7PM\nSun: 12AM – 6PM`}
                    returnButton="all retail"
                />
                <section className="radioBannerContainer">
                    <FoodVendorBanner
                        image={NoodleBowl}
                        headline="More Retail"
                    />
                </section>
                <VendorGrid vendorData={loaderData.foodVendors} />
                <Footer />
            </section>
        )
    }
}

export default RetailVendor