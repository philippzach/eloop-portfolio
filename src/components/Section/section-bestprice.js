import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Mockup from './sectionscreenmock'
import Icon1 from '../../images/distance.svg'
import Icon2 from '../../images/parking-1.svg'
import Icon3 from '../../images/lamp.svg'
import styles from './section.module.css'
import BackgroundApp from '../../images/backgroundapp.png'
import BackgroundMobile from '../../images/backgroundapp-mobile-sm.png'

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
  margin-top: 5em;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

const Module1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    padding-bottom: 4em;
  }
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
const PriceBox = styled.section`
  padding: 1em;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 7px 0;
  border: rgba(0, 0, 0, 0) solid 0px;
`
const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding: 1.45em 0 0;
`
const From = styled.span`
  color: #3bd9aa;
  font-size: 1em;
  padding-right: 0.4em;
`
const Price = styled.span`
  color: #3bd9aa;
  font-size: 2.3em;
  padding-right: 0.3em;
`
const Units = styled.span`
  font-size: 1.2em;
`
const SvgDesktop = styled.svg`
  @media (max-width: 600px) {
    display: none;
  }
`
const SvgMobile = styled.svg`
  @media (min-width: 599px) {
    display: none;
  }
`

const BestPrice = props => (
  <FlexContainer>
    <Module1>
      <PriceBox>
        <PriceContainer>
          <From>{props.from}</From>
          <Price>12</Price>
          <Units>{props.minute}</Units>
        </PriceContainer>
        <SvgMobile
          width="286px"
          height="1px"
          viewBox="0 0 286 1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="square"
          >
            <g
              id="Desktop-Web"
              transform="translate(-933.000000, -2119.000000)"
              stroke="#BABABA"
            >
              <path d="M933.5,2119.5 L1217.53571,2119.5" id="Line-2"></path>
            </g>
          </g>
        </SvgMobile>
        <SvgDesktop
          width="444px"
          height="1px"
          viewBox="0 0 444 1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="square"
          >
            <g
              id="Desktop-Web"
              transform="translate(-775.000000, -2119.000000)"
              stroke="#BABABA"
            >
              <path
                d="M776.464286,2119.5 L1217.53571,2119.5"
                id="Line-2"
              ></path>
            </g>
          </g>
        </SvgDesktop>
        <PriceContainer>
          <From>{props.from}</From>
          <Price>2,12</Price>
          <Units>{props.hour}</Units>
        </PriceContainer>
        <SvgMobile
          width="286px"
          height="1px"
          viewBox="0 0 286 1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="square"
          >
            <g
              id="Desktop-Web"
              transform="translate(-933.000000, -2119.000000)"
              stroke="#BABABA"
            >
              <path d="M933.5,2119.5 L1217.53571,2119.5" id="Line-2"></path>
            </g>
          </g>
        </SvgMobile>
        <SvgDesktop
          width="444px"
          height="1px"
          viewBox="0 0 444 1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="square"
          >
            <g
              id="Desktop-Web"
              transform="translate(-775.000000, -2119.000000)"
              stroke="#BABABA"
            >
              <path
                d="M776.464286,2119.5 L1217.53571,2119.5"
                id="Line-2"
              ></path>
            </g>
          </g>
        </SvgDesktop>
        <PriceContainer>
          <From>{props.from}</From>
          <Price>49,90</Price>
          <Units>{props.day}</Units>
        </PriceContainer>
      </PriceBox>
    </Module1>
    <Module2>
      <h2>{props.title}</h2>
      <Paragraph>
        {props.description}{' '}
        <Link className="link-n1" to={props.link}>
          {props.linktext}
        </Link>
      </Paragraph>
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

export default BestPrice
