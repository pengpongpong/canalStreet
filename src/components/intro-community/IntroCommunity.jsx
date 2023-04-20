import React from 'react'
import { Link } from "react-router-dom"
import "./IntroCommunity.sass"

function IntroCommunity({headerText, headline}) {
    return (
        <section className="marketEvents">
            <div className="marketEvents__buttonContainer">
                <Link to="/community" className="marketEvents__returnButton">Community</Link>
            </div>
            <div className="marketEvents__introText">
                <p>{headerText}</p>
            </div>
            <h1 className="marketEvents__headline">{headline}</h1>
        </section>
    )
}

export default IntroCommunity