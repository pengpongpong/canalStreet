import React from 'react'
import "./Events.sass"

function Events({ data, bgColor }) {
    return (
        <section className="pageEvents">
            <ul className="pageEvents__list">
                {data.map((obj, index) => {
                    return (
                        <li className="pageEvents__item" key={index}>
                            <p className="pageEvents__date">{obj.date}</p>
                            <p className="pageEvents__headline">
                                {obj.event}
                            </p>
                        </li>
                    )
                })}
            </ul>
            <button className="pageEvents__button" style={{backgroundColor: bgColor}}>see all</button>
        </section>
    )
}

export default Events