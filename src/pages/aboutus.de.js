import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import Layout from '../layouts/de'
import Values from '../images/viennacarsharing.svg'
import Value1 from '../images/values1.svg'
import Value2 from '../images/values2.svg'
import Fleet from '../images/electricfleet.svg'
import Bmw from '../images/bmwi3.svg'
import Zoe from '../images/renaultzoe.svg'
import Transport from '../images/transporter.svg'
import Smart from '../images/smart42.svg'
import Co2 from '../images/co2.svg'
import Energy from '../images/energy.svg'
import Share from '../images/share.svg'
import Noise from '../images/noise.svg'
import Space from '../images/space.svg'
import Sensor from '../images/eloopsensor.svg'
import Token from '../images/token.svg'
import Eco from '../images/eco.svg'
import Homezone from '../images/homezone.svg'
//import Subscribe from '../components/Section/subscribeform_white'
import Footer from '../components/Footer/footer_black'
import Wrapper from '../components/Container/containerfaq'
import Appstore from '../components/Header/appstore.svg'
import Playstore from '../components/Header/playstore.svg'
import styles from '../components/Section/section.module.css'
import Seo from '../components/Seo/page'
import TeamSection from '../components/Section/sectionteam'

const Global = styled.div`
  p,
  ul {
    line-height: 1.5em;
  }
`
const Header = styled.div`
  margin-top: 2em;
  max-width: 100%;
  @media (min-width: 700px) {
    max-width: 40%;
  }
`
const ParagraphHeader = styled.p`
  margin-bottom: 0;
  @media (min-width: 770px) and (max-width: 999px) {
    max-width: 85%;
  }
  @media (min-width: 1000px) {
    max-width: 85%;
  }
`
const Vienna = styled.div`
  text-align: right;
  margin: 0 1em;
  margin-bottom: 3em;
  max-width: 100%;
  @media (min-width: 700px) {
    max-width: 60%;
  }
  @media (min-width: 999px) {
    margin-top: -3em;
  }
  @media (min-width: 1800px) {
    margin: 0 15%;
  }
  @media (min-width: 2200px) {
    margin: 0 20%;
  }
`
const Container = styled.div`
  margin: 5% 6% 0;
  @media (min-width: 700px) {
    display: inline-flex;
  }
  @media (min-width: 1800px) and (max-width: 1999px) {
    margin: 5% 16% 4%;
  }
  @media (min-width: 2000px) {
    margin: 5% 22% 4%;
  }
`
const HeaderImage = styled.img`
  @media (min-width: 999px) {
    width: 700px;
  }
  @media (min-width: 1200px) {
    width: 800px;
  }
  margin: 2em 0;
`
const Features = styled.div`
  @media (min-width: 681px) {
    display: flex;
  }
`
const GreyBackground = styled.div`
  background-color: #f6f6f6;
`

const Box = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 0.5fr;
  @media (min-width: 681px) and (max-width: 999px) {
    width: 50%;
    padding: 0 1em;
  }
  @media (min-width: 1000px) {
    padding: 0 3em;
  }
`
const List = styled.ul`
  padding-left: 0;
`
const ListItem = styled.li`
  &:before {
    content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: #4adeb5; /* Change the color */
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }
`
const Fifty = styled.div`
  padding: 2em 2em;
  @media (min-width: 770px) {
    width: 50%;
    padding: 4em 4em;
  }
`
const FiftyHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 770px) {
    width: 50%;
  }
`
const FlexWrapper = styled.div`
  display: flex;
  @media (max-width: 770px) {
    flex-direction: column;
  }
`
const FlexWrapperReverse = styled.div`
  display: flex;
  @media (max-width: 770px) {
    flex-direction: column-reverse;
  }
`
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
`
const Reasons = styled.div`
  background-color: #373736;
  padding: 3em 0;
`
const WhiteHeading = styled.h2`
  color: white;
  font-weight: 300;
  font-size: 2.25em;
  text-align: center;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
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
const CarContainer = styled.div`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`
const Cars = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2em 0;
  @media (min-width: 800px) {
    .carimage {
      text-align: center;
    }
  }
`
const Team = styled.div`
  padding: 3em 0;
  @media (min-width: 780px) {
    width: 50%;
    margin: 0 auto;
  }
`

const About = ({ data, location }) => (
  <Global>
    <Helmet>
      <link rel="alternate" hreflang="de" href="https://eloop.at/de/aboutus/" />
      <link rel="alternate" hreflang="en" href="https://eloop.at/en/aboutus/" />
    </Helmet>
    <Seo
      title="Das Start-Up Eloop bringt umweltschonende Mobilität"
      desc="Eloop ist ein Start-Up aus Wien, dass für Carsharing mit Elektroautos und E-Transportern, Blockchain Lösungen und umweltfreundliche Mobilität steht."
      pathname={location.pathname}
    />
    <Layout location={location.search}>
      <Container>
        <Header>
          <h1>Gemeinsam verändern wir Wien</h1>
          <ParagraphHeader>
            ELOOP ist ein Wiener Start-Up, das sich vorgenommen hat, die
            individuelle Mobilität in Wien zu revolutionieren.
          </ParagraphHeader>
        </Header>

        <Vienna>
          <HeaderImage src={Values} alt="" />
        </Vienna>
      </Container>
      <GreyBackground style={{ padding: '3.5em 0' }}>
        <Wrapper>
          <Features>
            <Box>
              <div className="tc">
                <img src={Value1} alt="" />
              </div>
              <div>
                <h2 className="tc">E-Car für jede Situation</h2>
                <p>
                  Wir sorgen dafür, dass unsere User stets das passende Fahrzeug
                  finden. Sei es für Kurz-Trips, Familienausflüge oder
                  Möbeleinkäufe, ELOOP deckt alle Mobilitätsbedürfnisse rein
                  elektrisch ab. Zu unserer Flotte gehören:
                </p>
              </div>
              <List className="mt0">
                <ListItem>
                  <b>Kleinwagen</b> die in jede Parklücke passen
                </ListItem>
                <ListItem>
                  <b>Mittelklasseautos</b> für Wochenend-Trips & Ausflüge
                </ListItem>
                <ListItem>
                  <b>Transporter</b> für Großeinkäufe und Umzüge
                </ListItem>
              </List>
            </Box>
            <Box>
              <div className="tc">
                <img src={Value2} alt="" />
              </div>
              <div>
                <h2 className="tc">Flexibles Pricing</h2>
                <p>
                  Bei uns brauchst du nicht vorab zu entscheiden wie lange du
                  ein E-Car brauchst. Sobald der Stundenpreis billiger wird als
                  der Minutenpreis, wechselst du automatisch in die billigere
                  Variante. Dasselbe gilt auch für den Tagespreis.
                </p>
              </div>
              <p>
                Bald wird es auch verschiedene Tarife geben. So können{' '}
                <b>Casual-User</b> und <b>Heavy-User</b> den passenden Tarif für
                ihr Fahrverhalten wählen.
              </p>
            </Box>
          </Features>
        </Wrapper>
      </GreyBackground>
      <Wrapper>
        <FlexWrapper style={{ marginTop: '3em' }}>
          <Fifty>
            <h3>Elektrisches Carsharing</h3>
            <p>
              ELOOP bietet allen WienerInnen die Möglichkeit, sich individuell,
              kostengünstig und CO<sub>2</sub>-schonend fortzubewegen. Wir haben
              eine Flotte von unterschiedlichen E-Cars, die unseren Usern in der
              ganzen Stadt zur freien Verfügung steht.
            </p>
          </Fifty>
          <Fifty className="tc">
            <img src={Fleet} alt="" />
          </Fifty>
        </FlexWrapper>
      </Wrapper>

      <Wrapper>
        <FlexWrapperReverse>
          <Fifty className="tc">
            <img src={Token} alt="" />
          </Fifty>
          <Fifty>
            <h3>Tokenization Modell</h3>
            <p>
              Die Community hat bei uns Vorrang. Wir verstehen unter Sharing,
              dass die User ein Teil der Wertschöpfungskette sein können. Das
              ermöglichen wir, indem wir unsere E-Cars tokenisieren und die
              Token-Holder live an den Fahrtumsätzen beteiligen.
            </p>
          </Fifty>
        </FlexWrapperReverse>
      </Wrapper>

      <Wrapper>
        <FlexWrapper style={{ marginBottom: '3em' }}>
          <Fifty>
            <h3>City Monitoring mit mobilen Sensoren</h3>
            <p>
              Smart City bedeutet für ELOOP, dass es möglich sein muss, den
              Ist-Zustand einer Stadt mit Zahlen zu benennen. Darum sind unsere
              Elektroautos mit mobilen Sensoren ausgestattet, die wichtige
              Umweltdaten in Echtzeit erheben und auswerten.{' '}
            </p>
          </Fifty>
          <Fifty className="tc">
            <img src={Sensor} alt="" />
          </Fifty>
        </FlexWrapper>
      </Wrapper>
      <Reasons>
        <Wrapper>
          <WhiteHeading>6 gute Gründe mit uns zu fahren</WhiteHeading>
          <FlexWrap>
            <Third>
              <img src={Co2} alt=" Icon" />
              <White>Emission</White>
              <WhiteParagraph>
                Im Gegensatz zu Benzin- und Dieselmotoren stoßen Elektromotoren
                keinen krebserregenden Feinstaub aus. CO2-Belastung und Gestank
                werden mit ELOOP zur blassen Erinnerung.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Energy} alt=" Icon" />
              <White>Energie</White>
              <WhiteParagraph>
                Unsere Autos werden zu 100% mit Ökostrom betrieben. Jeder der
                Teil des ELOOP-Movements ist unterstützt auch gleichzeitig die
                Förderung erneuerbarer Energien.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Share} alt=" Icon" />
              <White>Teilen</White>
              <WhiteParagraph>
                Carsharing is Caring. Umso mehr Autos wir miteinander teilen,
                umso weniger Ressourcen werden verschwendet. Und
                Versicherungsgebühren, Parkgebühren & Ladekosten fallen dabei
                gleich auch noch weg.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Noise} alt=" Icon" />
              <White>Lärm</White>
              <WhiteParagraph>
                Verbrennungsmotoren sind laut! Lärm mindert die Lebens- und
                Wohnqualität in vielen Gebieten. Mit ELOOP wird dieser
                verringert und du fährst fast lautlos durch die Stadt.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Space} alt=" Icon" />
              <White>Platz</White>
              <WhiteParagraph>
                Die Parkplätze in Wien sind überfüllt und blockieren große
                Flächen in der Stadt. Wir haben die Vision eines
                umweltfreundlichen Wiens, mit weniger Autos, die dafür sinnvoll
                verwendet werden.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Eco} alt=" Icon" />
              <White>Verbrauch</White>
              <WhiteParagraph>
                E-Car ist nicht gleich E-Car. Wir setzen auf nachhaltige und
                sparsame Elektroautos. Unsere Flotte ist darauf ausgelegt,
                wertvolle Ressourcen möglichst effizient einzusetzen und die
                Umwelt bestmöglich zu schonen.
              </WhiteParagraph>
            </Third>
          </FlexWrap>
        </Wrapper>
      </Reasons>
      <div className="mt5">
        <Wrapper>
          <h2>Die Flotte</h2>
          <CarContainer>
            <Cars>
              <div className="carimage">
                <img
                  src={Bmw}
                  alt="branded Eloop BMWi3 electric carsharing Vienna"
                />
              </div>
              <div>
                <h4>BMW i3</h4>
                <ul>
                  <li>33 kWh Akku</li>
                  <li>4 Sitzplätze</li>
                  <li>CCS 50 kW</li>
                  <li>Type 2 11 kW</li>
                </ul>
              </div>
            </Cars>
            <Cars>
              <div className="carimage">
                <img
                  src={Zoe}
                  alt="branded Eloop renault zoe electric carsharing Vienna"
                />
              </div>
              <div>
                <h4>Reanault Zoe</h4>
                <ul>
                  <li>43 kWh Akku</li>
                  <li>5 Sitzplätze</li>
                  <li>Type 2 43 kW</li>
                </ul>
              </div>
            </Cars>
            <Cars>
              <div className="carimage">
                <img
                  src={Smart}
                  alt="branded Eloop smart electric carsharing Vienna"
                />
              </div>
              <div>
                <h4>Smart fourtwo ED</h4>
                <ul>
                  <li>17,6 kWh Akku</li>
                  <li>2 Sitzplätze</li>
                  <li>Type 2 4,6 kW</li>
                </ul>
              </div>
            </Cars>
            <Cars>
              <div className="carimage">
                <img
                  src={Transport}
                  alt="branded Eloop Transporter electric carsharing Vienna"
                />
              </div>
              <div className="flex items-center">
                <h4>
                  In Zukunft auch Transporter und andere elektrische Fahrzeuge!
                </h4>
              </div>
            </Cars>
          </CarContainer>
        </Wrapper>
      </div>
      <Wrapper>
        <FlexWrapper>
          <FiftyHome>
            <h2>Unsere Home Zone</h2>
            <p>
              Die Home Zone ist unser Geschäftsgebiet, in dem die User die
              Elektroautos anmieten und abmieten können. Fahren kann man
              natürlich auch außerhalb. Mehr Infos dazu findest du in den FAQ.
            </p>
            <p>
              Die ELOOP Home Zone umfasst momentan das innere Stadtgebiet und
              Teile der äußeren Bezirke. Die exakten Grenzen unserer Home Zone
              findest du in unserer App. Falls du sie noch nicht downgeloaded
              hast, kannst du das hier tun:
            </p>
            <div className={styles.appstore}>
              <a
                id="cta-appstore"
                href="https://apps.apple.com/us/app/eloop-elektrisches-carsharing/id1465221970?ls=1s"
              >
                <img
                  className={styles.appbutton}
                  src={Appstore}
                  alt="Download Eloop App on Apple Appstore"
                />
              </a>
              <a
                id="cta-playstore"
                href="https://play.google.com/store/apps/details?id=com.vulog.carshare.eloop"
              >
                <img
                  className={styles.appbutton}
                  src={Playstore}
                  alt="Download Eloop App on Google Playstore"
                />
              </a>
            </div>
          </FiftyHome>
          <Fifty>
            <Img
              fluid={data.map.childImageSharp.fluid}
              alt="Eloop Vienna Home Zone"
            />
          </Fifty>
        </FlexWrapper>
      </Wrapper>
      <GreyBackground>
        <Wrapper>
          <Team>
            <h2>Das Team</h2>
            <p>
              ELOOP ist ein unabhängiges Start-Up, das im August 2017 von vier
              in Wien ansässigen Vorarlbergern gegründet wurde. Anders als bei
              vielen anderen Carsharing-Providern, steht hinter ELOOP kein OEM
              oder ein anderer Großkonzern.
            </p>
            <p>
              Das junge Unternehmen trat bis vor kurzem noch unter dem Namen
              Caroo auf. Unter dem alten Namen hat das Start-Up im Mai 2018 eine
              Crowdinvesting-Kampagne durchgeführt. Dabei haben 220 Personen
              über 330K Euro investiert.
            </p>
            <p>
              In der Zwischenzeit hat ELOOP zahlreiche Förderungen bekommen und
              weitere Investoren aufgenommen. Zudem wurde eine Kooperation mit
              Wien Energie eingegangen. Im Sommer 2019 wurde der Service für
              alle gelauncht.
            </p>
          </Team>
        </Wrapper>
      </GreyBackground>
      {/* <Subscribe /> */}
      <TeamSection data={data} />
      <Footer />
    </Layout>
  </Global>
)

export default About

export const query = graphql`
  query {
    map: file(relativePath: { eq: "map.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1050
          traceSVG: { background: "#fff", color: "#49deb5" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    leroy: file(relativePath: { eq: "leroyhofer.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`
