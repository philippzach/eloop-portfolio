import React from 'react'
import styles from './countdown.module.css'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import QueryTabletHeader from './querytabletheader'
import QueryMobileHeader from './querymobileheader'
import QueryDesktopHeader from './querydesktopheader.js'
import Countdown from '../Countdown/freeregister'
import Container from '../Container/container'

/* ==============================COUNTDOWN============================== */
const ContainerCount = styled.div`
  margin: 8% 8% 0;
  @media (min-width: 1000px) {
    position: relative;
    margin: 0% 8%;
  }
  @media (min-width: 1800px) {
    margin: 0% 15% !important;
  }
`

const LandingIndex = ({ location }) => {
  function generateLink() {
    const initial = 'register'
    let res = initial.concat(location.search)
    return res
  }
  /*  function generateLink(initialLink) {
    let res = initialLink.concat(location)
    return res
  } */

  return (
    <section className={styles.lander}>
      <QueryTabletHeader />
      <QueryMobileHeader />
      <QueryDesktopHeader />
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.title}>
            <span>Electric Carsharing in Vienna.</span>
          </h1>
          <h2 className={styles.description}>
            {/* Mit Eloop findest du Elektroautos in deiner Nähe.
          <br /> */}
            Register for 0€ instead 19,90€
            <br />
            Free Sign Up!
            {/* Das ganze Wochenende über gratis registrieren. */}
            {/* <br />
            Für umweltfreundliche Mobilität in deiner Stadt. */}
          </h2>

          <Countdown location={location} />

          <Link
            id="cta-landing"
            to={generateLink()}
            className={[styles.button, styles.navlink].join(' ')}
          >
            <div className={styles.bottom} />
            <div className={styles.top}>
              <div className={styles.label}>Register Now</div>
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
                className={[
                  styles.buttonborder,
                  styles.buttonborderbottom,
                ].join(' ')}
              />
            </div>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default LandingIndex
