import React from 'react'
import styled from '@emotion/styled'

import Partner1 from '../images/partner1.svg'
import Partner2 from '../images/partner2.svg'
import Partner3 from '../images/partner3.svg'
import Partner4 from '../images/partner4.png'
import Partner5 from '../images/partner5.svg'
import Partner6 from '../images/klimafonds.png'

const Container = styled.div`
  padding: 4.5em 0;
  h2 {
    text-align: center;
    margin-bottom: 2em;
  }
  section {
    @media screen and (min-width: 650px) {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    @media screen and (max-width: 649px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      align-items: center;
      justify-items: center;
    }
  }
`

const ImgContainer = styled.div`
  padding: 0 0.75em;
`
const ImgContainerLast = styled.div`
  grid-column: 1 / span 2;
`

const Partner = props => (
  <Container>
    <h2>Partners</h2>
    <section>
      <ImgContainer>
        <a href="https://wiesenthal.at/" target="blank" rel="noopener">
          <img src={Partner1} alt="eloop partner" loading="lazy" />
        </a>
      </ImgContainer>
      <ImgContainer>
        <a href="https://efs.consulting/" target="blank" rel="noopener">
          <img src={Partner2} alt="eloop partner" loading="lazy" />
        </a>
      </ImgContainer>
      <ImgContainer>
        {' '}
        <a href="https://www.klimaaktiv.at/" target="blank" rel="noopener">
          <img src={Partner3} alt="eloop partner" loading="lazy" />
        </a>
      </ImgContainer>
      <ImgContainer>
        <a
          href="https://www.dlapiper.com/de/austria/"
          target="blank"
          rel="noopener"
        >
          <img src={Partner4} alt="eloop partner" loading="lazy" />
        </a>
      </ImgContainer>
      <ImgContainer>
        <a href="/" target="blank" rel="noopener">
          <img
            src={Partner6}
            alt="eloop partner"
            loading="lazy"
            style={{ maxWidth: '100px' }}
          />
        </a>
      </ImgContainer>
      <ImgContainer>
        <a href="https://www.wienenergie.at" target="blank" rel="noopener">
          <img src={Partner5} alt="eloop partner" loading="lazy" />
        </a>
      </ImgContainer>
    </section>
    <p
      style={{
        maxWidth: '80%',
        margin: '0 auto',
        fontSize: '13px',
        textAlign: 'center',
      }}
    >
      Dieses Projekt wird aus Mitteln des Klima- und Energiefonds gefördert und
      im Rahmen des Programms „Smart Cities Demo – Living Urban Innovation 2018“
      durchgeführt.
    </p>
  </Container>
)

export default Partner
