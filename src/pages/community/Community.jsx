import React from 'react'
import { Link } from "react-router-dom"
import Events from "/src/components/events/Events"
import Banner from "/src/components/banner/Banner"
import PodcastIcon from "/src/assets/icons/podcastLogo.svg"
import Footer from "/src/components/footer/Footer"
import Intro from "/src/components/intro/Intro"
import BgZickzackTopContainer from "../../components/container/BgZickzackTopContainer"
import PageContainer from "/src/components/container/PageContainer"
import "./Community.sass"

const eventData =
  [
    { date: "03/12", event: "S3E10: Timberlands and Periodic Tables with Peter Sohn (Pixar's \"Elemental\")" },
    { date: "03/01", event: "Dennis Chung Interview (General Secretary for Jamaican Football Federation) + Karyn Forbes Interview (Pro Player in England From T&T) + SheBelieves Cup Recap + Multiple International Teams on Strike" },
    { date: "05/03", event: "We're back and we're better!" },
  ]

const featuresData = [
  { imageSrc: "/src/assets/images/pages-images/community/community_feat1.jpg", featureText: "CSM Community - Feat 1" },
  { imageSrc: "/src/assets/images/pages-images/community/community_feat2.jpg", featureText: "CSM Community - Feat 2" },
  { imageSrc: "/src/assets/images/pages-images/community/community_feat3.jpg", featureText: "CSM Community - Feat 3" },
  { imageSrc: "/src/assets/images/pages-images/community/community_feat4.jpg", featureText: "CSM Community - Feat 4" }
]

const featuresItems = featuresData.map(obj => {
  return (
    <div className="features__card">
      <img className="features__image" src={obj.imageSrc} alt="Community people" />
      <h3 className="features__imageHeadline"><span className='features__headlineSpan'>{obj.featureText}</span></h3>
    </div>
  )
})

function Community() {
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
        <Link to="" className="communityEvents__anchor">view all</Link>
      </section>
      <section className="features">
        <h2 className="features__headline">Features</h2>
        <div className="features__cardContainer">
          {featuresItems}
        </div>
        <Link to="" className="communityEvents__anchor">view all stories</Link>
      </section>
      <BgZickzackTopContainer>
        <Banner
          image={PodcastIcon}
          imageAlt="podcast icon"
          headline="Market Radio"
          text="Podcasted from the market" />
      </BgZickzackTopContainer>
      <Events data={eventData}
        bgColor="#ffb400" />
      <Footer />
    </PageContainer>
  )
}

export default Community