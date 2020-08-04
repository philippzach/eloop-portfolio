import React from 'react'
import styled from '@emotion/styled'
import styles from '../components/Header/countdown.module.css'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Countdown from '../components/Countdown/countdownchristmas'

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

import CallToAction from '../components/LandingPages/cta-landingpages'
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
          href="https://eloop.at/de/carsharing-in-wien/"
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
              <span>🎄Christmas Special 🎅</span>
            </h1>
            <h2 className={styles.description}>
              Du bist auf der Suche nach einem günstigen E-Auto? <br />
              {/*Melde dich jetzt für 9,90€ statt 19,90€ an und sichere dir 10€
              Fahrguthaben inklusive!*/}
              Jetzt gratis anmelden
              {/* Hier kannst du
              das BMW i3 und Smart EQ für Stunden, Tage, Wochen und Monate
              mieten */}
            </h2>
            <Countdown location={location} />
            <Link
              id="cta-landing"
              to={generateLink('register')}
              className={[styles.button, styles.navlink].join(' ')}
            >
              <div className={styles.bottom} />
              <div className={styles.top}>
                <div className={styles.label}>10€ Fahrguthaben sichern</div>
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
      </section>
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
          buttonLink={generateLink('/de/contact')}
        />
        <Spacer />

        <CallToActionOne
          title="E-Autos in Wien pro Stunde, Tag oder Woche mieten. Nur für kurze Zeit 9,90€ statt 19,90€ Anmeldegebühr"
          cta="50% Discount & 10€ Fahrguthaben sichern"
          link={generateLink('register')}
        />
        <Spacer />
      </Container>
      <Reasons>
        <Container>
          <WhiteHeading>Alles im Preis inbegriffen</WhiteHeading>
          <FlexWrap>
            <Third>
              <img src={Icon1} alt=" Icon" />
              <White>Laden</White>
              <WhiteParagraph>
                Du kannst unsere E-Autos an allen Wien Energie Ladestation in
                Wien gratis laden. Die Ladekarte ist im Auto.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Icon2} alt=" Icon" />
              <White>Parken</White>
              <WhiteParagraph>
                Die E-Cars kannst du an öffentlichen Parkplätzen & auch in
                Kurzparkzonen gratis abstellen.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Icon3} alt=" Icon" />
              <White>Versicherung</White>
              <WhiteParagraph>
                Alle Eloop-Autos sind vollkaskoversichert. Für 1€ kannst du den
                Selbstbehalt vor einer Fahrt halbieren.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Icon4} alt=" Icon" />
              <White>200km inkl.</White>
              <WhiteParagraph>
                Die ersten 200km gehen auf uns. Jeder weiteren gefahrene
                Kilometer kostet nur 27 Cent.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Icon5} alt=" Icon" />
              <White>AUT Vignette</White>
              <WhiteParagraph>
                Die gesamte Flotte ist mit Vignetten für die österreichische
                Autobahn ausgetattet.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Icon6} alt=" Icon" />
              <White>Reinigung</White>
              <WhiteParagraph>
                Unsere Mitarbeiter kümmern sich darum, dass die Autos immer
                blitzeblank sind.
              </WhiteParagraph>
            </Third>
          </FlexWrap>
        </Container>
      </Reasons>
      <Grid>
        <Half>
          <Img
            fluid={data.pic1.childImageSharp.fluid}
            alt="Bmw i3 in Wien 1h, 12h, 24h, 1 Woche mieten"
            style={{ boxShadow: '0 0.5rem 1.25rem 0 rgba(39, 48, 54, 0.2)' }}
          />
        </Half>
        <Half>
          <Img
            fluid={data.pic2.childImageSharp.fluid}
            alt="Bmw i3 in Wien mieten"
            style={{ boxShadow: '0 0.5rem 1.25rem 0 rgba(39, 48, 54, 0.2)' }}
          />
        </Half>
      </Grid>
      <Container>
        <Spacer />
        <CallToAction
          title="BMW i3 & Smart EQ pro Tag, Woche oder Monat mieten"
          sub="Wenn du direkt losfahren möchtest, dann hol dir die App und registriere dich. Interessierst du dich für eine längere Fahrt? Dann schicke uns einfach eine Anfrage."
          cta1="Download App"
          cta1Link={generateLink('register')}
          cta2="Anfrage"
          cta2Link={generateLink('/de/contact')}
        />
        <Spacer />
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
