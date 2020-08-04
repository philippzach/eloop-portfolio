import React from 'react'
import styled from '@emotion/styled'

import Small from '../../images/eloop_smart_ed4.svg'
import SmallED3 from '../../images/ed3.svg'
import BMW from '../../images/bmwi3_shadow.svg'

const Button = styled.button`
  color: white;
  font-size: 0.8em;
  padding: 0.6em;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #4adeb5;
`
const ButtonContainer = styled.div`
  text-align: center;
`
const SingleContainer = styled.div``
const FullContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1em 0 3em 0;
  @media (max-width: 599px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      padding: 1.25em 0;
    }
  }
`

const Download = props => (
  <div>
    <h3>{props.headline}</h3>
    <FullContainer>
      <a href="/eloop_smart_ed4_guide.pdf" target="_blank" rel="noopener">
        <SingleContainer>
          <img style={{ marginBottom: '10px' }} src={Small} alt="" loading="lazy" />
          <ButtonContainer>
            <Button>Download</Button>
          </ButtonContainer>
        </SingleContainer>
      </a>
      <a href="/eloop_smart_ed3_guide.pdf" target="_blank" rel="noopener">
        <SingleContainer>
          <img src={SmallED3} alt="" loading="lazy" />
          <ButtonContainer>
            <Button>Download</Button>
          </ButtonContainer>
        </SingleContainer>
      </a>
      <a href="/bmw-i3-eloop-guide.pdf" target="_blank" rel="noopener">
        <SingleContainer>
          <img style={{ marginBottom: '7px' }} src={BMW} alt="" loading="lazy" />
          <ButtonContainer>
            <Button>Download</Button>
          </ButtonContainer>
        </SingleContainer>
      </a>
    </FullContainer>
  </div>
)

export default Download
