import React, { Component } from 'react'
import HomeZone from '../components/Section/section-homezone'
import Layout from '../layouts/en'
import Helmet from 'react-helmet'
import Seo from '../components/Seo/page'
import Footer from '../components/Footer/footer_black'

function HomezoneEN({ location }) {
  return (
    <Layout location={location.search}>
      <Helmet>
        <link
          rel="alternate"
          hreflang="de"
          href="https://eloop.at/de/homezone/"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://eloop.at/en/homezone/"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://eloop.at/en/homezone/"
        />
      </Helmet>
      <Seo
        title="Eloop - HomeZone for Carsharing in Vienna"
        desc="The Home Zone shows you the area where you can rent our e-cars. You can leave this zone during a ride."
        pathname={location.pathname}
      />
      <HomeZone
        title="Homezone"
        description="The Home Zone shows you the area where you can rent our e-cars. You can leave this zone during a ride. If you want to end your trip, you can simply park the car at the next available parking within the area."
        subHeading="How do I know I am still in the Homezone?"
        subParagraph="To help you not get lost, we equipped our fleet with useful features."
        claim1="The LED in the center console will turn green"
        claim2="A voice from the speaker tells you"
        claim3="You see your current position in the app"
      />
      <Footer />
    </Layout>
  )
}

export default HomezoneEN
