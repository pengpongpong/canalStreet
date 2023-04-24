import React from 'react'
import { Link } from "react-router-dom";
import email from "/icons/email.svg";
import facebook from "/icons/facebook.svg";
import instagram from "/icons/instagram.svg";
import "./Footer.sass"

function SocialBanner() {
    return (
        <section className="socials">
            <ul className="socials__list">
                <li className="socials__item">
                    <Link className="socials__anchor" to="/">
                        <img className="socials__logo" src={email} aria-hidden={true}></img>
                        <p className="socials__text">Email us</p>
                    </Link>
                </li>
                <li className="socials__item">
                    <Link className="socials__anchor" to="/">
                        <img className="socials__logo" src={facebook} aria-hidden={true}></img>
                        <p className="socials__text">Follow us on facebook</p>
                    </Link>
                </li>
                <li className="socials__item">
                    <Link className="socials__anchor" to="/">
                        <img className="socials__logo" src={instagram} aria-hidden={true}></img>
                        <p className="socials__text">Follow us on instagram</p>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default SocialBanner