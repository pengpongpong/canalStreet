import React, { useEffect } from 'react'
import "./Container.sass"

function PageContainer({ children, left, id, bgColor }) {

    const screenWidth = window.innerWidth;
    const mobileSize = 800

    const containerDistance = left && screenWidth > mobileSize ? left : "0px"

    if (id) {
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [id])
    } else {
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [])
    }

    useEffect(() => {
        const body = document.querySelector("body")
        body.style.backgroundColor = `${bgColor}`
    },[bgColor])

    return (
        <section className='pageContainer' style={{ left: containerDistance }}>
            {children}
        </section>
    )
}

export default PageContainer