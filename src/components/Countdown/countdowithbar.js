import React from 'react'
import styled from '@emotion/styled'
import styles from '../Modules/buttontarife.module.css'

import './index.css'

import { Link } from 'gatsby'
import Countdown from 'react-countdown-now'
import Container from '../Container/container'
import 'react-step-progress-bar/styles.css'
import { ProgressBar, Step } from 'react-step-progress-bar'

const Timer = styled.div`
  font-weight: bold;
  color: #373736;
  display: flex;
  justify-content: center;
  padding: 1em 0 0.5em;
  @media (max-width: 700px) {
    font-size: 2em;
  }
  @media (min-width: 700px) {
    font-size: 2.5em;
  }
`
const Units = styled.span`
  font-size: 0.5em;
  padding-top: 0.25em;
  font-weight: 100;
`
const UnitsCount = styled.span``
const UnitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 0.5em;
`
const CountdownContainer = styled.div`
  display: flex;
`

const Section = styled.section`
  @media (min-width: 501px) and (max-width: 1899px) {
    margin: 6em 0 8em;
  }
  @media (max-width: 500px) {
    margin: 3em 0 5em;
  }
  @media (min-width: 1900px) {
    margin: 12em 6em 12em !important;
  }
`
const Button = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: center;
`
const BarSection = styled.section`
  padding: 2em 0;
`
// Completion component
const Completionist = () => (
  <span>The offer is over. Check back later for more!</span>
)

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />
  } else {
    // Render a countdown
    return (
      <CountdownContainer>
        <UnitContainer>
          <UnitsCount>{days}</UnitsCount>
          <Units>Days</Units>
        </UnitContainer>
        <UnitContainer>
          <UnitsCount>{hours}</UnitsCount>
          <Units>Hours</Units>
        </UnitContainer>
        <UnitContainer>
          <UnitsCount>{minutes}</UnitsCount>
          <Units>Minutes</Units>
        </UnitContainer>
        <UnitContainer>
          <UnitsCount>{seconds}</UnitsCount>
          <Units>Seconds</Units>
        </UnitContainer>
      </CountdownContainer>
    )
  }
}
const SetCountdown = () => {
  var today = () => {
    if (new Date().getMonth() === 5) {
      return 5
    } else {
      return new Date().getDate()
    }
  }
  var daysPassed = today => {
    if (today < 23 && today > 14) return '2019-07-21T24:00:00'
    else if (today < 32 && today > 22) return '2019-07-31T24:00:00'
  }
  return '2019-12-01T24:00:00'
  //return daysPassed(today())
}

const SetPercentage = () => {
  var initialPercentageValue = 20
  var today = () => {
    if (new Date().getMonth() === 5) {
      return 0
    } else {
      return new Date().getDate()
    }
  }
  var daysPassed = today => {
    console.log(today)
    if (today < 8) return today * 2.6
    else if (today < 16 && today > 7) return today * 2.8
    else if (today < 32 && today > 15) return today * 2.8
  }
  //var PercentageValue = initialPercentageValue + daysPassed(today())
  var PercentageValue = 100
  console.log(PercentageValue)
  return PercentageValue
}

const CountdownSectionBar = ({ headline, button }) => (
  <Section>
    <Container>
      <div>
        <h1 style={{ textAlign: 'center', paddingTop: '1em' }}>
          Green Friday Weekend Sale 🌱
        </h1>
        <h2 style={{ textAlign: 'center', lineHeight: '1.5em' }}>{headline}</h2>
        <Timer>
          <Countdown date={SetCountdown()} renderer={renderer} />
        </Timer>
        <Button>
          <Link
            id="cta-landing"
            to="/register"
            className={[styles.button, styles.navlink].join(' ')}
          >
            <div className={styles.bottom} />
            <div className={styles.top}>
              <div className={styles.label}>{button}</div>
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
        </Button>
        <p style={{ display: 'flex', justifyContent: 'center' }} />
        <BarSection>
          <ProgressBar
            filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
            percent={SetPercentage()}
          >
            <Step transition="scale">
              {({ accomplished, index }) => (
                <div
                  className={`transitionStep ${
                    accomplished ? 'accomplished' : null
                  }`}
                >
                  🚘
                </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished, index }) => (
                <div
                  className={`indexedStep ${
                    accomplished ? 'accomplished' : null
                  }`}
                >
                  40€
                </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished, index }) => (
                <div
                  className={`indexedStep ${
                    accomplished ? 'accomplished' : null
                  }`}
                >
                  35€
                </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished, index }) => (
                <div
                  className={`indexedStep ${
                    accomplished ? 'accomplished' : null
                  }`}
                >
                  30€
                </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished, index }) => (
                <div
                  className={`indexedStep ${
                    accomplished ? 'accomplished' : null
                  }`}
                >
                  25€
                </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished, index }) => (
                <div
                  className={`transitionStep ${
                    accomplished ? 'accomplished' : null
                  }`}
                >
                  🏁
                </div>
              )}
            </Step>
          </ProgressBar>
        </BarSection>
      </div>
    </Container>
  </Section>
)

export default CountdownSectionBar
