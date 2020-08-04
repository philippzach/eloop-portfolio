import React from 'react'
import Layout from '../layouts/en'
import Helmet from 'react-helmet'
import Container from '../components/Container/containerlegal'
import { graphql } from 'gatsby'
import Footer from '../components/Footer/footeren'
import Seo from '../components/Seo/page'

const LegalEn = ({ data, location }) => (
  <Layout>
    <Helmet>
      <link rel="alternate" hreflang="en" href="https://eloop.at/en/legal/" />
      <link rel="alternate" hreflang="de" href="https://eloop.at/de/legal/" />
      <link rel="alternate" hreflang="en" href="https://eloop.at/en/legal/" />
    </Helmet>
    <Seo
      title="Eloop | Legal Information"
      desc="Legal Information about Eloop Electric Carsharing in Vienna"
      pathname={location.pathname}
    />
    <Container>
      {data.legal.edges.map(item => (
        <div dangerouslySetInnerHTML={{ __html: item.node.data.legal.html }} />
      ))}
      <Footer />
    </Container>
  </Layout>
)

export default LegalEn

export const pageQuery = graphql`
  query LegalQueryEn {
    legal: allPrismicLegal(filter: { lang: { eq: "en-us" } }) {
      edges {
        node {
          id
          data {
            legal {
              html
              text
            }
          }
        }
      }
    }
  }
`
