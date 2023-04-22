import React from 'react'
import { Link, useLoaderData } from "react-router-dom"
import EventBanner from "/src/components/EventBanner/EventBanner"
import Banner from "/src/components/banner/Banner"
import PodcastIcon from "/src/assets/icons/podcastLogo.svg"
import Footer from "/src/components/footer/Footer"
import Intro from "/src/components/intro/Intro"
import BgZickzackTopContainer from "../../components/container/BgZickzackTopContainer"
import PageContainer from "/src/components/container/PageContainer"
import VendorRegisterBanner from "/src/components/footer/VendorRegisterBanner"
import Features from "../../components/features/Features"
import "./Community.sass"

function Community({bgColor}) {
  const data = useLoaderData()

  const marketEvents = <section className="events">
    <h2 className="events__headline">Market Events</h2>
    <div className="events__cardTop">
      <span className="events__date">{data.eventData[0].date}</span>
      <Link className="events__anchor" to={`/community/event/${data.eventData[0].href.replace(/\s/gi, "-")}`}><p>{data.eventData[0].event}</p></Link>
    </div>
    <div className="events__cardTopMid"></div>
    <div className="events__cardTopMid"></div>
    <div className="events__cardTop">
      <span className="events__date">{data.eventData[1].date}</span>
      <Link className="events__anchor" to={`/community/event/${data.eventData[1].href.replace(/\s/gi, "-")}`} ><p>{data.eventData[1].event}</p></Link>
    </div>
    <div className="events__cardBottom">
      <span className="events__date">{data.eventData[2].date}</span>
      <Link className="events__anchor" to={`/community/event/${data.eventData[2].href.replace(/\s/gi, "-")}`}><p>{data.eventData[2].event}</p></Link>
    </div>
    <div className="events__cardBottomMid"></div>
    <div className="events__cardBottomMid"></div>
    <div className="events__cardBottom">
      <span className="events__date">{data.eventData[3].date}</span>
      <Link className="events__anchor" to={`/community/event/${data.eventData[3].href.replace(/\s/gi, "-")}`}><p>{data.eventData[3].event}</p></Link>
    </div>
  </section>
  

  return (
    <PageContainer left="180px" bgColor={bgColor}>
      <Intro
        page="Community"
        text={`Events, podcasts, and artist residencies\n are all part of the vibrant mix at\n our multi-purpose space.`}
        headline="Street Market Community"
      />
      <section className="communityEvents">
        {marketEvents}
        <Link to="/community/event" className="communityEvents__anchor">view all</Link>
      </section>
      <section className="featuresBanner">
        <h2 className="featuresBanner__headline">Features</h2>
        <Features data={data.featuresData} />
        <Link to="/community/feature" className="communityEvents__anchor">view all stories</Link>
      </section>
      <BgZickzackTopContainer>
        <Banner
          image={PodcastIcon}
          headline="Market Radio"
          text="Podcasted from the market" />˚
      </BgZickzackTopContainer>
      <EventBanner data={data.communityPodcastData}
        bgColor="#ffb400"
        radio />
      <VendorRegisterBanner />
      <Footer />
    </PageContainer>
  )
}

export default Community