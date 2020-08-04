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
        <Heading>Gratis Laden</Heading>
        <Paragraph>
          Du kannst unsere E-Autos an allen Wien Energie Ladestation in Wien
          gratis laden. Die Ladekarte ist im Auto.
        </Paragraph>
      </Item>
      <Item>
        <img src={Parking} alt="" loading="lazy" />
        <Heading>Gratis Parken</Heading>
        <Paragraph>
          Die E-Cars kannst du an öffentlichen Parkplätzen & auch in
          Kurzparkzonen in Wien gratis abstellen.
        </Paragraph>
      </Item>
      <Item>
        <img src={Insurance} alt="" loading="lazy" />
        <Heading>Vollkasko</Heading>
        <Paragraph>
          Alle Eloop-Autos sind vollkaskoversichert. Für 1€ kannst du den
          Selbstbehalt vor einer Fahrt halbieren.
        </Paragraph>
      </Item>
      <Item>
        <img src={Vignette} alt="" loading="lazy" />
        <Heading>Vignette an Board</Heading>
        <Paragraph>
          Die gesamte Flotte ist mit Vignetten für die österreichische Autobahn
          ausgetattet.
        </Paragraph>
      </Item>
      <Item>
        <img src={Phone} alt="" loading="lazy" />
        <Heading>Ladegerät</Heading>
        <Paragraph>
          Wird der Handyakku knapp? Wir haben ein Multi-Ladekabel in den Autos.
        </Paragraph>
      </Item>
      <Item>
        <img src={Register} alt="" loading="lazy" />
        <Heading>Registrierung</Heading>
        <Paragraph>
          Wir verrechnen eine einmalige Registrierungsgebühr von 19€.
        </Paragraph>
      </Item>
    </Row>
  </Container>
)

export default Included
