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
  fontWeight: '700',
  lineHeight: '1.5em',
  marginBottom: '0.75em',
}
const Subscribe = () => (
  <Background>
    <h2 style={font}>Bleibe up-to-date.</h2>
    <h3 style={font}>Angebote und Neuigkeiten direkt in deine Inbox!</h3>
    <Popup
      trigger={
        <div
          id="cta-subscribe-mail"
          style={{ cursor: 'pointer' }}
          className={[styles.button, styles.navlink].join(' ')}
        >
          <div className={styles.bottom} />
          <div className={styles.top}>
            <div className={styles.label}>Zum Newsletter Anmelden</div>
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
        <div style={{ color: '#373736' }}>
          <Ixs className="close" onClick={close}>
            &times;
          </Ixs>
          <LogoTop src={Logo} alt="Eloop Mobility Electric Carsharing Logo" />
          <h2 style={{ fontWeight: '600' }}>Erhalte News and Angebote!</h2>
          <h5
            style={{ lineHeight: '1.5em', color: 'dimgrey', fontWeight: '500' }}
          >
            Deine Privatsphäre ist eine unserer obersten Prioritäten. <br />
            Kein Spam, deine Email Adresse ist bei uns sicher!
          </h5>
          <Mailchimp />
        </div>
      )}
    </Popup>
  </Background>
)

export default Subscribe
