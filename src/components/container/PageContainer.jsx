import React, { useEffect } from 'react'
import "./Container.sass"

function PageContainer({ children, left, id }) {

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

    return (
        <section className='pageContainer' style={{ left: containerDistance }}>
            {children}
        </section>
    )
}

export default PageContainer