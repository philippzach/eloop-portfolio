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

const SectionCarEn = () => (
  <div className={styles.row}>
    <div className={styles.module1}>
      <StaticQuery
        query={graphql`
          query CarEn {
            caren: file(relativePath: { eq: "eloop-bmw-i3.jpg" }) {
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
            fluid={data.caren.childImageSharp.fluid}
            alt="BMW i3 by Eloop for electric Carsharing"
            loading="lazy"
          />
        )}
      />
    </div>
    <CarDesktop />
    <div className={styles.module2}>
      <h2 style={{ marginTop: '1em' }}>Our Fleet</h2>
      <Paragraph>
        ELOOP has you covered. Whether you need a small car or a transporter, we
        have an electric vehicle for every need.
      </Paragraph>
      <ul className={styles.features}>
        <li style={style3} className={styles.listitems}>
          Park anywhere in Vienna for free!
        </li>
        <li style={style1} className={styles.listitems}>
          Charged with 100% green energy
        </li>
        <li style={style2} className={styles.listitems}>
          Zero C0<sub>2</sub> emissions
        </li>
      </ul>
    </div>
  </div>
)

export default SectionCarEn
