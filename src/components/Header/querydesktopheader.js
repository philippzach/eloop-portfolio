import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './landingindex.module.css'
// eloopbmwheader.jpg

const QueryDesktop = () => (
  <StaticQuery
    query={graphql`
      query DesktopHeader {
        headerdesktop: file(relativePath: { eq: "headerdesktop.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.headerdesktop.childImageSharp.fluid}
        title="Eloop Electric Carsharing Vienna"
        alt="Eloop User in Vienna"
        className={styles.desktopheader}
        fadeIn={true}
        loading="lazy"
      />
    )}
  />
)

export default QueryDesktop
