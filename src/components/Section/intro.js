import React from 'react'
import styled from '@emotion/styled'
import stylesheet from './intro.module.css'
import Icon1 from '../../images/icon1.svg'
import Icon2 from '../../images/icon2.svg'
import Icon3 from '../../images/icon3.svg'

let styles = {
  marginTop: '1em',
  fontWeight: '500',
}
let desktopmargin = {
  margin: '0 1em 0',
}
const Paragraph = styled.p`
  line-height: 1.5rem;
`

const Intro = () => (
  <section className={stylesheet.maxwidth}>
    <div className={stylesheet.white}>
      <h2 style={{ marginBottom: '3rem' }}>So funktioniert's</h2>
      <div className={stylesheet.containerintro}>
        <div style={desktopmargin}>
          <img src={Icon1} title="" alt="" loading="lazy" />
          <h3 style={styles}>1. Get the App</h3>
          <Paragraph>
            Lade dir die ELOOP-App für dein Smart Device herunter. Die
            Registrierung dauert nur wenige Minuten und dann kann es schon
            losgehen.
          </Paragraph>
        </div>
        <div style={desktopmargin}>
          <img src={Icon2} title="" alt="" loading="lazy" />
          <h3 style={styles}>2. Get your E-Car</h3>
          <Paragraph>
            Bezahlt wird mit Kreditkarte. Im Preis sind alle Kosten inkludiert.
            Wer oft fährt, kann sich den Premium-Tarif sichern und damit noch
            günstiger von A nach B kommen.
          </Paragraph>
        </div>
        <div style={desktopmargin}>
          <img src={Icon3} title="" alt="" loading="lazy" />
          <h3 style={styles}>3. Finish your Trip</h3>
          <Paragraph>
            Wenn du gefahren bist, dann suche dir einfach einen freien Parkplatz
            und stell das E-Car ab. Beende die Fahrt noch in der App und das
            war’s schon.
          </Paragraph>
        </div>
      </div>
    </div>
  </section>
)

export default Intro
