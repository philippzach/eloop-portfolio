import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Layout from '../layouts/en'
import styles from '../components/Header/landingindex.module.css'
import Helmet from 'react-helmet'
import Footer from '../components/Footer/footer_blacken'
import Container from '../components/Container/containerfaq'
import Tarife from '../components/Section/sectiontarifeen'
import SectionTestimonials from '../components/Section/section-testimonials'
import CallToAction from '../components/Section/sectiontarifebottomen'
import Seo from '../components/Seo/page'

import Reasons from '../components/Reasons/reasons.en'
import CallToActionOne from '../components/Buttons/cta'

const Container1 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2em;
  /* margin: 8% 8% 0;
  @media (min-width: 1000px) {
    position: relative;
    margin: 0% 8%;
  }
  @media (min-width: 1800px) {
    margin: 0% 15% !important;
  } */
`

const Pricing = ({ data, location }) => (
  <Layout>
    <Helmet>
      <link rel="alternate" hreflang="de" href="https://eloop.at/de/pricing/" />
      <link rel="alternate" hreflang="en" href="https://eloop.at/en/pricing/" />
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://eloop.at/en/pricing/"
      />
    </Helmet>
    <Seo
      title="Rent electric Car Sharing cars per minute, hour & day"
      desc="With Eloop you can rent electric cars and e-vans in Vienna. Whether you need an electric car per minute, hour or day, you always get the best price"
      pathname={location.pathname}
    />

    <section className={styles.lander}>
      <Img
        fluid={data.header.childImageSharp.fluid}
        title="Eloop Electric Carsharing Vienna"
        alt="Eloop User in Vienna"
        className="landing-page-header"
        fadeIn={true}
      />
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.title}>
            <span>Affordable Electric Cars from 29.90€ for 24 hours</span>
          </h1>
          <h2 className={styles.description}>
            If you rent a car for a whole day, you pay between €<b>2,08</b> & €{' '}
            <b>3,33</b> per hour! Get the cheapest E-cars in Vienna.
          </h2>
        </div>
      </Container>
    </section>
    <Container>
      <Tarife />
    </Container>
    <Reasons />
    <Container1>
      <h2 style={{ textAlign: 'center', marginTop: '3em' }}>
        What our customers say about us
      </h2>
      <SectionTestimonials data={data} />
    </Container1>
    <CallToActionOne
      title="
Always ride at the best price"
      link="/register"
      buttonText="Sign Up"
      text="
With us you do not have to choose any hour or day packages in advance. Just get in, drive off & we'll always guarantee you the cheap hourly or daily rate."
    />
    <Footer />
  </Layout>
)

export default Pricing

export const query = graphql`
  query {
    header: file(relativePath: { eq: "pricing.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2450
          traceSVG: { background: "#fff", color: "#49deb5" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
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
  }
`
