import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import LandingIndex from '../components/Header/landingindex'
//import LandingIndexCountdown from '../components/Header/landingindexcountdown'
import Layout from '../layouts/de'
import SectionCar from '../components/Section/sectioncar'
import SectionApp from '../components/Section/sectionapp'
import SectionPrice from '../components/Section/section-bestprice'
import SectionHomeZone from '../components/Section/section-homezone-withoutmaps'
import Countdown from '../components/Countdown/countdown'

import Intro from '../components/Section/intro.js'
import CTA from '../components/Section/call-to-action'
import CO2 from '../components/air/co2withoutapi'

import Footer from '../components/Footer/footer_black'
//import Collage from '../components/Section/photocollage';
import Seo from '../components/Seo/page'
import Helmet from 'react-helmet'
import Partner from '../components/partner'

const Container = styled.div`
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

const IndexPage = ({ data, location }) => {
  function generateLink(initialLink) {
    let utm = location.search
    let res = initialLink.concat(utm)
    return res
  }
  return (
    <Layout location={location.search}>
      <Helmet>
        <link rel="alternate" hreflang="de" href="https://eloop.at/de/" />
        <link rel="alternate" hreflang="en" href="https://eloop.at/en/" />
        <link rel="alternate" hreflang="x-default" href="https://eloop.at/de" />
      </Helmet>
      <Seo
        title="ELOOP - Carsharing mit Elektroautos in ganz Wien"
        desc="Bei Eloop Carsharing kannst du Elektroautos pro Minute, Stunde oder Tag mieten. Hier stehen dir E-Autos und E-Transporter in ganz Wien zur Verfügung"
        pathname={location.pathname}
      />
      <LandingIndex location={location} />
      <Container>
        {/*    <Countdown
          headline="Das ganze Wochenende über gratis registrieren"
          button="Jetzt Kostenlos Registrieren"
          location={location}
        /> */}
        <Intro />
      </Container>
      <SectionCar />
      <Container>
        <SectionPrice
          title="Bestpreis-Garantie"
          description="Du weißt nicht ob du das E-Car ein paar Minuten, eine Stunde oder einen Tag verwenden willst? Kein Problem!
Fahr einfach los und der Tarif swiched automatisch in die für dich günstigste Variante."
          claim1="200 Km/Trip und AUT-Vignette inklusive "
          claim2="Gratis parken an öffentlichen Parkplätzen"
          claim3="Gratis laden bei Wien-Energie-Ladepunkten"
          from="ab"
          minute="Cent/Minute"
          hour="Euro/Stunde"
          day="Euro/Tag"
          linktext="Erfahre mehr über unsere Tarife"
          link={generateLink('/de/pricing')}
        />
      </Container>
      <Container>
        <SectionApp />
      </Container>

      <CO2
        headline={
          <h2>
            Eingespartes CO<sub>2</sub> durch ELOOP Autos:
          </h2>
        }
        description="So viel wurde bereits durch unsere E-Carsharing-Autos eingespart. Und das alleine in Wien! Die eingesparte Menge entspricht:"
        claim1="Erdumrundungen mit einem PKW"
        claim2="Der jährlichen Aufnahmefähigkeit von"
        trees="Bäumen"
        claim3="Dem benötigtem CO2 für"
        beer="Mio. Liter Bier"
      />
      <Container>
        <SectionHomeZone
          title="Homezone"
          description="Die Home Zone zeigt dir, wo du unsere E-Cars abmieten und anmieten kannst. Du kannst diese Zone während einer Fahrt natürlich verlassen. Wenn du deinen Trip beenden willst, kannst du das Auto einfach auf dem nächsten freien Parkplatz innerhalb des Gebietes machen."
          subHeading="Wie erkenne ich ob ich in der Zone bin?"
          subParagraph="Damit du immer weißt wann du gerade in der Home Zone bist, haben wir unsere Flotte mit nützlichen Gadgets ausgestattet."
          claim1="Die LED in der Mittelkonsole leuchtet dann grün"
          claim2="Eine Stimme aus dem Lautsprecher sagt es dir"
          claim3="Du siehst deine aktuelle Position in der App"
          linktext="Homezone in einer Karte anzeigen"
          link={generateLink('/de/homezone')}
          data={data}
        />
      </Container>
      <Partner />
      <CTA
        heading="
Umweltfreundliche und günstige E-Autos wann immer du willst"
        sub=""
        cta="Jetzt Anmelden"
        link={generateLink('/register')}
      />
      {/* <Collage data={data}/> */}
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const data = graphql`
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
