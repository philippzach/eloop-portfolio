import React from 'react'
import Layout from '../layouts/de'
import Helmet from 'react-helmet'
import Container from '../components/Container/containerlegal'
import { graphql } from 'gatsby'
import Footer from '../components/Footer/footer'
import Seo from '../components/Seo/page'
import { Document, Page } from 'react-pdf'

const Terms = ({ data, location }) => (
  <Layout location={location.search}>
    <Helmet>
      <link rel="alternate" hreflang="en" href="https://eloop.at/en/terms/" />
      <link rel="alternate" hreflang="de" href="https://eloop.at/de/terms/" />
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://eloop.at/de/terms/"
      />
    </Helmet>
    <Seo
      title="Eloop | AGB's"
      desc="Allgemeine Geschäftsbedingungen von Eloop Elektrisches Carsharing Wien"
      pathname={location.pathname}
    />
    <Container>
      {data.terms.edges.map(item => (
        <div
          style={{ textAlign: 'center' }}
          dangerouslySetInnerHTML={{
            __html: item.node.data.termsandconditions.html,
          }}
        />
      ))}
      <Document
        file="https://eloop.at/eloop_agb.pdf"
        onLoadSuccess={console.log('success')}
        loading={() => <div style={{ textAlign: 'center' }}>Loading...</div>}
      >
        <Page pageNumber={1} />
      </Document>
      <div style={{ textAlign: 'center' }}>
        <a
          target="blank"
          rel="noopener noreferrer"
          style={{ color: 'black' }}
          href="https://prismic-io.s3.amazonaws.com/eloop/6c97b3b3-f7e1-4390-a634-6d7c2f9e2065_Eloop+AGB.pdf"
        >
          Herunterladen
        </a>
      </div>
      <Footer />
    </Container>
  </Layout>
)

export default Terms

export const pageQuery = graphql`
  query IndexQuery {
    terms: allPrismicTermsandconditions(filter: { lang: { eq: "de-at" } }) {
      edges {
        node {
          id
          data {
            termsandconditions {
              html
              text
            }
          }
        }
      }
    }
  }
`
