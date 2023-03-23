import React from 'react'

function Banner({image, imageAlt, headline, text}) {
    return (
        <div className="banner">
            <img className="banner__icon" src={image} alt={imageAlt} />
            <div className="banner__textContainer">
                <h3 className="banner__headline">{headline}</h3>
                <p className="banner__text">{text}</p>
            </div>
            <img className="banner__icon" src={image} alt={imageAlt} />
        </div>
    )
}

export default Banner