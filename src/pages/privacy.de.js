import React from 'react'
import Layout from '../layouts/de'
import Helmet from 'react-helmet'
import Container from '../components/Container/containerlegal'
import { graphql } from 'gatsby'
import Footer from '../components/Footer/footer'
import Seo from '../components/Seo/page'

const Privacy = ({ data, location }) => (
  <Layout>
    <Helmet>
      <link rel="alternate" hreflang="en" href="https://eloop.at/en/privacy/" />
      <link rel="alternate" hreflang="de" href="https://eloop.at/de/privacy/" />
      <link rel="alternate" hreflang="x-default" href="https://eloop.at/de/privacy/" />
    </Helmet>
    <Seo
      title="Eloop | Datenschutz"
      desc="Datenschutzbestimmungen von Eloop Elektrisches Carsharing Wien. Deine Daten sind bei uns sicher."
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

export default Privacy

export const pageQuery = graphql`
  query PrivacyQuery {
    privacy: allPrismicPrivacy(filter: { lang: { eq: "de-at" } }) {
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
