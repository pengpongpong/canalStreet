import React from 'react'
import { Link } from "react-router-dom";
import VendorRegisterBanner from "./VendorRegisterBanner";
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
                    <p>Copyright Street Market 2023</p>
                    <Link className="footer__anchor" to="/policy">Privacy Policy</Link>
                    <Link className="footer__anchor" to="">Vendor Login</Link>
                </div>
                <p>Site by Phuong</p>
            </footer>
        </>
    )
}

export default Footer