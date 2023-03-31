import React from 'react'
import "./Container.sass"

function BgZickZackTopBottomContainer({children}) {
  return (
    <section className="BgTopBottomContainer">
        {children}
      </section>
  )
}

export default BgZickZackTopBottomContainer