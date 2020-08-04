import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import Layout from '../layouts/de'
import styles from '../components/Header/landingindex.module.css'
import Helmet from 'react-helmet'
import Footer from '../components/Footer/footer_black'
import Container from '../components/Container/containerfaq'
import Tarife from '../components/Section/sectiontarife'
import SectionTestimonials from '../components/Section/section-testimonials'
import CallToAction from '../components/Section/sectiontarifebottom'

import CallToActionOne from '../components/Buttons/cta'

//import Faq from '../components/Section/sectionfaq';
import Seo from '../components/Seo/page'
import Reasons from '../components/Reasons/reasons.de'

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

const PricingDe = ({ data, location }) => {
  function generateLink() {
    const initial = 'register'
    let res = initial.concat(location.search)
    return res
  }
  return (
    <Layout location={location.search}>
      <Helmet>
        <link
          rel="alternate"
          hreflang="de"
          href="https://eloop.at/de/pricing/"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://eloop.at/en/pricing/"
        />
        <link
          rel="alternate"
          hreflang="de"
          href="https://eloop.at/de/pricing/"
        />
      </Helmet>
      <Seo
        title="Carsharing Elektroautos pro Minute, Stunde & Tag mieten"
        desc="Mit Eloop kannst du günstige Elektroautos und E-Transporter in Wien mieten. Egal ob du ein E-Auto pro Minute, Stunde oder Tag brauchst"
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
              <span>Günstige E-Autos ab 29.90€ für 24 Stunden</span>
            </h1>
            <h2 className={styles.description}>
              Wenn du ein Auto einen ganzen Tag mietest, bezahlst du zwischen €
              <b>2,08</b> & €<b>3,33</b> pro Stunde! Hol dir die günstigsten
              E-Autos in Wien.
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
          Was unsere Kunden sagen
        </h2>
        <SectionTestimonials data={data} />
      </Container1>
      <CallToActionOne
        title="Fahre immer zum Bestpreis"
        link={generateLink()}
        buttonText="Jetzt Anmelden"
        text="Bei uns musst du vorab keine Stunden- oder Tagespakete wählen. Steig einfach ein, fahr los & wir garantieren dir immer den günstigen Stunden- oder Tagespreis."
      />
      <Footer />
    </Layout>
  )
}

export default PricingDe

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
