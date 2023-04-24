import React from 'react'
import "./Intro.sass"

function Intro({ page, text, headline, image, imageAlt }) {
    return (
        <section className="introPage">
            <span className="introPage__logo">{page}</span>
            <div className="introPage__introText">
                <p>{text}</p>
            </div>
            <div className='introPage__headlineContainer'>
                <h1 className="introPage__headline">{headline}</h1>
                {image ? <img className="introPage__image" src={image} alt={imageAlt} /> : ""}
            </div>
        </section>
    )
}

export default Intro