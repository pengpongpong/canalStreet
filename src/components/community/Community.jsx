import React from 'react'
import { Link } from "react-router-dom"
import Events from "../events/Events"
import Banner from "../banner/Banner"
import PodcastIcon from "/src/assets/images/podcastLogo.svg"
import Footer from "../footer/Footer"

const eventData =
  [
    { date: "03/12", event: "S3E10: Timberlands and Periodic Tables with Peter Sohn (Pixar's \"Elemental\")" },
    { date: "03/01", event: "Dennis Chung Interview (General Secretary for Jamaican Football Federation) + Karyn Forbes Interview (Pro Player in England From T&T) + SheBelieves Cup Recap + Multiple International Teams on Strike" },
    { date: "05/03", event: "We're back and we're better!" },
  ]

function Community() {
  return (
    <div className='pageContainer' style={{ left: "180px" }}>
      <section className="communityPage">
        <span className="communityPage__logo">Community</span>
        <p className="communityPage__text"> Our mixed-use space hosts ongoing events, podcasts & artists in residence</p>
        <h1 className="communityPage__headline">Canal St. Community</h1>
      </section>
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
        <button className="communityEvents__button"><Link className="communityEvents__anchor">view all</Link></button>
      </section>
      <section className="features">
        <h2 className="features__headline">Features</h2>
        <div className="features__cardContainer">
          <div className="features__card">
            <img className="features__image" src="/src/assets/images/community_feat1.jpg" alt="Community people" />
            <h3 className="features__imageHeadline"><span className='features__headlineSpan'>CSM Community - Feat 1</span></h3>
          </div>
          <div className="features__card">
            <img className="features__image" src="/src/assets/images/community_feat2.jpg" alt="Community people" />
            <h3 className="features__imageHeadline"><span className='features__headlineSpan'>CSM Community - Feat 2</span></h3>
          </div>
          <div className="features__card">
            <img className="features__image" src="/src/assets/images/community_feat3.jpg" alt="Community people" />
            <h3 className="features__imageHeadline"><span className='features__headlineSpan'>CSM Community - Feat 3</span></h3>
          </div>
          <div className="features__card">
            <img className="features__image" src="/src/assets/images/community_feat4.jpg" alt="Community people" />
            <h3 className="features__imageHeadline"><span className='features__headlineSpan'>CSM Community - Feat 4</span></h3>
          </div>
        </div>
        <button className="features__button">view all stories</button>
      </section>
      <section className="radioBannerContainer">
        {/* <img className="radioBanner__logo" src="/src/assets/images/podcastLogo.svg" alt="" />
        <div className="radioBanner__textContainer">
          <h2 className="radioBanner__headline">Market Radio</h2>
          <p className="radioBanner__text">Podcasted from the market</p>
        </div>
        <img className="radioBanner__logo" src="/src/assets/images/podcastLogo.svg" alt="" /> */}
        <Banner
          image={PodcastIcon}
          imageAlt="podcast icon"
          headline="Market Radio"
          text="Podcasted from the market" />
      </section>
      <Events data={eventData}
        bgColor="#ffb400" />
      <Footer />
    </div>
  )
}

export default Community