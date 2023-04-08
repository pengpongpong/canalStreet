import React from 'react'
import { Link } from "react-router-dom";
import email from "/src/assets/icons/email.svg";
import facebook from "/src/assets/icons/facebook.svg";
import instagram from "/src/assets/icons/instagram.svg";
import "./Footer.sass"

function SocialBanner() {
    return (
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
    )
}

export default SocialBanner