import React, { Component } from 'react'
import HomeZone from '../components/Section/section-homezone'
import Layout from '../layouts/de'
import Helmet from 'react-helmet'
import Seo from '../components/Seo/page'
import Footer from '../components/Footer/footer_black'

function HomezoneDE({ location }) {
  return (
    <Layout location={location.search}>
      <Helmet>
        <link
          rel="alternate"
          hreflang="de"
          href="https://eloop.at/de/homezone/"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://eloop.at/en/homezone/"
        />
         <link
          rel="alternate"
          hreflang="x-default"
          href="https://eloop.at/de/homezone/"
        />
      </Helmet>
      <Seo
        title="Eloop - Geschäftsgebiet in Wien"
        desc="Du hast Fragen zum Geschäftsgebiet, den Elektroautos oder willst sonst etwas wissen?"
        pathname={location.pathname}
      />
      <HomeZone
        title="Das Geschäftsgebiet von Eloop in Wien"
        description="Die Home Zone zeigt dir, wo du unsere E-Cars abmieten und anmieten kannst. Du kannst diese Zone während einer Fahrt natürlich verlassen. Wenn du deinen Trip beenden willst, kannst du das Auto einfach auf dem nächsten freien Parkplatz innerhalb des Gebietes machen."
        subHeading="Wie erkenne ich ob ich in der Zone bin?"
        subParagraph="Damit du immer weißt wann du gerade in der Home Zone bist, haben wir unsere Flotte mit nützlichen Gadgets ausgestattet."
        claim1="Die LED in der Mittelkonsole leuchtet dann grün"
        claim2="Eine Stimme aus dem Lautsprecher sagt es dir"
        claim3="Du siehst deine aktuelle Position in der App"
      />
      <Footer />
    </Layout>
  )
}

export default HomezoneDE
