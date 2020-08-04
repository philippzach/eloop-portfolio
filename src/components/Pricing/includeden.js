import React from 'react'
import styled from '@emotion/styled'
import Charge from '../../images/charge.svg'
import Parking from '../../images/parking.svg'
import Insurance from '../../images/insurance.svg'
import Vignette from '../../images/vignette.svg'
import Phone from '../../images/phonecharge.svg'
import Register from '../../images/register.svg'
import Container from '../../components/Container/containerfaq'

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
  text-align: center;
  margin-top: 3.5em;
  margin-bottom: 3.5em;
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`

const Item = styled.div``

const Heading = styled.h4`
  margin-top: 0.75em;
  font-size: 1.25em;
  font-weight: 300;
`

const Paragraph = styled.p`
  font-size: 0.9em;
  font-weight: 300;
  line-height: 1.5em;
`

const Included = () => (
  <Container>
    <Row>
      <Item>
        <img src={Charge} alt="" loading="lazy" />
        <Heading>Free Charging</Heading>
        <Paragraph>
          Charging on any Wien Energie Charging Stations is free. The payment
          card is inside the car.
        </Paragraph>
      </Item>
      <Item>
        <img src={Parking} alt="" loading="lazy" />
        <Heading>Free Parking</Heading>
        <Paragraph>
          Park your E-car on any public parking space in Vienna, even in the
          blue zone.
        </Paragraph>
      </Item>
      <Item>
        <img src={Insurance} alt="" loading="lazy" />
        <Heading>Collision Damage</Heading>
        <Paragraph>
          Every ELOOP car has collision damage insurance. You can opt in for 1€
          before every trip, that will half your deductible.
        </Paragraph>
      </Item>
      <Item>
        <img src={Vignette} alt="" loading="lazy" />
        <Heading>Highway toll sticker</Heading>
        <Paragraph>
          The whole ELOOP fleet is ready to be taken to the highway.
        </Paragraph>
      </Item>
      <Item>
        <img src={Phone} alt="" loading="lazy" />
        <Heading>Phone Charger</Heading>
        <Paragraph>
          Almost out of battery? Every Car is equiped with a multi-port chargin
          cable.
        </Paragraph>
      </Item>
      <Item>
        <img src={Register} alt="" loading="lazy" />
        <Heading>Registration</Heading>
        <Paragraph>We charge a one-time registration fee of 19€.</Paragraph>
      </Item>
    </Row>
  </Container>
)

export default Included
