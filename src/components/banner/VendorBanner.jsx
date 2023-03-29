import React from 'react'

function VendorBanner({image, imageAlt, headline, text}) {
    return (
        <div className="banner">
            <img className="banner__iconFoodVendor" src={image} alt={imageAlt} />
            <div className="banner__textContainer">
                <h3 className="banner__headline">{headline}</h3>
                <p className="banner__text">{text}</p>
            </div>
            <img className="banner__iconFoodVendor" src={image} aria-hidden="true" />
        </div>
    )
}

export default VendorBanner