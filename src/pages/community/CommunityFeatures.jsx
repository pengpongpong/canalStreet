import React from 'react'
import PageContainer from "/src/components/container/PageContainer"
import IntroCommunity from "../../components/intro-community/IntroCommunity"
import Features from "../../components/features/Features"
import Footer from "/src/components/footer/Footer"
import VendorRegisterBanner from "/src/components/footer/VendorRegisterBanner"
import { useLoaderData } from "react-router-dom"
/* import "./Community.sass" */

function CommunityFeatures() {
  const data = useLoaderData()
  return (
    <PageContainer left="180px">
      <IntroCommunity
        headerText={`Our mixed-use space hosts\nongoing events, podcasts\n& artists in residence `}
        headline="Features" />
      <section style={{ margin: "0 4rem" }}>
        <Features data={data.featuresData} />
      </section>
      <VendorRegisterBanner />
      <Footer />
    </PageContainer>
  )
}

export default CommunityFeatures