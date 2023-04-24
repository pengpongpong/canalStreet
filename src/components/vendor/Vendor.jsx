import React from 'react';
import { Link } from "react-router-dom";
import "./Vendor.sass";
import ImageSlider from "/src/components/image-slider/ImageSlider";
import ReturnButtonEl from "./returnButtonEl"

function Vendor({ data, headerText, returnButtonText, retail, community, feature, radio }) {
    const links = data[0]?.links
    let linksKey;

    if (data[0].links) {
        linksKey = Object.keys(data[0].links);
    }

    const linksItems = linksKey?.map((obj) => {
        return (
            <li className="introPageVendor__item" key={obj}>
                <Link className="introPageVendor__socialLinks" to={links[obj]}>{obj}</Link>
            </li>
        )
    })

    const imageItems = data[0].imageSrcVendorPage?.map((obj) => {
        return (
            <li className="vendorImages__item" key={obj}>
                <img className="vendorImages__image" src={obj} alt={`${data[0].vendorID} images`} />
            </li>
        )
    })

    return (
        <>
            <section className="introPageVendor">
                <ReturnButtonEl
                    retail={retail}
                    community={community}
                    feature={feature}
                    returnButtonText={returnButtonText}
                    radio={radio}
                    />
                <div className="introPageVendor__headerTextContainer">
                    {headerText ? <p>{headerText}</p> : ""}
                </div>
                <div className='introPageVendor__contentContainer'>
                    <div className="introPageVendor__textContainer">
                        <h1 className="introPageVendor__headline">{data[0].vendor || data[0].event}</h1>
                        <p className="introPageVendor__text">{data[0].text}</p>
                    </div>
                    <div className="introPageVendor__imageSocialContainer">
                        <img className="introPageVendor__image" src={data[0].imageSrc} alt={data[0].event} />
                        <ul className="introPageVendor__list">
                            {linksItems}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="vendorImages">
                {community ? <div className="vendorImages__slideContainer">
                    <ImageSlider data={data[0].imageSrcVendorPage} />
                </div> : <ul className="vendorImages__list">
                    {imageItems}
                </ul>}

            </section>
        </>
    )
}

export default Vendor