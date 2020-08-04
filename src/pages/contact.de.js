import React from 'react'
import Layout from '../layouts/de'
import Helmet from 'react-helmet'
import Container from '../components/Container/containerfaq'
import title from '../components/Modules/title.module.css'
import Footer from '../components/Footer/footer_black'
import Kontakt from '../components/Section/kontakt'
import Seo from '../components/Seo/page'

const SecondPage = ({ location }) => (
  <Layout location={location.search}>
    <Helmet>
      <link rel="alternate" hreflang="de" href="https://eloop.at/de/contact/" />
      <link rel="alternate" hreflang="en" href="https://eloop.at/en/contact/" />
      <link rel="alternate" hreflang="x-default" href="https://eloop.at/de/contact/" />
    </Helmet>
    <Seo
      title="Kontaktiere das Eloop Team bei Fragen"
      desc="Du hast Fragen zum Carsharing, den Elektroautos oder willst sonst etwas wissen? Dann kontaktiere uns hier direkt"
      pathname={location.pathname}
    />
    <div className={title.head}>
      <h1 className={title.heading}>Kontakt</h1>
    </div>
    <Container>
      <Kontakt
        leftheading="Hast du einen Notfall?"
        leftpara="Zögere nicht und ruf uns direkt an. Wir sind 24 Stunden am Tag für dich erreichbar."
        rightheading="Brauchst du Hilfe? Chatte mit uns!"
        rightpara="Bei kleineren Problemen & Fragen kannst du auch mit uns chatten"
      />
    </Container>
    <Footer />
  </Layout>
)

export default SecondPage
