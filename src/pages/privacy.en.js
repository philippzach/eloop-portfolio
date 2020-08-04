import React from 'react'
import Layout from '../layouts/en'
import Helmet from 'react-helmet'
import Container from '../components/Container/containerlegal'
import { graphql } from 'gatsby'
import Footer from '../components/Footer/footeren'
import Seo from '../components/Seo/page'

const PrivacyEn = ({ data, location }) => (
  <Layout>
    <Helmet>
      <link rel="alternate" hreflang="en" href="https://eloop.at/en/privacy/" />
      <link rel="alternate" hreflang="de" href="https://eloop.at/de/privacy/" />
      <link rel="alternate" hreflang="x-default" href="https://eloop.at/en/privacy/" />
    </Helmet>
    <Seo
      title="Eloop | Privacy"
      desc="Privacy Policy from Eloop Electric Carsharing in Vienna. Your Data is safe with us."
      pathname={location.pathname}
    />
    <Container>
      {data.privacy.edges.map(item => (
        <div
          dangerouslySetInnerHTML={{ __html: item.node.data.privacy.html }}
        />
      ))}
      <Footer />
    </Container>
  </Layout>
)

export default PrivacyEn

export const pageQuery = graphql`
  query PrivacyQueryEn {
    privacy: allPrismicPrivacy(filter: { lang: { eq: "en-us" } }) {
      edges {
        node {
          id
          data {
            privacy {
              html
              text
            }
          }
        }
      }
    }
  }
`
