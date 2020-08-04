import React from 'react'
//import 'tachyons'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import CookieConsent from 'react-cookie-consent'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import globalVar from './global'

//import globalVars from "./global"

import NavigationEn from '../components/Navigation/navigationen'
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

/*// brand
    data['mpn'] = "Eloop";
    data['brand'] = {
        "@type": "Thing",
        "name": `${prod['brand']}`
    };
}

// logo
if(prod['logo']){
    data['logo'] = imgPath + prod['logo'];
}
*/

const Layout = ({ props, children, location }) => (
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
      <html lang="en" />
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
      buttonText="I accept it"
      cookieName="GeneralCookie"
      style={{ background: '#373736', padding: '0' }}
      buttonClasses="cookiebutton"
      buttonStyle={{
        backgroundColor: '#49deb5',
        fontSize: '13px',
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
        You accompany us on the street, we accompany you on the internet. By
        continuing to use this website you accept our Cookie Policy.{' '}
        <Link
          to="/en/privacy"
          style={{ fontSize: '.8em', fontWeight: '200', color: 'white' }}
        >
          Edit settings
        </Link>
      </CustomDetails>
    </CookieConsent>
    <NavigationEn location={location}/>
    <div>{children}</div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
