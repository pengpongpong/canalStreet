import React from 'react'
import PageContainer from "/src/components/container/PageContainer"
import { useLoaderData, useParams, Link } from "react-router-dom"
import ReturnButtonEl from "../../components/vendor/returnButtonEl"
import Features from "../../components/features/Features"
import VendorRegisterBanner from "/src/components/footer/VendorRegisterBanner"
import Footer from "/src/components/footer/Footer"
import "./Community.sass"

function CommunityFeaturesVendor() {
    const { id } = useParams()
    const data = useLoaderData()

    const featureVendorData = data.featuresData.filter(obj => obj.vendor.replace(/\s/gi, "-") === id)

    if (featureVendorData) {

        let vendorType = featureVendorData[0].type === "food" ? data.foodVendors : data.retailVendors

        const vendorData = vendorType.filter(obj => obj.vendor === featureVendorData[0].vendor)
        console.log("🚀 ~ file: CommunityFeaturesVendor.jsx:21 ~ CommunityFeaturesVendor ~ vendorData:", vendorData)

        const qaItem = featureVendorData[0].interview.map((obj, index) => {
            return (
                <li key={index}>
                    <p>{obj.question}</p>
                    <p>{obj.answer}</p>
                </li>
            )
        })

        const descriptionItem = featureVendorData[0].description.map((obj, index) => {
            return (
                <li key={index}><p>{obj}</p></li>
            )
        })

        return (
            <PageContainer left="180px">
                <div style={{ margin: "10rem 4rem" }}>
                    <ReturnButtonEl
                        community
                        feature
                        returnButtonText="Community" />
                </div>
                <section className="featHeader" style={{ backgroundImage: `url(${featureVendorData[0].imageSrc})` }}>
                    <h1 className="featHeader__headline">{featureVendorData[0].vendor}</h1>
                </section>
                <section className="featVendor">
                    <div className="vendorDescription">
                        <p>{featureVendorData[0].owner}</p>
                        <ul>{descriptionItem}</ul>
                        <img className="vendorDescription__image" src="" alt="vendor image" />
                        <ul>
                            {qaItem}
                        </ul>
                    </div>
                    <div className="featVendor__sidebar">
                        <p className="featVendor__sidebarText">{featureVendorData[0].headline}</p>
                        <p className="featVendor__sidebarText">{featureVendorData[0].vendor}</p>
                        <div style={{background: `url(${vendorData[0].imageSidebar}) no-repeat`, backgroundSize: "100%", height: "20rem"}}></div>
                    </div>
                </section>
                <section className="featuresBanner">
                    <h2 className="featuresBanner__headline">Features</h2>
                    <Features
                        data={data.featuresData}
                        vendor={id}
                    />
                    <Link to="/community/feature" className="communityEvents__anchor">view all stories</Link>
                </section>
                <VendorRegisterBanner />
                <Footer />
            </PageContainer>
        )
    }

}

export default CommunityFeaturesVendor