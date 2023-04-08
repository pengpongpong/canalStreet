import React from 'react'
import { useLoaderData, useParams } from "react-router-dom"
import Vendor from "../../components/vendor/Vendor"
import PageContainer from "/src/components/container/PageContainer"
import Footer from "/src/components/footer/Footer"

function CommunityEventVendor() {
    const data = useLoaderData()
    const { id } = useParams()

    const eventData = data.eventData.filter(obj => (obj.href.replace(/\s/gi, "-") === id))

    if (eventData) {
        return (
            <PageContainer left="180px">
                <Vendor
                    data={eventData}
                    returnButtonText="Community"
                    community />
                <Footer />
            </PageContainer>
        )
    }

}

export default CommunityEventVendor