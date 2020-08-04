import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './landingindex.module.css'
// eloopbmwheader.jpg

const QueryMobile = () => (
  <StaticQuery
    query={graphql`
      query MobileHeader {
        headermobile: file(relativePath: { eq: "mobileheader.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 360) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.headermobile.childImageSharp.fluid}
        title="Eloop Electric Carsharing Vienna"
        alt="Eloop User in Vienna"
        className={styles.mobileheader}
        fadeIn={false}
        imgStyle={{ position: 'absolute', zIndex: '0' }}
        loading="lazy"
      />
    )}
  />
)

export default QueryMobile
