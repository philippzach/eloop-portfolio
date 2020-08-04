import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Icon1 from '../../images/green-energy.svg'
import Icon2 from '../../images/co2.svg'
import Icon3 from '../../images/wifi.svg'
import styles from './section.module.css'
import CarDesktop from './sectioncardesktop'

let style1 = {
  backgroundImage: `url(${Icon1})`,
}
let style2 = {
  backgroundImage: `url(${Icon2})`,
}
let style3 = {
  backgroundImage: `url(${Icon3})`,
}
const Paragraph = styled.p`
  line-height: 30px;
  max-width: 30em;
`
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4%;
  /* margin: 8% 8% 0;
  @media (min-width: 1000px) {
    position: relative;
    margin: 0% 8%;
  }
  @media (min-width: 1800px) {
    margin: 0% 15% !important;
  } */
`

const SectionCar = () => (
  <div className={styles.row}>
    <div className={styles.module1}>
      <StaticQuery
        query={graphql`
          query Car {
            car: file(relativePath: { eq: "eloop-bmw-i3.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        `}
        render={data => (
          <Img
            fluid={data.car.childImageSharp.fluid}
            alt="BMW i3 bei Eloop für elektrisches Carsharing"
            loading="lazy"
          />
        )}
      />
    </div>
    <CarDesktop />
    <div className={styles.module2}>
      <h2 style={{ marginTop: '1em' }}>Unser Fuhrpark</h2>
      <Paragraph>
        Wir starten erst bei Grün so richtig durch. Ob Transporter oder
        Kleinwagen, für alle ist das passende E-Car dabei.
      </Paragraph>
      <ul className={styles.features}>
        <li style={style1} className={styles.listitems}>
          100% elektrisch mit Ökostrom
        </li>
        <li style={style2} className={styles.listitems}>
          Lautlos und kein CO2
        </li>
        <li style={style3} className={styles.listitems}>
          inkl. gratis Parken in ganz Wien
        </li>
      </ul>
    </div>
  </div>
)

export default SectionCar
