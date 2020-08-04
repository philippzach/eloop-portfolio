import React from 'react'
import styled from '@emotion/styled'
import Icon1 from '../../images/light.svg'
import Icon2 from '../../images/speaker.svg'
import Icon3 from '../../images/phone.svg'
import styles from './section.module.css'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

let style1 = {
  backgroundImage: `url(${Icon1})`,
}
let style2 = {
  backgroundImage: `url(${Icon2})`,
}
let style3 = {
  backgroundImage: `url(${Icon3})`,
}
const Paragraph = styled.p`
  line-height: 30px;
  max-width: 30em;
`
const FlexContainer = styled.div`
  display: flex;
  margin: 8em 0;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    margin: 4em 0;
  }
`

const Module1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1800px) {
    flex: 50%;
    order: 2;
  }
  @media (min-width: 1000px) and (max-width: 1800px) {
    flex: 50%;
    order: 2;
  }
`
const Module2 = styled.div`
  padding-bottom: 1.5em;
  @media (min-width: 1800px) {
    flex: 50%;
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 1000px) and (max-width: 1800px) {
    flex: 50%;
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const MapComponent = props => (
  <FlexContainer>
    <Module1>
      <Img fixed={props.data.map.childImageSharp.fixed} loading="lazy" />
    </Module1>
    <Module2>
      <h2>{props.title}</h2>
      <Paragraph>
        {props.description}{' '}
        <Link className="link-n1" to={props.link}>
          {props.linktext}
        </Link>
      </Paragraph>
      <h3>{props.subHeading}</h3>
      <Paragraph>{props.subParagraph}</Paragraph>
      <ul className={styles.features}>
        <li style={style1} className={styles.listitems}>
          {props.claim1}
        </li>
        <li style={style2} className={styles.listitems}>
          {props.claim2}
        </li>
        <li style={style3} className={styles.listitems}>
          {props.claim3}
        </li>
      </ul>
    </Module2>
  </FlexContainer>
)

export default MapComponent
