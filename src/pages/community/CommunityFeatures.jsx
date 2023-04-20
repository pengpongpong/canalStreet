import React from 'react'
import PageContainer from "/src/components/container/PageContainer"
import IntroCommunity from "../../components/intro-community/IntroCommunity"
import Features from "../../components/features/Features"
import Footer from "/src/components/footer/Footer"
import VendorRegisterBanner from "/src/components/footer/VendorRegisterBanner"
import { useLoaderData } from "react-router-dom"
/* import "./Community.sass" */

function CommunityFeatures({bgColor}) {
  const data = useLoaderData()

  return (
    <PageContainer left="180px" bgColor={bgColor}>
      <IntroCommunity
        headerText={`Events, podcasts, and artist residencies\n are all part of the vibrant mix at\n our multi-purpose space.`}
        headline="Features" />
      <section style={{ margin: window.innerWidth < 400 ? "0 2em 2.5em 2em" : "0 4rem" }}>
        <Features data={data.featuresData} />
      </section>
      <VendorRegisterBanner />
      <Footer />
    </PageContainer>
  )
}

export default CommunityFeatures