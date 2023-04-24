import React from 'react'
import { Link } from "react-router-dom"
import "./Features.sass"

function Features({ data, vendor }) {

  const filterVendor = vendor ? data.filter(obj => 
    (obj.vendor.replace(/\s/gi, "-") !== vendor)
  ) : ""

  const featuresItem = vendor ? filterVendor.map((obj) => {
    return (
      <div className="features__card" key={obj.vendor}>
        <Link className="features__anchor" to={`/community/feature/${obj.vendor.replace(/\s/gi, "-")}`}>
          <img className="features__image" src={obj.imageSrc} alt="Community people" />
          <h3 className="features__imageHeadline"><span className="features__headlineSpan">{obj.featureText}</span></h3>
        </Link>
      </div>
    )
  }) : data.map((obj) => {
    return (
      <div className="features__card" key={obj.vendor}>
        <Link className="features__anchor" to={`/community/feature/${obj.vendor.replace(/\s/gi, "-")}`}>
          <img className="features__image" src={obj.imageSrc} alt="Community people" />
          <h3 className="features__imageHeadline"><span className='features__headlineSpan'>{obj.featureText}</span></h3>
        </Link>
      </div>
    )
  })

  return (
    <div className="features" >
      {featuresItem}
    </div >
  )
}

export default Features