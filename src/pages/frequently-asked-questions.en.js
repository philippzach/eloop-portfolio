import React from 'react'
import title from '../components/Modules/title.module.css'
import Layout from '../layouts/en'
import Helmet from 'react-helmet'
import Footer from '../components/Footer/footer_blacken'
import Container from '../components/Container/containerfaq'
import Faq from '../components/Section/sectionfaqen'
import Seo from '../components/Seo/page'

const FaqEN = ({ location }) => (
  <Layout location={location.search}>
    <Helmet>
      <link
        rel="alternate"
        hreflang="en"
        href="https://eloop.at/en/frequently-asked-questions/"
      />
      <link
        rel="alternate"
        hreflang="de"
        href="https://eloop.at/de/frequently-asked-questions/"
      />
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://eloop.at/frequently-asked-questions/"
      />
    </Helmet>
    <Seo
      title="Eloop FAQ - Here you can find information about the service"
      desc="In our FAQ you will find answers to the most popular questions about the Eloop Car Sharing Service"
      pathname={location.pathname}
    />
    <div className={title.head}>
      <Container>
        <h1 className={title.heading}>Frequently Asked Questions</h1>
      </Container>
    </div>
    <Faq />
    <Container />
    <Footer />
  </Layout>
)

export default FaqEN
