import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 900px;
  margin: 1em auto !important;
  box-shadow: rgba(0, 0, 0, 0.15) 0 0 5px 0;
  display: flex;
  flex-direction: column-reverse;
  border-radius: 10px;
  margin: 2em;
  padding: 2em;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`
const Image = styled.div`
  width: 100%;
  @media (min-width: 800px) {
    width: 30%;
  }
`
const Text = styled.div`
  width: 100%;
  padding-bottom: 0.5em;
  @media (min-width: 800px) {
    width: 70%;
    padding-left: 2em;
   
  }
`
const Heading = styled.h3``
const Paragraph = styled.p`
  font-weight: 400;
  line-height: 1.35em;
`
const Name = styled.span`
  color: #8e8e8e;
  font-size: 0.9em;
  padding-bottom: 0.5em;
`

const slide = props => (
  <Container>
    <Image>
      <Img fluid={props.data} loading="lazy"/>
    </Image>
    <Text>
      <Heading>{props.title}</Heading>
      <Paragraph>{props.description}</Paragraph>
      <Name>{props.name}</Name>
    </Text>
  </Container>
)

export default slide
