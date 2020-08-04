import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import './tarife.css'
import Pricing from '../Pricing/indexen'
import styles from '../Modules/buttontarife.module.css'
import IconTick from '../../images/tick.svg'
import IconCard from '../../images/card.svg'

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
/* const Text = styled.div`
  text-align: center;
  margin: 2em 0 2em;
`
const Paragraph = styled.p`
  line-height: 30px;
`

const Additional = styled.div`
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

const TarifeEn = () => (
  <div>
    <TopHead>
      <h2>You can choose between 3 models:</h2>
    </TopHead>
    <Pricing />

    <Terms>
      You can find more information about our services in our{' '}
      <a
        target="blank"
        rel="noopener noreferrer"
        href="https://prismic-io.s3.amazonaws.com/eloop/6c97b3b3-f7e1-4390-a634-6d7c2f9e2065_Eloop+AGB.pdf"
      >
        Terms & Conditions
      </a>{' '}
      and{' '}
      <a href="/preisliste.pdf" target="_blank" rel="noopener">
        Pricelist.
      </a>
      <p>
        <b>*</b> If the car is returned with less then 90% battery power an
        additional amount of 10€ will be charged.
      </p>
    </Terms>
  </div>
)

export default TarifeEn
