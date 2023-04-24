import React from 'react'
import { Link } from "react-router-dom";
import SocialBanner from "./SocialBanner";
import Newsletter from "./Newsletter"
import "./Footer.sass"

function Footer() {
    return (
        <>
            <SocialBanner />
            <Newsletter />
            <footer className="footer">
                <div className="footer__textContainer">
                    <p className="footer__text">Copyright Street Market 2023</p>
                    <Link className="footer__anchor" to="/policy"><u>Privacy Policy</u></Link>
                    <Link className="footer__anchor" to=""><u>Vendor Login</u></Link>
                </div>
                <Link className="footer__anchor">Site by tranmp.dev</Link>
            </footer>
        </>
    )
}

export default Footer