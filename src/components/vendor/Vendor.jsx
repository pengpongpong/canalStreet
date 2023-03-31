import React from 'react'
import { Link } from "react-router-dom"
import "./Vendor.sass"

function Vendor({ data, headerText, returnButton, retail }) {
    const links = data[0].links
    const linksKey = Object.keys(data[0].links);

    const linksItems = linksKey?.map((obj, index) => {
        return (
            <li className="introPageVendor__item" key={index}>
                <Link className="introPageVendor__socialLinks" to={links[obj]}>{obj}</Link>
            </li>
        )
    })

    const imageItems = data[0].imageSrcVendorPage?.map((obj, index) => {
        return (
            <li className="vendorImages__item" key={index}>
                <img className="vendorImages__image" src={obj} alt={`${data[0].vendorID} images`} />
            </li>
        )
    })

    const linkCat = retail ? "retail" : "food"

    return (
        <>
            <section className="introPageVendor">
                <Link className="introPageVendor__returnButton" to={`/${linkCat}`} >{returnButton}</Link>
                <div className="introPageVendor__headerTextContainer">
                    <p>{headerText}</p>
                </div>
                <div className='introPageVendor__contentContainer'>
                    <div className="introPageVendor__textContainer">
                        <h1 className="introPageVendor__headline">{data[0].vendor}</h1>
                        <p className="introPageVendor__text">{data[0].text}</p>
                    </div>
                    <div className="introPageVendor__imageSocialContainer">
                        <img className="introPageVendor__image" src={data[0].imageSrc} alt={data[0].headline} />
                        <ul className="introPageVendor__list">
                            {linksItems}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="vendorImages">
                <ul className="vendorImages__list">
                    {imageItems}
                </ul>
            </section>
        </>
    )
}

export default Vendor