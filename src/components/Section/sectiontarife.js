import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Pricing from '../Pricing/index.js'
import './tarife.css'
//import IconTick from '../../images/tick.svg'
//import IconCard from '../../images/card.svg'

const Terms = styled.p`
  text-align: center;
  margin-bottom: 3em;
  font-size: 0.8em;
  line-height: 1.5em;
  padding-top: 1.45em;
  a {
    color: black;
    text-decoration: underline;
  }
`
const TopHead = styled.div`
  text-align: center;
  padding-top: 2em;
  h2 {
    margin-bottom: 0;
  }
`
/* const Additional = styled.div`
  display: flex;
  justify-content: center;
  div {
    padding: 2em;
  }
  div ol {
    padding-left: 0;
  }
  div ol li {
    font-size: 0.9em;
  }
`
const ListItem = styled.li`
  background-image: url(${IconTick});
  background-position: 0.25em center;
  background-repeat: no-repeat;
  padding-left: 2.5em;
  background-size: 1em;
  display: block;
  margin-top: 10px;
  line-height: 1.5em;
`
const ListItemCard = styled.li`
  background-image: url(${IconCard});
  background-position: 0.25em center;
  background-repeat: no-repeat;
  padding-left: 2.5em;
  background-size: 1em;
  display: block;
  margin-top: 10px;
  line-height: 1.5em;
` */

const Tarife = () => (
  <div>
    <TopHead>
      <h2>Wir haben 3 Modelle zur Auswahl:</h2>
    </TopHead>
    <Pricing />
    <Terms>
      Weitere Infos zu unserem Service findest du in den{' '}
      <a
        target="blank"
        rel="noopener noreferrer"
        href="https://prismic-io.s3.amazonaws.com/eloop/6c97b3b3-f7e1-4390-a634-6d7c2f9e2065_Eloop+AGB.pdf"
      >
        Allgemeinen Geschäftsbedingungen
      </a>{' '}
      und in unserer umfassenden{' '}
      <a href="/preisliste.pdf" target="_blank" rel="noopener">
        Preisliste.
      </a>
      <p>
        <b>*</b> Wenn das Auto wieder mit mindestens 90% Akkustand abgestellt
        wird. Sonst werden zum Tagespreis €10 addiert
      </p>
    </Terms>
  </div>
)

export default Tarife
