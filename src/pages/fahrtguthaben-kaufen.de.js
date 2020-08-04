import React from 'react'
import styled from '@emotion/styled'
import styles from '../components/Header/landingindex.module.css'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

import Dot from '../images/dot.svg'

import Icon1 from '../images/lp-icon1.svg'
import Icon2 from '../images/lp-icon2.svg'
import Icon3 from '../images/lp-icon3.svg'
import Icon4 from '../images/lp-icon4.svg'
import Icon5 from '../images/lp-icon5.svg'
import Icon6 from '../images/lp-icon6.svg'

import Pricing from '../components/LandingPages/Pricing'
import title from '../components/Modules/title.module.css'
import Layout from '../layouts/de'
import Footer from '../components/Footer/footer_black'
import Container from '../components/Container/containerfaq'

import CallToAction from '../components/LandingPages/cta-voucher'
import CallToActionOne from '../components/LandingPages/cta-oneButton'

import Seo from '../components/Seo/page'

/* let style1 = {
  backgroundImage: `url(${Dot})`,
}

const FlexContainer = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`
const FlexContainerReverse = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
const TextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
const TextContainerSmall = styled.div`
  max-width: 400px;
  margin: 0 auto;
  @media (max-width: 700px) {
    padding-bottom: 2em;
  }
`
const Left = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
  }
`
const Right = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    width: 100%;
  }
`

const List = styled.ul`
  list-style: square;
  line-height: 2em;
  font-size: 1.1em;
`
const Paragraph = styled.p`
  line-height: 1.6em;
  font-size: 1.1em;
`
const ParagraphText = styled.p`
  line-height: 1.6em;
  font-size: 1.1em;
  @media (max-width: 700px) {
    padding-top: 2em;
  }
` */
const Spacer = styled.div`
  padding: 3em 0;
`
const Reasons = styled.div`
  background-color: #373736;
  padding: 3em 0;
`
const White = styled.h3`
  color: white;
  padding-top: 0.5em;
`
const WhiteParagraph = styled.p`
  padding-right: 1.5em !important;
  color: white;
  padding-right: 1.5em;
`
const Third = styled.div`
  @media (min-width: 769px) {
    width: 33%;
    padding: 1em;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 50%;
    padding: 1em;
  }
`
const WhiteHeading = styled.h2`
  color: white;
  font-weight: 300;
  font-size: 2.25em;
  text-align: center;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
`
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
`
const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 50% 50%;
`
const Half = styled.div``

const Item = styled.li`
  background-position: 0.25em center;
  background-repeat: no-repeat;
  padding-left: 2.5em;
  background-size: 0.66em;
  display: block;
  margin-top: 10px;
  line-height: 1.5em;
  color: #646464;
`
/* */

const bmw = ({ location, data }) => {
  function generateLink(initialLink) {
    let utm = location.search
    let link = initialLink
    let res = link.concat(utm)
    return res
  }
  return (
    <Layout location={location.search}>
      <Helmet>
        <link
          rel="alternate"
          hreflang="de"
          href="https://eloop.at/de/fahrtguthaben-kaufen/"
        />
        {/*   <link
          rel="alternate"
          hreflang="en"
          href="https://eloop.at/en/carsharing-in-wien/"
        /> */}
      </Helmet>
      <Seo
        title="E-Autos in Wien pro Stunde, Tag oder Woche mieten"
        desc="Mit Eloop kannst du günstig E-Autos in Wien mieten. Egal ob du einen BMW i3 oder Smart EQ pro Minute, Stunde oder Tag brauchst"
        pathname={location.pathname}
      />

     <Container>
        <Spacer />
        <CallToAction
          title="Jetzt Fahrtguthaben holen"
          sub="Wenn du direkt losfahren möchtest, dann hol dir die App und registriere dich. Interessierst du dich für eine längere Fahrt? Dann schicke uns einfach eine Anfrage."
          text1="50€ Fahrtguthaben"
          link1="https://shop.eloop.at/cart/jdjhzhy"
          text2="100€ Fahrtguthaben"
          link2="https://shop.eloop.at/cart/dzqszho"
          
        />
        <Spacer />
      </Container>
      <Container>
      
     <Pricing
          title="Preise"
          description="Registriere dich innerhalb von 2 Minuten über unsere App. Alles was du dazu brauchst, ist ein Führerschein & eine Kreditkarte. Suche dir dann das passende Auto aus und fahrt direkt los! Hier findest du mehr Infos zu den Preisen"
          claim1="Finde Autos in deiner Nähe mit der App
"
          claim2="Reserviere dein Auto kostenlos 
"
          claim3="Öffne dein Auto mit nur einem Klick "
          from="ab"
          minute="Euro/Stunde"
          price1="7,90"
          price2="59,90"
          price3="339"
          hour="Euro/Tag"
          day="Euro/Woche"
          buttonLink={generateLink('contact')}
        />
        <Spacer />

        <CallToActionOne
          title="E-Autos in Wien pro Stunde, Tag oder Woche mieten"
          cta="In 2 min Anmelden & Losfahren"
          link={generateLink('register')}
        />
        <Spacer />
      </Container>
      <Container>
          <div className={styles.heading}>
            <h1 className={styles.title}>
              <span>Elektro Autos in Wien mieten</span>
            </h1>
            <h2 className={styles.description}>
              {/* Mit Eloop findest du Elektroautos in deiner Nähe.
          <br /> */}
              Du bist auf der Suche nach einem günstigen E-Auto? Hier kannst du
              das BMW i3 und Smart EQ für Stunden, Tage, Wochen und Monate
              mieten
            </h2>
            <Link
              id="cta-landing"
              to={generateLink('register')}
              className={[styles.button, styles.navlink].join(' ')}
            >
              <div className={styles.bottom} />
              <div className={styles.top}>
                <div className={styles.label}>Einfach Anmelden & Losfahren</div>
                <div
                  className={[
                    styles.buttonborder,
                    styles.buttonborderleft,
                  ].join(' ')}
                />
                <div
                  className={[styles.buttonborder, styles.buttonbordertop].join(
                    ' '
                  )}
                />
                <div
                  className={[
                    styles.buttonborder,
                    styles.buttonborderright,
                  ].join(' ')}
                />
                <div
                  className={[
                    styles.buttonborder,
                    styles.buttonborderbottom,
                  ].join(' ')}
                />
              </div>
            </Link>
          </div>
          {/* <ContainerCount>
        <Countdown headline={HeadlineText()} button={ButtonText()} />
      </ContainerCount> */}
    </Container>

      <Footer />
    </Layout>
  )
}

export default bmw

export const query = graphql`
  query {
    header: file(relativePath: { eq: "bmw-i3-eloop-mieten-wien.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2450
          traceSVG: { background: "#fff", color: "#49deb5" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    cover2: file(relativePath: { eq: "eloop-bmw-i3.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1450
          traceSVG: { background: "#fff", color: "#49deb5" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    pic1: file(relativePath: { eq: "bmwi3eloop.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1450
          traceSVG: { background: "#fff", color: "#49deb5" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    pic2: file(relativePath: { eq: "bmwi3-eloop-app.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1450
          traceSVG: { background: "#fff", color: "#49deb5" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    pic3: file(relativePath: { eq: "bmwi3-laden.jpg" }) {
      childImageSharp {
        fixed(height: 550, traceSVG: { background: "#fff", color: "#49deb5" }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    pic4: file(relativePath: { eq: "bmwi3-eloop-app.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1450
          traceSVG: { background: "#fff", color: "#49deb5" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    pic5: file(relativePath: { eq: "bmwi3-eloop-3.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1450
          traceSVG: { background: "#fff", color: "#49deb5" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
