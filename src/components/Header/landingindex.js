import React from 'react'
import styles from './landingindex.module.css'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import QueryTabletHeader from './querytabletheader'
import QueryMobileHeader from './querymobileheader'
import QueryDesktopHeader from './querydesktopheader.js'
import Countdown from '../Countdown/countdown'
import Container from '../Container/container'

/*
==============================COUNTDOWN==============================
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
const DateTermination = () => {
  var today = () => {
    if (new Date().getMonth() === 5) {
      return 5
    } else {
      return new Date().getDate()
    }
  }
  var daysPassed = today => {
    if (today < 23 && today > 14) return '30€'
    else if (today < 32 && today > 22) return '25€'
  }
  //return daysPassed(today())
  return '25€'
}
const HeadlineText = () => {
  return (
    'Sichere dir ' +
    DateTermination() +
    ' Startguthaben für 19€ Registrierungsgebühr. Nur für kurze Zeit.'
  )
}
const ButtonText = () => {
  return DateTermination() + ' Bonus Sichern'
} */

const LandingIndex = ({ location }) => {
  function generateLink() {
    const initial = 'install'
    let res = initial.concat(location.search)
    return res
  }
  /*  function generateLink(initialLink) {
    let res = initialLink.concat(location)
    return res
  } */

  return (
    <section className={styles.lander}>
      <QueryMobileHeader />
      <QueryTabletHeader />
      <QueryDesktopHeader />
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.title}>
            <span>Elektrisches Carsharing in Wien</span>
          </h1>
          <h2 className={styles.description}>
            {/* Mit Eloop findest du Elektroautos in deiner Nähe.
          <br /> */}
            Jetzt gratis anmelden {/*Jetzt für 19€ anmelden und 1 Stunde gratis fahren.*/}
            {/* Das ganze Wochenende über gratis registrieren. */}
            <br />
            Umweltfreundliche Mobilität in deiner Stadt.
          </h2>
          <Link
            id="cta-landing"
            to={generateLink()}
            className={[styles.button, styles.navlink].join(' ')}
          >
            <div className={styles.bottom} />
            <div className={styles.top}>
              <div className={styles.label}>Jetzt Anmelden</div>
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
        {/* <ContainerCount>
        <Countdown headline={HeadlineText()} button={ButtonText()} />
      </ContainerCount> */}
      </Container>
    </section>
  )
}

export default LandingIndex
