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

const ReasonsDE = () => (
  <Reasons>
    <Container>
      <WhiteHeading>Alles im Preis inbegriffen</WhiteHeading>
      <FlexWrap>
        <Third>
          <img src={Icon1} alt=" Icon" loading="lazy"/>
          <White>Laden</White>
          <WhiteParagraph>
            Du kannst unsere E-Autos an allen Wien Energie Ladestation in Wien
            gratis laden. Die Ladekarte ist im Auto.
          </WhiteParagraph>
        </Third>
        <Third>
          <img src={Icon2} alt=" Icon" loading="lazy"/>
          <White>Parken</White>
          <WhiteParagraph>
            Die E-Cars kannst du an öffentlichen Parkplätzen & auch in
            Kurzparkzonen gratis abstellen.
          </WhiteParagraph>
        </Third>
        <Third>
          <img src={Icon3} alt=" Icon" loading="lazy"/>
          <White>Versicherung</White>
          <WhiteParagraph>
            Alle Eloop-Autos sind vollkaskoversichert. Für 1€ kannst du den
            Selbstbehalt vor einer Fahrt halbieren.
          </WhiteParagraph>
        </Third>
        <Third>
          <img src={Icon4} alt=" Icon" loading="lazy"/>
          <White>200km inkl.</White>
          <WhiteParagraph>
            Die ersten 200km gehen auf uns. Jeder weiteren gefahrene Kilometer
            kostet nur 27 Cent.
          </WhiteParagraph>
        </Third>
        <Third>
          <img src={Icon5} alt=" Icon" loading="lazy"/>
          <White>AUT Vignette</White>
          <WhiteParagraph>
            Die gesamte Flotte ist mit Vignetten für die österreichische
            Autobahn ausgetattet.
          </WhiteParagraph>
        </Third>
        <Third>
          <img src={Icon6} alt=" Icon" loading="lazy" />
          <White>Reinigung</White>
          <WhiteParagraph>
            Unsere Mitarbeiter kümmern sich darum, dass die Autos immer
            blitzeblank sind.
          </WhiteParagraph>
        </Third>
      </FlexWrap>
    </Container>
  </Reasons>
)

export default ReasonsDE
