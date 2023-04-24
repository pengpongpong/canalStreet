import React, { useRef } from 'react'
import "./Footer.sass"
import VendorForm from "/src/components/vendor-form/VendorForm";

function VendorRegisterBanner() {
    const overlay = useRef()
    const transitionTime = "visibility .8s, opacity .8s ease-in-out"
    const formContainer = useRef()
    const formClose = useRef()

    const openOverlay = (e) => {
        e.preventDefault()
        document.querySelector("body").style.overflow = "hidden"

        overlay.current.setAttribute("aria-hidden", false)
        overlay.current.style.transition = transitionTime
        overlay.current.style.visibility = "visible"
        overlay.current.style.opacity = "1"

        formContainer.current.style.visibility = "visible"
        formContainer.current.style.transform = "translate(0, 0)"
        formContainer.current.style.transition = ".5s ease-in-out"

        formClose.current.style.transform = "translate(0)"
        formClose.current.style.transition = ".5s ease-in-out"

    }

    const closeOverlay = (e) => {
        e.preventDefault()
        document.querySelector("body").style.overflow = "auto"

        overlay.current.setAttribute("aria-hidden", true)
        overlay.current.style.transition = transitionTime
        overlay.current.style.visibility = "hidden"
        overlay.current.style.opacity = "0"

        formContainer.current.style.transform = "translate(0, 100%)"
        formContainer.current.style.transition = ".5s ease-in-out"
        formContainer.current.style.visibility = "hidden"
        
        formClose.current.style.transform = "translate(20rem, 0)"
        formClose.current.style.transition = ".5s ease-in-out"
    }

    return (
        <>
            <div className="overlay" ref={overlay} aria-hidden={true}>
                <div className="formContainer__close" onClick={closeOverlay} ref={formClose}></div>
                <div className="formContainer" ref={formContainer}><VendorForm /></div>
            </div>
            <section className="footerBanner">
                <h3 className="footerBanner__headline">Interested in becoming a vendor?</h3>
                <button className="footerBanner__button" onClick={openOverlay}>click here</button>
            </section>
        </>
    )
}

export default VendorRegisterBanner