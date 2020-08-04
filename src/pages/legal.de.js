import React from 'react'
import Layout from '../layouts/de'
import Helmet from 'react-helmet'
import Container from '../components/Container/containerlegal'
import { graphql } from 'gatsby'
import Footer from '../components/Footer/footer'
import Seo from '../components/Seo/page'

const Legal = ({ data, location }) => (
  <Layout>
    <Helmet>
      <link rel="alternate" hreflang="en" href="https://eloop.at/en/legal/" />
      <link rel="alternate" hreflang="de" href="https://eloop.at/de/legal/" />
      <link rel="alternate" hreflang="x-default" href="https://eloop.at/de/legal/" />
    </Helmet>
    <Seo
      title="Eloop | Impressum"
      desc="Impressum von Eloop Elektrisches Carsharing Wien"
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

export default Legal

export const pageQuery = graphql`
  query LegalQuery {
    legal: allPrismicLegal(filter: { lang: { eq: "de-at" } }) {
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
