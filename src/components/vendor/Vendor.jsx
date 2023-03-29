import React from 'react'
import { Link } from "react-router-dom"

function Vendor({ data, headerText, returnButton }) {
    const links = data[0].links
    const linksKey = Object.keys(data[0].links);

    const linksItems = linksKey.map((obj, index) => {
        return (
            <li className="introPageFoodVendor__item" key={index}>
                <Link className="introPageFoodVendor__socialLinks" to={links[obj]}>{obj}</Link>
            </li>
        )
    })

    const imageItems = data[0].imageSrcVendorPage?.map((obj, index) => {
        return (
            <li className="foodVendorImages__item" key={index}>
                <img className="foodVendorImages__image" src={obj} alt={`${data[0].vendorID} images`} />
            </li>
        )
    })

    return (
        <>
            <section className="introPageFoodVendor">
                <Link className="introPageFoodVendor__anchor" to="/food">{returnButton}</Link>
                <div className="introPageFoodVendor__headerText">
                    <p>{headerText}</p>
                </div>
                <div className='introPageFoodVendor__contentContainer'>
                    <div className="introPageFoodVendor__textContainer">
                        <h1 className="introPageFoodVendor__headline">{data[0].vendor}</h1>
                        <p className="introPageFoodVendor__text">{data[0].text}</p>
                    </div>
                    <div className="introPageFoodVendor__imageSocialContainer">
                        <img className="introPageFoodVendor__image" src={data[0].imageSrc} alt={data[0].headline} />
                        <ul className="introPageFoodVendor__list">
                            {linksItems}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="foodVendorImages">
                <ul className="foodVendorImages__list">
                    {imageItems}
                </ul>
            </section>
        </>
    )
}

export default Vendor