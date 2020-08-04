import React from 'react'
import styles from './landingindex.module.css'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import QueryTabletHeader from './querytabletheader'
import QueryDesktopHeader from './querydesktopheader.js'
import QueryMobileHeader from './querymobileheader'
import Container from '../Container/container'
import Countdown from '../Countdown/countdown'
/* 
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
    'Get ' +
    DateTermination() +
    ' driving credit for 19€ one-time registration fee. Limited time only.'
  )
}
const ButtonText = () => {
  return 'Secure ' + DateTermination() + ' Bonus'
} */

const LandingIndex = () => (
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
          {/*  Eloop offers you electric cars in your area.
          <br /> */}
          {/*Sign up for 19€ and get 1 hour driving credit.*/}
          Sign up for free
          {/*  Get 100% off the registration fee until Sunday 12am */}
          <br /> Environmentally friendly mobility in your city.
        </h2>
        <Link
          id="cta-landing"
          to="/install"
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
              className={[styles.buttonborder, styles.buttonborderbottom].join(
                ' '
              )}
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

export default LandingIndex
