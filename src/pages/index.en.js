import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import LandingIndex from '../components/Header/landingindexen'
import Layout from '../layouts/en'
import SectionCar from '../components/Section/sectioncaren'
import SectionApp from '../components/Section/sectionappen'
import SectionPrice from '../components/Section/section-bestprice'
import SectionHomeZone from '../components/Section/section-homezone-withoutmaps'
import Countdown from '../components/Countdown/countdown'

import Intro from '../components/Section/introen.js'
import Subscribe from '../components/Section/subscribeformen'
import CTA from '../components/Section/call-to-action'
import CO2 from '../components/air/co2withoutapi'
//import Air from '../components/air/index'
import Footer from '../components/Footer/footer_blacken'
//import Collage from '../components/Section/photocollage';
import Seo from '../components/Seo/page'
import Helmet from 'react-helmet'
import Partner from '../components/partner'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2em;
  /*  margin: 8% 8% 0;
  @media (min-width: 1000px) {
    position: relative;
    margin: 0% 8%;
  } */
`
/* const Cookie = styled.div`
    font-size: .7em;
    line-height: 1.3em;
`
const CustomSummary = styled.summary`
padding: 0;
font-weight: 500;
::-webkit-details-marker { 
    display:none
 }
`
const CustomDetails = styled.details`
    margin: 0;
    background: none;
    box-shadow: none;
    border: none;
` */
const IndexPage = ({ data, location }) => (
  <Layout location={location.search}>
    <Helmet>
      <link rel="alternate" hreflang="en" href="https://eloop.at/en/" />
      <link rel="alternate" hreflang="de" href="https://eloop.at/de/" />
      <link rel="alternate" hreflang="x-default" href="https://eloop.at/de" />
    </Helmet>
    <Seo
      title="ELOOP - Electric Car Sharing in Vienna"
      desc="Eloop Car Sharing rents electric cars per minute, hour or day. Here you can find electic cars and electric vans throughout Vienna"
      pathname={location.pathname}
    />
    <LandingIndex location={location} />
    <Container>
      {/*  <Countdown
        location={location}
        headline="Get 100% off the registration fee until Sunday 12am"
        button="Register for free"
      /> */}
      <Intro />
    </Container>
    <SectionCar />
    <Container>
      <SectionPrice
        title="Best Price Guarantee"
        description="You don't know if you want to use the e-car for a few minutes, an hour or a day? No problem!
Just start driving and the tarif will swich automatically into the cheapest option for you"
        claim1="200 Km/trip and AT-highway toll sticker"
        claim2="Free parking at public parking spots"
        claim3="Free charging at Wien Energie charging stations"
        from="from"
        minute="Cent/Minute"
        hour="Euro/Hour"
        day="Euro/Day"
        link="/en/pricing"
        linktext="Learn more about our pricing"
      />
    </Container>
    <Container>
      <SectionApp />
    </Container>

    <CO2
      headline={
        <h2>
          Total amount of CO<sub>2</sub> saved by ELOOP cars:
        </h2>
      }
      description="
The amount that has already been saved by our e-carsharing fleet. Just in Vienna! The saved amount corresponds to:"
      claim1="
times around the world by car"
      claim2="The annual capacity of"
      trees="trees"
      claim3="The required CO2 for"
      beer="million liters of beer"
    />
    <Container>
      <SectionHomeZone
        title="Homezone"
        description="The Home Zone shows you the area where you can rent our e-cars. You can leave this zone during a ride. If you want to end your trip, you can simply park the car at the next available parking within the area."
        subHeading="How do I know I am still in the Homezone?"
        subParagraph="To help you not get lost, we equipped our fleet with useful features."
        claim1="The LED in the center console will turn green"
        claim2="A voice from the speaker tells you"
        claim3="You see your current position in the app"
        data={data}
        link="/en/homezone"
        linktext="Show homezone in map"
      />
    </Container>
    <Partner />
    <CTA
      heading="
Eco-friendly and affortable electric cars whenever you want"
      sub="
"
      cta="Register Now"
    />
    {/* <Collage data={data}/> */}
    <Footer />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    testimonial1: file(relativePath: { eq: "testimonial1.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1050
          traceSVG: { background: "#49deb5", color: "#fff" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    testimonial2: file(relativePath: { eq: "testimonial2.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 650
          traceSVG: { background: "#49deb5", color: "#fff" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    testimonial3: file(relativePath: { eq: "testimonial3.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 650
          traceSVG: { background: "#49deb5", color: "#fff" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    testimonial4: file(relativePath: { eq: "testimonial4.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 650
          traceSVG: { background: "#49deb5", color: "#fff" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    testimonial5: file(relativePath: { eq: "testimonial5.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 650
          traceSVG: { background: "#49deb5", color: "#fff" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    map: file(relativePath: { eq: "mapblack.jpg" }) {
      childImageSharp {
        fixed(width: 550, traceSVG: { background: "#49deb5", color: "#fff" }) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
