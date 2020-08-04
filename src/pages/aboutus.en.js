import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import Layout from '../layouts/en'
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
//import Subscribe from '../components/Section/subscribeform_white_en'
import Footer from '../components/Footer/footer_blacken'
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
  li:before {
    content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: #4adeb5; /* Change the color */
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }
`
const ListItem = styled.li``
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

const AboutEn = ({ data, location }) => (
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
    <Layout>
      <Container>
        <Header>
          <h1>Let's change Vienna together</h1>
          <ParagraphHeader>
            ELOOP is a local start-up, that has set itself the goal to
            revolutionize individual mobility in Vienna.
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
                <h2 className="tc">E-Car for every situation</h2>
                <p>
                  We ensure that our users always have the right vehicle for
                  their transportation needs. Be it for short trips, family
                  excursions or furniture purchases, ELOOP covers all mobility
                  needs. Our purely electric fleet includes:
                </p>
              </div>
              <List className="mt0">
                <ListItem>
                  <b>Compact Cars</b> fit in every parking space
                </ListItem>
                <ListItem>
                  <b>Mid-size Cars</b> for weekend trips and excursions
                </ListItem>
                <ListItem>
                  <b>Transporter</b> for moving bulky stuff
                </ListItem>
              </List>
            </Box>
            <Box>
              <div className="tc">
                <img src={Value2} alt="" />
              </div>
              <div>
                <h2 className="tc">Flexible pricing</h2>
                <p>
                  You do not need to decide in advance how long you are gonna
                  use an e-car. The price switches automatically to the cheaper
                  price bracket. The same applies to the daily price.
                </p>
              </div>
              <p>
                Soon we will be offering different subscription models.{' '}
                <b>Casual-User</b> and <b>Heavy-User</b> will get the best price
                for their mobility needs.
              </p>
            </Box>
          </Features>
        </Wrapper>
      </GreyBackground>
      <Wrapper>
        <FlexWrapper style={{ marginTop: '3em' }}>
          <Fifty>
            <h3>Electric Carsharing</h3>
            <p>
              ELOOP offers all Viennese the choice to move, cheaply and
              sustainable from A to B. We have a fleet of different E-cars wich
              will be distributed throughout Vienna for everybody to use.
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
            <h3>Tokenization Model</h3>
            <p>
              Communtiy is the heart of our endeavour. We think that real
              sharing means adding every user to our value chain. We achieve
              that by tokenizing our fleet and letting the token holders be part
              of the revenue in real time.
            </p>
          </Fifty>
        </FlexWrapperReverse>
      </Wrapper>

      <Wrapper>
        <FlexWrapper style={{ marginBottom: '3em' }}>
          <Fifty>
            <h3>City monitoring with moobile sensors</h3>
            <p>
              For ELOOP, Smart City stands for the possibility to measure the
              state of a city with numbers in real time. That's why our electric
              cars are equipped with mobile sensors, to evalute environmental
              data in real time.
            </p>
          </Fifty>
          <Fifty className="tc">
            <img src={Sensor} alt="" />
          </Fifty>
        </FlexWrapper>
      </Wrapper>
      <Reasons>
        <Wrapper>
          <WhiteHeading>6 Reasons to Drive with Us</WhiteHeading>
          <FlexWrap>
            <Third>
              <img src={Co2} alt=" Icon" />
              <White>Emission</White>
              <WhiteParagraph>
                In contrast to combustion engines, electric motors do not
                release carcinogenic smog. CO2 pollution and stench become a
                pale memory with ELOOP.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Energy} alt=" Icon" />
              <White>Energy</White>
              <WhiteParagraph>
                Our cars are powered by 100% green electricity. Everyone who is
                part of the ELOOP movement is supporting renewable energies at
                the same time.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Share} alt=" Icon" />
              <White>Sharing</White>
              <WhiteParagraph>
                Car sharing is caring. The more cars we share, the less
                resources are wasted. Insurance, parking fees & charging costs
                are a pain from yesterday.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Noise} alt=" Icon" />
              <White>Noise</White>
              <WhiteParagraph>
                Combustion engines are loud! Noise reduces the life quality in
                many residential areas. This will be a problem of the past.
                ELOOP reduces noise and you will drive almost silently through
                the city.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Space} alt=" Icon" />
              <White>Space</White>
              <WhiteParagraph>
                The parking spaces in Vienna are always crowded and use up big
                parts in the city. We have the vision of an environmentally
                friendly Vienna, with fewer cars and resposible use of
                ressources.
              </WhiteParagraph>
            </Third>
            <Third>
              <img src={Eco} alt=" Icon" />
              <White>Consumption</White>
              <WhiteParagraph>
                Not every E-car is the same. We rely on sustainable and
                economical electric cars. Our fleet is designed to to use
                valuable resources as efficiently as possible to protect the
                environment in the best possible way.
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
                  <li>33 kWh Battery</li>
                  <li>4 Seats</li>
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
                  <li>43 kWh Battery</li>
                  <li>5 Seats</li>
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
                  <li>17,6 kWh Battery</li>
                  <li>2 Seats</li>
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
                <h4>In the future also vans and other electric vehicles!</h4>
              </div>
            </Cars>
          </CarContainer>
        </Wrapper>
      </div>
      <Wrapper>
        <FlexWrapper>
          <FiftyHome>
            <h2>Our Home Zone</h2>
            <p>
              The Home Zone is our business area where users can drop off and
              rent electric cars. Of course you are allowed to drive outside but
              the cars always have to be returned inside. More information can
              be found in the FAQ.
            </p>
            <p>
              The ELOOP Home Zone currently covers the inner city area and parts
              of the outer districts. The exact boundaries of our Home Zone are
              displayed in our app. If you have not downloaded it yet you can do
              that here:
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
            <h2>The Team</h2>
            <p>
              ELOOP is an independent start-up founded in August 2017 by four
              vienna locals. Unlike many other carsharing providers, ELOOP is
              not an OEM or another large corporation.
            </p>
            <p>
              Until now the young company was know as 'Caroo'. Under the old
              name, the start-up has raised € 330k from 220 investors in a
              crowdinvesting campaign.
            </p>
            <p>
              In the meantime, ELOOP has received numerous grants and pulled
              other investors on board. In addition, a cooperation was made with
              'Wien Energie'. In June 2019 the E-Carsahirng service launched for
              the public.
            </p>
          </Team>
        </Wrapper>
      </GreyBackground>
      {/*  <Subscribe /> */}
      <TeamSection />
      <Footer />
    </Layout>
  </Global>
)

export default AboutEn

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
  }
`
