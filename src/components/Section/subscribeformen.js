import React from 'react'
import Popup from 'reactjs-popup'
import styled from '@emotion/styled'
import styles from '../Header/landingindex.module.css'
import Mailchimp from './mailchimp'
import './popupfix.css'
import Logo from '../Navigation/logo.svg'

const Background = styled.div`
  background-color: #373736;
  text-align: center;
  color: white;
  padding: 6em 0 4em;
  margin: 4em 0 0;
  @media (min-width: 1000px) {
    margin: 4em 0 0;
  }
`
const Ixs = styled.a`
  display: flex;
  justify-content: flex-end;
  padding-right: 0.5em;
  padding-top: 0.5em;
  zoom: 2;
  cursor: pointer;
`
const LogoTop = styled.img`
  max-width: 8em;
  margin-bottom: 1.5em;
`
const font = {
  fontWeight: '500',
  lineHeight: '1.5em',
}
const Subscribe = () => (
  <Background>
    <h2 style={font}>Join our Newsletter.</h2>
    <h3 style={font}>
      Let us keep your wheels spinning with special offers and updates!
    </h3>
    <Popup
      trigger={
        <div
          id="cta-subscribe-mail"
          style={{ cursor: 'pointer' }}
          className={[styles.button, styles.navlink].join(' ')}
        >
          <div className={styles.bottom} />
          <div className={styles.top}>
            <div className={styles.label}>Subscribe</div>
            <div
              className={[styles.buttonborder, styles.buttonborderleft].join(
                ' '
              )}
            />
            <div
              className={[styles.buttonborder, styles.buttonbordertop].join(
                ' '
              )}
            />
            <div
              className={[styles.buttonborder, styles.buttonborderright].join(
                ' '
              )}
            />
            <div
              className={[styles.buttonborder, styles.buttonborderbottom].join(
                ' '
              )}
            />
          </div>
        </div>
      }
      position="bottom center"
      lockScroll="true"
      modal
    >
      {close => (
        <div style={{ color: 'black' }}>
          <Ixs className="close" onClick={close}>
            &times;
          </Ixs>
          <LogoTop src={Logo} alt="Eloop Mobility Electric Carsharing Logo" />
          <h2>Receive News and Special Offers!</h2>
          <h5
            style={{ lineHeight: '1.5em', color: 'dimgrey', fontWeight: '500' }}
          >
            Your privacy is one of our top priorities. <br />
            No spam, your email is safe with us!
          </h5>
          <Mailchimp />
        </div>
      )}
    </Popup>
  </Background>
)

export default Subscribe
