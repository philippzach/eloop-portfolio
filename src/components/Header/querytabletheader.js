import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './landingindex.module.css'
// eloopbmwheader.jpg

const QueryTablet = () => (
  <StaticQuery
    query={graphql`
      query TabletHeader {
        tabletdesktop: file(relativePath: { eq: "tabletheader.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.tabletdesktop.childImageSharp.fluid}
        title="Eloop Electric Carsharing Vienna"
        alt="Eloop User in Vienna"
        className={styles.tabletheader}
        fadeIn={false}
        loading="lazy"
      />
    )}
  />
)

export default QueryTablet
