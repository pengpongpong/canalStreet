import React from 'react'
import "./Banner.sass"

function VendorBanner({image, headline, text}) {
    return (
        <div className="banner">
            <img className="banner__icon" src={image} aria-hidden={true} />
            <div className="banner__textContainer">
                <h3 className="banner__headline">{headline}</h3>
                <p className="banner__text">{text}</p>
            </div>
            <img className="banner__icon" src={image} aria-hidden={true} />
        </div>
    )
}

export default VendorBanner