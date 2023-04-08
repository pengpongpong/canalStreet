import React from 'react'
import { Link, useLoaderData } from "react-router-dom"
import "./Community.sass"
import Banner from "/src/components/banner/Banner"
import PageContainer from "/src/components/container/PageContainer"
import IntroCommunity from "../../components/intro-community/IntroCommunity"
import SmileyIcon from "/src/assets/icons/smiley.svg"
import Footer from "/src/components/footer/Footer"

function CommunityEvents() {
    const data = useLoaderData()

    const eventItem = data.eventData.map((obj, index) => {
        const eventLink = obj.href.replace(/\s/gi, "-")
        return (
            <li className="eventGrid__item" key={index}>
                <Link to={`/community/event/${eventLink}`} className="eventGrid__anchor">
                    <img className="eventGrid__image" src={obj.imageSrc}></img>
                    <p className="eventGrid__text">{obj.event}</p>
                </Link>
            </li>
        )
    })
    return (
        <PageContainer left="180px">
            <IntroCommunity
                headerText={`Our curated list of events\n bringing interesting people,\n talks, and workshops to Street Market`}
                headline="Market Events" />
            <Banner
                image={SmileyIcon}
                headline={`Past\nEvents`} />
            <section className="eventGrid">
                <ul className="eventGrid__list">
                    {eventItem}
                </ul>
            </section>
            <Footer />
        </PageContainer>
    )
}

export default CommunityEvents