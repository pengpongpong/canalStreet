import React from 'react'
import { useLoaderData, useParams } from "react-router-dom"
import Vendor from "/src/components/vendor/Vendor"
import PageContainer from "/src/components/container/PageContainer"
import Footer from "/src/components/footer/Footer"

function CommunityRadioVendor({bgColor}) {
    const data = useLoaderData()
    const { id } = useParams()

    const eventData = data.communityPodcastData.filter(obj => (obj.href.replace(/\s/gi, "-") === id))

    if (eventData) {
        return (
            <PageContainer left="180px" id={id} bgColor={bgColor}>
                <Vendor
                    data={eventData}
                    returnButtonText="Community"
                    radio
                    community />
                <Footer />
            </PageContainer>
        )
    }
}

export default CommunityRadioVendor