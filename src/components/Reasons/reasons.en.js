import React from 'react'
import styled from '@emotion/styled'
import Container from '../../components/Container/containerfaq'

import Icon1 from '../../images/lp-icon1.svg'
import Icon2 from '../../images/lp-icon2.svg'
import Icon3 from '../../images/lp-icon3.svg'
import Icon4 from '../../images/lp-icon4.svg'
import Icon5 from '../../images/lp-icon5.svg'
import Icon6 from '../../images/lp-icon6.svg'

const Reasons = styled.div`
  background-color: #373736;
  padding: 3em 0;
`
const White = styled.h3`
  color: white;
  padding-top: 0.5em;
`
const WhiteParagraph = styled.p`
  padding-right: 1.5em !important;
  color: white;
  padding-right: 1.5em;
`
const Third = styled.div`
  @media (min-width: 769px) {
    width: 33%;
    padding: 1em;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 50%;
    padding: 1em;
  }
`
const WhiteHeading = styled.h2`
  color: white;
  font-weight: 300;
  font-size: 2.25em;
  text-align: center;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
`
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
`

const ReasonsEn = () => (
  <Reasons>
    <Container>
      <WhiteHeading>Unbeatable all-in pricing</WhiteHeading>
      <FlexWrap>
        <Third>
          <img src={Icon1} alt=" Icon" loading="lazy" />
          <White>Charging</White>
          <WhiteParagraph>
            
You can load  our e-cars at all Wien Energie charging stations in Vienna
            for free. The charging card is in the car.
          </WhiteParagraph>
        </Third>
        <Third>
          <img src={Icon2} alt=" Icon" loading="lazy" />
          <White>Parking</White>
          <WhiteParagraph>
            
The e-cars can be parked in public parking lots &
             short-term parking zones for free.
          </WhiteParagraph>
        </Third>
        <Third>
          <img src={Icon3} alt=" Icon" loading="lazy" />
          <White>Insurance</White>
          <WhiteParagraph>
          All Eloop cars are fully insured. For 1€ you can the
            halve the deductible before a trip.
          </WhiteParagraph>
        </Third>
        <Third>
          <img src={Icon4} alt=" Icon" loading="lazy" />
          <White>200km inkl.</White>
          <WhiteParagraph>
          The first 200km are on us. Every other kilometer driven
            costs only 27 cents.
          </WhiteParagraph>
        </Third>
        <Third>
          <img src={Icon5} alt=" Icon" loading="lazy" />
          <White>AUT Vignette</White>
          <WhiteParagraph>
            
The entire fleet is equiped with vignettes for the Austrian
            freeway.
          </WhiteParagraph>
        </Third>
        <Third>
          <img src={Icon6} alt=" Icon" loading="lazy"/>
          <White>Cleaning</White>
          <WhiteParagraph>
           
Our staff takes care that the cars are always
            in sparkling conditions.
          </WhiteParagraph>
        </Third>
      </FlexWrap>
    </Container>
  </Reasons>
)

export default ReasonsEn
