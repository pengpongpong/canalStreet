import React, { useRef } from 'react'
import emailSend from "/icons/emailSend.svg";
import "./Footer.sass"

function Newsletter() {
    const emailRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(emailRef.current.value);
        emailRef.current.value = ""
    }
    return (
        <section className="newsletter">
            <h3 className="newsletter__headline">Stay up to date with our newsletter</h3>
            <input className="newsletter__emailInput" type="email" placeholder="Email" ref={emailRef} />
            <img className="newsletter__emailButton" src={emailSend} onClick={onSubmit} role="submit" />
        </section>
    )
}

export default Newsletter