import React from 'react'
import { Link } from "react-router-dom";
import email from "/src/assets/images/email.svg";
import facebook from "/src/assets/images/facebook.svg";
import instagram from "/src/assets/images/instagram.svg";
import emailSend from "/src/assets/images/emailSend.svg";

function Footer() {
    return (
        <>
            <section className="vendor">
                <h3 className="vendor__headline">Interested in becoming a vendor?</h3>
                <button className="vendor__button">click here</button>
            </section>
            <section className="socials">
                <ul className="socials__list">
                    <li className="socials__item">
                        <Link className="socials__anchor" to="/">
                            <img className="socials__logo" src={email}></img>
                            <p className="socials__text">Email us</p>
                        </Link>
                    </li>
                    <li className="socials__item">
                        <Link className="socials__anchor" to="/">
                            <img className="socials__logo" src={facebook}></img>
                            <p className="socials__text">Follow us on facebook</p>
                        </Link>
                    </li>
                    <li className="socials__item">
                        <Link className="socials__anchor" to="/">
                            <img className="socials__logo" src={instagram}></img>
                            <p className="socials__text">Follow us on instagram</p>
                        </Link>
                    </li>
                </ul>
            </section>
            <section className="newsletter">
                <h3 className="newsletter__headline">Stay up to date with our newsletter</h3>
                <input className="newsletter__emailInput" type="email" placeholder="Email" />
                <img className="newsletter__emailButton" src={emailSend} role="button" />
            </section>
            <footer className="footer">
                <div className="footer__textContainer">
                    <p>Copyright Canal Street Market 2022</p>
                    <Link to="/policy">Privacy Policy</Link>
                    <Link to="">Vendor Login</Link>
                </div>
                <p>Site by Phuong</p>
            </footer>
        </>
    )
}

export default Footer