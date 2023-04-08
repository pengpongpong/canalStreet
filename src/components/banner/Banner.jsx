import React from 'react'
import "./Banner.sass"

function Banner({image, headline, text}) {
    return (
        <div className="banner">
            <img className="banner__iconReverse" src={image} aria-hidden={true} />
            <div className="banner__textContainer">
                <h3 className="banner__headline">{headline}</h3>
                <p className="banner__text">{text}</p>
            </div>
            <img className="banner__iconReverse" src={image} aria-hidden={true} />
        </div>
    )
}

export default Banner