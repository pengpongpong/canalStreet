import React from 'react'

function Food() {
  return (
    <div className="pageContainer" style={{left: "60px"}}>
      <section className="foodPage">
        <div className='foodPage__hoursContainer'>
          <p>Food</p>
          <p>Food Hall Hours: Mon – Sun: 11:00AM - 8:00PM</p>
        </div>
        <div className='foodPage__headlineContainer'>
          <h1>The Food Hall</h1>
          <img src="" alt="Food Hall image" />
        </div>
      </section>
      <section className="foodVendors">
        <div className="foodVendors__card">
          <Link className="foodVendors__anchor" to="">
            <p className="foodVendors__food">Khao Man Gai</p>
            <p className="foodVendors__vendor">Betong</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link className="foodVendors__anchor" to="">
            <p className="foodVendors__food">Khao Man Gai</p>
            <p className="foodVendors__vendor">Betong</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link className="foodVendors__anchor" to="">
            <p className="foodVendors__food">Khao Man Gai</p>
            <p className="foodVendors__vendor">Betong</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link className="foodVendors__anchor" to="">
            <p className="foodVendors__food">Khao Man Gai</p>
            <p className="foodVendors__vendor">Betong</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link className="foodVendors__anchor" to="">
            <p className="foodVendors__food">Khao Man Gai</p>
            <p className="foodVendors__vendor">Betong</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link className="foodVendors__anchor" to="">
            <p className="foodVendors__food">Khao Man Gai</p>
            <p className="foodVendors__vendor">Betong</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link className="foodVendors__anchor" to="">
            <p className="foodVendors__food">Khao Man Gai</p>
            <p className="foodVendors__vendor">Betong</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Food