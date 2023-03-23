import React from 'react'
import { Link } from "react-router-dom"
import Intro from "../intro/Intro"
import Banner from "../banner/Banner"
import SmileyIcon from "/src/assets/images/smiley.svg"
import Footer from "/src/components/footer/Footer"
import FoodHall from "/src/assets/images/foodImage.jpg"

function Food() {

  const enterVendor = (e) => {
    const randomX = ((Math.floor(Math.random() * 100) * 10) + 60)
    const randomY = (window.pageYOffset + (Math.floor(Math.random() * 10) * 40))
    const foodImages = document.querySelector(".foodImage")

    foodImages.childNodes.forEach(obj => {
      if (obj.classList.contains(e.currentTarget.id)) {
        obj.style.opacity = "1"
        obj.style.transform = `translate(${randomX}px, ${randomY}px)`
      }
    })
  }

  const exitVendor = () => {
    const foodImages = document.querySelector(".foodImage")
    foodImages.childNodes.forEach(obj => {
      obj.style.opacity = "0"
    })
  }

  return (
    <div className="pageContainer" style={{ left: "60px" }}>
      <div className="foodImage">
        <div className="foodImage__card pho"></div>
        <div className="foodImage__card mooncake"></div>
        <div className="foodImage__card burger"></div>
        <div className="foodImage__card burrito"></div>
        <div className="foodImage__card chickenSkewer"></div>
        <div className="foodImage__card cockedSeafood"></div>
        <div className="foodImage__card iceFruitBowl"></div>
        <div className="foodImage__card pancakes"></div>
        <div className="foodImage__card salmon"></div>
        <div className="foodImage__card saladBacon"></div>
      </div>
      <Intro
        page="Food"
        text={`Food Hall Hours:\nMon – Sun: 11:00AM - 8:00PM`}
        headline="The Food Hall"
        image={FoodHall}
        imageAlt="Food Hall" />
      <section className="foodVendors">
        <div className="foodVendors__card">
          <Link id="pho" className="foodVendors__anchor" to="" onMouseEnter={enterVendor} onMouseLeave={exitVendor}>
            <p className="foodVendors__food">Vietnamese Soup Pho</p>
            <p className="foodVendors__vendor">Vietnamese Soup Pho Vendor</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link id="mooncake" className="foodVendors__anchor" to="" onMouseEnter={enterVendor} onMouseLeave={exitVendor}>
            <p className="foodVendors__food">Chinese Mooncake</p>
            <p className="foodVendors__vendor">Chinese Mooncake Vendor</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link id="burger" className="foodVendors__anchor" to="" onMouseEnter={enterVendor} onMouseLeave={exitVendor}>
            <p className="foodVendors__food">Delicious Burger</p>
            <p className="foodVendors__vendor">Delicious Burger Vendor</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link id="burrito" className="foodVendors__anchor" to="" onMouseEnter={enterVendor} onMouseLeave={exitVendor}>
            <p className="foodVendors__food">Mexican Burrito</p>
            <p className="foodVendors__vendor">Mexican Burrito Vendor</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link id="chickenSkewer" className="foodVendors__anchor" to="" onMouseEnter={enterVendor} onMouseLeave={exitVendor}>
            <p className="foodVendors__food">Delightful Chicken Skewer</p>
            <p className="foodVendors__vendor">Delightful Chicken Skewer Vendor</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link id="cockedSeafood" className="foodVendors__anchor" to="" onMouseEnter={enterVendor} onMouseLeave={exitVendor}>
            <p className="foodVendors__food">Japanese Cocked Seafood</p>
            <p className="foodVendors__vendor">Japanese Cocked Seafood Vendor</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link id="iceFruitBowl" className="foodVendors__anchor" to="" onMouseEnter={enterVendor} onMouseLeave={exitVendor}>
            <p className="foodVendors__food">Ice Fruit Bowl</p>
            <p className="foodVendors__vendor">Ice Fruit Bowl Vendor</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link id="pancakes" className="foodVendors__anchor" to="" onMouseEnter={enterVendor} onMouseLeave={exitVendor}>
            <p className="foodVendors__food">Delicious Pancakes</p>
            <p className="foodVendors__vendor">Delicious Pancakes Vendor</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link id="salmon" className="foodVendors__anchor" to="" onMouseEnter={enterVendor} onMouseLeave={exitVendor}>
            <p className="foodVendors__food">Delightful Salmon</p>
            <p className="foodVendors__vendor">Delightful Salmon</p>
          </Link>
        </div>
        <div className="foodVendors__card">
          <Link id="saladBacon" className="foodVendors__anchor" to="" onMouseEnter={enterVendor} onMouseLeave={exitVendor}>
            <p className="foodVendors__food">Salad Bacon Plate</p>
            <p className="foodVendors__vendor">Salad Bacon Vendor</p>
          </Link>
        </div>
      </section>
      <section className="foodBannerContainer">
        <Banner
          image={SmileyIcon}
          imageAlt="smiley icon"
          headline="The Best of NYC"
          text="All under one roof!"
          />
      </section>
      <Footer />
    </div>
  )
}

export default Food