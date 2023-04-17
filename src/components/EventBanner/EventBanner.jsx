import React from 'react'
import "./EventBanner.sass"
import { Link } from "react-router-dom"

function EventBanner({ data, bgColor, radio }) {
    const communityLink = radio ? "radio" : "event"
    return (
        <section className="pageEvents">
            <ul className="pageEvents__list">
                {data.map((obj, index) => {
                    if (index < 3) {
                        return (
                            <Link to={`/community/${communityLink}/${obj.href.replace(/\s/gi, "-")}`} className="pageEvents__anchor" key={index}>
                                <li className="pageEvents__item">
                                    <p className="pageEvents__date">{obj.date || obj.podcast}</p>
                                    <p className="pageEvents__headline">
                                        {obj.event || obj.headline}
                                    </p>
                                </li>
                            </Link>
                        )
                    }
                })}
            </ul>
            <Link to={`/community/${communityLink}`} className="pageEvents__anchorButton" style={{ backgroundColor: bgColor }}>see all</Link>
        </section>
    )
}

export default EventBanner