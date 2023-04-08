import React from 'react'
import { Link } from "react-router-dom"

function IntroCommunity({headerText, headline}) {
    return (
        <section className="marketEvents">
            <Link to="/community" className="marketEvents__returnButton">Community</Link>
            <div className="marketEvents__introText">
                <p>{headerText}</p>
            </div>
            <h1 className="marketEvents__headline">{headline}</h1>
        </section>
    )
}

export default IntroCommunity