import React from 'react'
//import 'tachyons'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import CookieConsent from 'react-cookie-consent'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import globalVar from './global'

import Navigation from '../components/Navigation/navigation'

import SofiaProBold from "../fonts/SofiaProBold.woff2"
import SofiaProSemiBold from "../fonts/SofiaProSemiBold.woff2"
import SofiaProMedium from "../fonts/SofiaProMedium.woff2"

import './global-layout.css'

const CustomDetails = styled.div`
  margin: 0;
  background: none;
  box-shadow: none;
  border: none;
  padding: 0;
  font-weight: 500;
  line-height: 1.5em;
`
/* const BigScreen = styled.div`
@media (min-width: 1700px) {
 margin-left: 10em;
 margin-right: 10em;
}
` */

const LayoutIndex = ({ location, children }) => (
  <>
    <Helmet
      meta={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, minimum-scale=1',
        },
        { name: 'apple-mobile-web-app-title', content: 'Eloop' },
        { name: 'application-name', content: 'Eloop' },
      ]}
    >
      <html lang="de" />
      <script
        className="structured-data-list-android"
        type="application/ld+json"
      >
        {globalVar.globalGoogleStructuredDataANDROID()}
      </script>
      <script className="structured-data-list-ios" type="application/ld+json">
        {globalVar.globalGoogleStructuredDataIOS()}
      </script>
      <script className="structured-data-list-ios" type="application/ld+json">
        {globalVar.globalGoogleStructuredDataORG()}
      </script>
      <link rel="preload"
            as="font"
            href={SofiaProBold}
            type="font/woff2"
            crossOrigin="anonymous" />
      <link rel="preload"
            as="font"
            href={SofiaProSemiBold}
            type="font/woff2"
            crossOrigin="anonymous" />
      <link rel="preload"
            as="font"
            href={SofiaProMedium}
            type="font/woff2"
            crossOrigin="anonymous" />
    </Helmet>
    <CookieConsent
      buttonText="Ich bin einverstanden"
      cookieName="GeneralCookie"
      style={{ background: '#373736' }}
      buttonClasses="cookiebutton"
      buttonStyle={{
        backgroundColor: '#49deb5',
        fontSize: '14px',
        borderRadius: '2px',
        cursor: 'pointer',
        margin: '0 15px 15px',
      }}
      expires={150}
      debug={false}
      acceptOnScroll={true}
      acceptOnScrollPercentage={10}
    >
      <CustomDetails>
        Du begleitest uns auf der Straße, wir dich im Internet. Mit der
        Benutzung dieser Website stimmst du unserer Cookie Policy zu.{' '}
        <Link
          to="/de/privacy"
          style={{ fontSize: '.8em', fontWeight: '200', color: 'white' }}
        >
          Einstellung ändern
        </Link>
      </CustomDetails>
    </CookieConsent>
    <Navigation location={location}/>

    {children}
  </>
)

LayoutIndex.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutIndex
