import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './section.module.css'

const Desktop = () => (
  <div className={styles.cardesktop}>
    <StaticQuery
      query={graphql`
        query Desktop {
          cardesktop: file(relativePath: { eq: "eloop-bmw-desktop.jpg" }) {
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
          fluid={data.cardesktop.childImageSharp.fluid}
          alt="BMW i3 by Eloop for electric Carsharing"
          loading="lazy"
        />
      )}
    />
  </div>
)

export default Desktop
