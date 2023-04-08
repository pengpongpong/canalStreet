import React from 'react'
import emailSend from "/src/assets/icons/emailSend.svg";
import "./Footer.sass"

function Newsletter() {
    return (
        <section className="newsletter">
            <h3 className="newsletter__headline">Stay up to date with our newsletter</h3>
            <input className="newsletter__emailInput" type="email" placeholder="Email" />
            <img className="newsletter__emailButton" src={emailSend} role="button" />
        </section>
    )
}

export default Newsletter