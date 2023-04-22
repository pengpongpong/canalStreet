import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { create } from "zustand"
import "./Navbar.sass"
import FoodIcon from "/src/assets/icons/food.svg"
import CommunityIcon from "/src/assets/icons/community.svg"
import RetailIcon from "/src/assets/icons/retail.svg"

//store for handling mobile nav animation
const useStyleStore = create((set) => ({
  home: false,
  food: false,
  retail: false,
  community: false,
  toggle: false,
  setToggle: () => set((state) => ({ toggle: !state.toggle })),
  setHome: () => set((state) => ({ home: !state.home })),
  setFood: () => set((state) => ({ food: !state.food })),
  setRetail: () => set((state) => ({ retail: !state.retail })),
  setCommunity: () => set((state) => ({ community: !state.community })),
  resetState: () => set((state) => ({ home: false, food: false, retail: false, community: false }))
}))

function Navbar({
  homeClass,
  retailClass,
  communityClass,
  foodClass,
}) {
  const navMenu = useRef()
  const checkboxMenu = useRef()
  const screenWidth = window.innerWidth;
  const mobileSize = 400
  const location = useLocation()

  //zustand store
  const store = useStyleStore((state) => state)

  //styles for nav animation desktop & mobile
  const homeStyle = classNames(
    { "nav__item": true },
    { "nav__item--open": homeClass && screenWidth > mobileSize },
    { "nav__item--open": homeClass && screenWidth < mobileSize && store.home }
  );
  const foodStyle = classNames(
    { "nav__item": true },
    { "nav__item--open": foodClass && screenWidth > mobileSize },
    { "nav__item--open": foodClass && screenWidth < mobileSize && store.food }
  );
  const retailStyle = classNames(
    { "nav__item": true },
    { "nav__item--open": retailClass && screenWidth > mobileSize },
    { "nav__item--open": retailClass && screenWidth < mobileSize && store.retail }
  );
  const communityStyle = classNames(
    { "nav__item": true },
    { "nav__item--open": communityClass && screenWidth > mobileSize },
    { "nav__item--open": communityClass && screenWidth < mobileSize && store.community }
  );

  const homeIconStyle = classNames(
    { "nav__homeIconAnchor": true },
    { "nav__homeIconAnchor--open": homeClass }
  )

  //set animation style when click on pages with hamburger menu
  const setMobileStyle = (e) => {
    e.preventDefault()
    const page = e.currentTarget.innerText
    const pathName = location.pathname

    switch (page) {
      case "Home":
        pathName !== "/" ? store.setHome() : ""
        break;
      case "Food":
        pathName !== "/food" ? store.setFood() : ""
        break;
      case "Retail":
        pathName !== "/retail" ? store.setRetail() : ""
        break;
      case "Community":
        pathName !== "/community" ? store.setCommunity() : ""
        break;
    }
  }

  //toggle hamburger menu
  const toggleMenu = () => {
    store.setToggle()
  }

  //hide hamburger menu when changing page after .5s animation
  useEffect(() => {
    setTimeout(() => {
      store.setToggle()
      checkboxMenu.current.checked = false
      store.resetState()
    }, 500)

  }, [location.pathname])

  //set hide/show hamburger menu
  useEffect(() => {
    if (store.toggle && screenWidth < mobileSize) {
      navMenu.current.style.transform = "translate(0, 0)"
      document.querySelector("body").style.overflow = "hidden"
    }
    else if (!store.toggle && screenWidth < mobileSize) {
      navMenu.current.style.transform = "translate(100%, 0)"
      document.querySelector("body").style.overflow = "auto"
    }
  }, [store.toggle])

  return (
    <header>
      {screenWidth < mobileSize ?
        <>
          <input type="checkbox" id="hamburger" ref={checkboxMenu} />
          <label className="hamburger" htmlFor="hamburger" onClick={toggleMenu} aria-label="toggle navigation">
            <span className="hamburger__slice"></span>
            <span className="hamburger__slice"></span>
            <span className="hamburger__slice"></span>
          </label>
        </>
        : ""}

      <nav className="nav" ref={navMenu}>
        <Link className={homeIconStyle} to="/"></Link>
        <ul className="nav__list">
          <li className={homeStyle} onClick={setMobileStyle}>
            <Link className="nav__anchor" to="/">
              <span className="nav__text">Home</span>
            </Link>
          </li>
          <li className={foodStyle} onClick={setMobileStyle}>
            <Link className="nav__anchor" to="/food">
              <img className="nav__icon" src={FoodIcon} aria-hidden={true} />
              <span className="nav__text">Food</span>
            </Link>
          </li>
          <li className={retailStyle} onClick={setMobileStyle}>
            <Link className="nav__anchor" to="/retail">
              <img className="nav__icon" src={RetailIcon} aria-hidden={true} />
              <span className="nav__text">Retail</span>
            </Link>
          </li>
          <li className={communityStyle} onClick={setMobileStyle}>
            <Link className="nav__anchor" to="/community">
              <img className="nav__icon" src={CommunityIcon} aria-hidden={true} />
              <span className="nav__text">Community</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
