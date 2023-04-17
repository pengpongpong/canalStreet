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
        let vendorLinkType = featureVendorData[0].type === "food" ? "food" : "retail"

        const vendorData = vendorType.filter(obj => obj.vendor === featureVendorData[0].vendor)
        const vendorLink = `/${vendorLinkType}/${vendorData[0].vendor.replace(/\s/gi, "-")}`

        const qaItem = featureVendorData[0].interview.map((obj, index) => {
            return (
                <li className="vendorDescription__item" key={index}>
                    <p className="vendorDescription__question">{obj.question}</p>
                    <p className="vendorDescription__text">{obj.answer}</p>
                </li>
            )
        })

        const descriptionItem = featureVendorData[0].description.map((obj, index) => {
            return (
                <li className="vendorDescription__item" key={index}><p>{obj}</p></li>
            )
        })

        return (
            <PageContainer left="180px" id={id}>
                <div className="featHeader__buttonContainer">
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
                        <p className="vendorDescription__text">{featureVendorData[0].owner}</p>
                        <ul className="vendorDescription__list">{descriptionItem}</ul>
                        {/* <img className="vendorDescription__image" src="" alt="vendor image" /> */}
                        <ul className="vendorDescription__list">
                            {qaItem}
                        </ul>
                    </div>
                    <div className="featVendor__sidebar">
                        <p className="featVendor__sidebarText">{vendorData[0].headline}</p>
                        <p className="featVendor__sidebarText">{vendorData[0].vendor}</p>
                        <div className="featVendor__sidebarImage" style={{backgroundImage: `url(${vendorData[0].imageSrc})`}}></div>
                        <Link className="communityEvents__anchor" to={vendorLink}>learn more</Link>                   
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