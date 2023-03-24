import React from 'react'
import Intro from "../intro/Intro"
import RetailMarket from "../../assets/images/retailMarket2.jpeg"

function Retail() {
  return (
    <div className='pageContainer' style={{left: "120px"}}>
      <Intro
      page="Retail"
      text={`Retail Market Hours\nFri - Sun: 11:00AM - 7:00PM`}
      headline="The Retail Market"
      image={RetailMarket}
      imageAlt="retail market"
      />
    </div>
  )
}

export default Retail