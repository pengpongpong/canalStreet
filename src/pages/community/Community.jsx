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

function Community() {
  const data = useLoaderData()

  const featuresItems = data.featuresData.map(obj => {
    return (
      <div className="features__card">
        <img className="features__image" src={obj.imageSrc} alt="Community people" />
        <h3 className="features__imageHeadline"><span className='features__headlineSpan'>{obj.featureText}</span></h3>
      </div>
    )
  })

  return (
    <PageContainer left="180px" >
      <Intro
        page="Community"
        text={`Our mixed-use space hosts\n ongoing events, podcasts\n & artists in residence`}
        headline="Canal St. Community"
      />
      <section className="communityEvents">
        <section className="events">
          <h2 className="events__headline">Market Events</h2>
          <div className="events__cardTop">
            <span className="events__date">12/02 (past)</span>
            <Link className="events__anchor"><p>Small Business Retail Pop Up Weekend!</p></Link>
          </div>
          <div className="events__cardTop"></div>
          <div className="events__cardTop"></div>
          <div className="events__cardTop">
            <span className="events__date">02/07 (past)</span>
            <Link className="events__anchor"><p>New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</p></Link>
          </div>
          <div className="events__cardBottom">
            <span className="events__date">12/11 (past)</span>
            <Link className="events__anchor"><p>Hack City 12/11</p></Link>
          </div>
          <div className="events__cardBottomMid"></div>
          <div className="events__cardBottomMid"></div>
          <div className="events__cardBottom">
            <span className="events__date">07/27 (past)</span>
            <Link className="events__anchor"><p>Taiwanese Wave</p></Link>
          </div>
        </section>
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
          text="Podcasted from the market" />
      </BgZickzackTopContainer>
      <EventBanner data={data.communityPodcastData}
        bgColor="#ffb400" />
      <VendorRegisterBanner />
      <Footer />
    </PageContainer>
  )
}

export default Community