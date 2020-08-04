import React from 'react'
import styled from '@emotion/styled'
import styles from '../Modules/buttontarife.module.css'

import './index.css'

import Countdown from 'react-countdown-now'
import 'react-step-progress-bar/styles.css'
import { ProgressBar, Step } from 'react-step-progress-bar'

const Timer = styled.div`
  font-weight: bold;
  color: #373736;
  display: flex;
  justify-content: flex-start;
  padding: 0em 0 0.5em;
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
  color: #bfbfbf;
`
const UnitsCount = styled.span`
  color: white;
`
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
  /*   @media (min-width: 501px) and (max-width: 1899px) {
    margin: 6em 0 8em;
  }
  @media (max-width: 500px) {
    margin: 3em 0 5em;
  }
  @media (min-width: 1900px) {
    margin: 12em 6em 12em !important;
  } */
`

const BarSection = styled.section`
  padding: 0em 1em 2em;
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
const SetPercentage = () => {
  const start = new Date(2020, 0, 18)
  const end = new Date(2020, 1, 8)
  let todayDate = new Date()
  let value = Math.round(((todayDate - start) / (end - start)) * 100)
  console.log(value)
  return value
}
const CountdownSection = () => {
  return (
    <Section>
      <Timer>
        <Countdown date="2020-02-08T24:00:00" renderer={renderer} />
      </Timer>
      <BarSection>
        <ProgressBar
          filledBackground="linear-gradient(to right, #8dd8c3, #49deb5)"
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
    </Section>
  )
}

export default CountdownSection
