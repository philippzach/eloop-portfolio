import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Card = styled.div`
  display: grid;
  grid-template-rows: 3.5em 3em 150px 3em 255px;
  background-color: #fff;
  width: 25rem;
  border-radius: 8px;
  border-width: 0;
  box-shadow: none;
  margin: 1em 1em;
  outline: 0;
  text-align: center;
  text-decoration: none;
  transition-delay: 0s;
  transition-duration: 200ms;
  transition-property: box-shadow;
  transition-timing-function: ease-out;
  vertical-align: baseline;
  box-shadow: rgba(0, 0, 0, 0.07) 0 0 4px 0, rgba(0, 0, 0, 0.12) 0 8px 16px 0;
`
const Prices = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 15.5px;
  background-color: #4adeb5;
  color: rgb(55, 55, 54);
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Box1 = styled.div`
  padding: 0.5em;
  span,
  p {
    color: rgb(55, 55, 54);
  }
  p {
    font-size: 16px;
  }
  span {
    font-weight: 900;
    font-size: 24px;
  }
`
const Box2 = styled.div`
  padding: 0.5em 1em 0;
  background-color: #4adeb5;
  color: rgb(55, 55, 54);
`
const Car = styled.div`
  background-color: #4adeb5;
  display: flex;
  justify-content: center;
`
const Monthly = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SingleCard = props => (
  <Card>
    <Box1>
      <span>March Special</span>
      <p>24.90€ for 24 Hours*</p>
    </Box1>
    <Box2 class="box2">{props.desc}</Box2>
    <Car>
      <img src={props.image} alt="eloop small cars" loading="lazy" />
    </Car>
    <Monthly>
      <h1
        css={css`
          margin-bottom: 0;
        `}
      >
        <sup style={{ top: '-2px' }}>&euro;</sup>
        {props.price.monthly}
        <small>/mo</small>
      </h1>
    </Monthly>
    <Prices>
      <div>
        <span>Minute</span>
      </div>
      <div>
        <span>{props.price.minute}</span>
      </div>
      <div>
        <span>First Hour</span>
      </div>
      <div>
        <span>{props.price.firsthour}</span>
      </div>
      <div>
        <span>Every other Hour</span>
      </div>
      <div>
        <span>{props.price.lasthour}</span>
      </div>
      <div>
        <span>Day</span>
      </div>
      <div>
        <span>
          € 24.90 <strike>{props.price.day}</strike>
        </span>
      </div>
      <div>
        <span>Kilometer/Trip</span>
      </div>
      <div>
        <span>{props.price.kilometers}</span>
      </div>
      <div>
        <span>Unlock</span>
      </div>
      <div>
        <span>{props.price.reservation}</span>
      </div>
      <div>
        <span>Models</span>
      </div>
      <div>
        <span>{props.models}</span>
      </div>
    </Prices>
  </Card>
)

export default SingleCard
