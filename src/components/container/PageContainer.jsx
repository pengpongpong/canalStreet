import React, { useEffect } from 'react'
import "./Container.sass"

function PageContainer({ children, left, id, bgColor }) {

    const containerDistance = left ? left : "0px"

    if (id) {
        useEffect(() => {
            window.scrollTo(0, 9999)
        }, [id])
    } else {
        useEffect(() => {
            window.scrollTo(0, 0)
        }, [])
    }

    useEffect(() => {
        const body = document.querySelector("body")
        const main = document.querySelector("main")
        main.style.backgroundColor = `${bgColor}`
        body.style.backgroundColor = `${bgColor}`
      
    },[bgColor])

    return (
        <section className='pageContainer' style={{ left: containerDistance }}>
            {children}
        </section>
    )
}

export default PageContainer