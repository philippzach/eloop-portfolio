import React from 'react'
import Layout from '../layouts/en'
import Helmet from 'react-helmet'
import Container from '../components/Container/containerfaq'
import title from '../components/Modules/title.module.css'
import Footer from '../components/Footer/footer_blacken'
import Kontakt from '../components/Section/kontakt'
import Seo from '../components/Seo/page'

const SecondPage = ({ location }) => (
  <Layout location={location.search}>
    <Helmet>
      <link rel="alternate" hreflang="de" href="https://eloop.at/de/contact/" />
      <link rel="alternate" hreflang="en" href="https://eloop.at/en/contact/" />
      <link rel="alternate" hreflang="x-default" href="https://eloop.at/en/contact/" />
    </Helmet>
    <Seo
      title="Contact the Eloop Team for questions"
      desc="Do you have questions about car sharing, electric cars or do you want to know something else? Then contact us directly here"
      pathname={location.pathname}
    />
    <div className={title.head}>
      <h1 className={title.heading}>Contact</h1>
    </div>
    <Container>
      <Kontakt
        leftheading="Have an emergency?"
        leftpara="Do not hesitate and call us directly. We are available 24 hours a day."
        rightheading="Need help? Chat with us!"
        rightpara="For smaller problems & questions you can also chat with us."
      />
    </Container>
    <Footer />
  </Layout>
)

export default SecondPage
