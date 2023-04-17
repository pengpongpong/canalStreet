import React from 'react'
import { Link, useLoaderData } from "react-router-dom"
import "./Community.sass"
import Banner from "/src/components/banner/Banner"
import PageContainer from "/src/components/container/PageContainer"
import IntroCommunity from "../../components/intro-community/IntroCommunity"
import SmileyIcon from "/src/assets/icons/smiley.svg"
import Footer from "/src/components/footer/Footer"

function CommunityRadio() {
    const data = useLoaderData()

    const eventItem = data.communityPodcastData.map((obj, index) => {
        const eventLink = obj.href.replace(/\s/gi, "-")
        return (
            <li className="eventGrid__item" key={index}>
                <Link to={`/community/radio/${eventLink}`} className="eventGrid__anchor">
                    <img className="eventGrid__image" src={obj.imageSrc}></img>
                    <p className="eventGrid__text">{obj.event}</p>
                </Link>
            </li>
        )
    })
    
    return (
        <PageContainer left="180px">
            <IntroCommunity
                headerText={`Events, podcasts, and artist residencies\n are all part of the vibrant mix at\n our multi-purpose space.`}
                headline="Market Radio" />
            <Banner
                image={SmileyIcon}
                headline={`Market\nPodcast Hosts`} />
            <section className="eventGrid">
                <ul className="eventGrid__list">
                    {eventItem}
                </ul>
            </section>
            <Footer />
        </PageContainer>
    )
}

export default CommunityRadio