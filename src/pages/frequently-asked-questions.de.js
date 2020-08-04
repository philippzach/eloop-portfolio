import React from 'react'
import title from '../components/Modules/title.module.css'
import Layout from '../layouts/de'
import Helmet from 'react-helmet'
import Footer from '../components/Footer/footer_black'
import Container from '../components/Container/containerfaq'
import Faq from '../components/Section/sectionfaq'
import Seo from '../components/Seo/page'

const FaqDE = ({ location }) => (
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
      title="Eloop FAQ - Hier findest du Infos zum Service"
      desc="In unseren FAQ findest du Antworten auf die gängigsten Fragen zum Eloop Carsharing-Service"
      pathname={location.pathname}
    />
    <div className={title.head}>
      <Container>
        <h1 className={title.heading}>Frequently Asked Questions</h1>
      </Container>
    </div>
    <Faq />

    <Footer />
  </Layout>
)

export default FaqDE
