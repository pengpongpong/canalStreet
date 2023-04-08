import React from 'react'
import { useParams, useLoaderData } from "react-router-dom"
import Vendor from "/src/components/vendor/Vendor"
import VendorBanner from "/src/components/banner/VendorBanner"
import VendorGrid from "/src/components/vendorGrid/VendorGrid"
import Footer from "/src/components/footer/Footer"
import RoseIcon from "/src/assets/icons/rose.svg"
import BgZickzackTopContainer from "../../components/container/BgZickzackTopContainer"
import PageContainer from "/src/components/container/PageContainer"
import VendorRegisterBanner from "/src/components/footer/VendorRegisterBanner"

function RetailVendor() {
    const { id } = useParams()
    const loaderData = useLoaderData()

    const data = loaderData.retailVendors.filter(obj => obj.vendor.replace(/\s/gi, "-") === id);

    if (data) {
        return (
            <PageContainer left="120px" id={id}>
                <Vendor
                    data={data}
                    headerText={`Retail Market Hours:\nMon – Sat: 11AM – 7PM\nSun: 12AM – 6PM`}
                    returnButtonText="all retail"
                    retail
                />
                <BgZickzackTopContainer>
                    <VendorBanner
                        image={RoseIcon}
                        headline="More Retail"
                    />
                </BgZickzackTopContainer>
                <VendorGrid vendorData={loaderData.retailVendors} retail={true} />
                <VendorRegisterBanner/>
                <Footer />
            </PageContainer>
        )
    }
}

export default RetailVendor