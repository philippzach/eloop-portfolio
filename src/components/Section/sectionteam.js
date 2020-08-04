import React from 'react'
import { Img } from 'gatsby-image'

import styled from '@emotion/styled'
import Leroy from '../../images/leroyhofer.jpg'
import Nico from '../../images/nicoprugger.jpg'
import Fredi from '../../images/fredericnachbauer.jpg'
import Elias from '../../images/eliasoender.jpg'
import Werner from '../../images/werneregger.jpg'
import Philipp from '../../images/philippzach.jpg'
import Heinz from '../../images/heinzweber.jpg'
import Hazem from '../../images/hazem.jpg'
import Max from '../../images/maxschalkhammer.jpg'
import Andreas from '../../images/andreasivanschitz.jpg'
import Kathi from '../../images/kathi_new.jpg'
import Figerl from '../../images/kfigerl.jpg'

const Linkedin = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    style={{
      marginLeft: '5px',
    }}
  >
    <path
      fill="white"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    />
  </svg>
)

const Background = styled.div`
  background-color: #363637;
`
const Row = styled.div`
  display: flex;
  padding: 4em 32px 16px;
  flex-wrap: wrap;
  @media (min-width: 700px) {
    justify-content: flex-start;
    align-items: stretch;
  }
`
const Container = styled.div`
  margin: 0% 1%;
  @media (min-width: 1800px) {
    margin: 0 10%;
  }
  @media (min-width: 2200px) {
    margin: 0 15%;
  }
`
const Link = styled.a`
  text-align: center;
  text-decoration: none;
`

const Item = styled.div`
  display: flex;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1 0 40%;

  @media (min-width: 700px) {
    flex: 1 0 18%;
    justify-content: center;
  }
`
const Scope = styled.p`
  color: white;
  margin-bottom: 0;
  font-weight: 700;
  text-align: center;
  font-size: 13px;
`
const Name = styled.p`
  color: white;
  text-align: center;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
`
const Image = styled.img`
  border-radius: 999px;
  display: flex;
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
`

const TeamSection = () => (
  <Background>
    <Container>
      <Row>
        <Item>
          <Image src={Leroy} alt="" />
          <Link href="https://www.Linkin.com/in/leroy-hofer-5b896913b/">
            <Scope>CEO/Co-Founder</Scope>
            <Name>Leroy Hofer {Linkedin}</Name>
          </Link>
        </Item>
        <Item>
          <Image src={Nico} alt="" />
          <Link href="https://www.linkedin.com/in/nico-prugger-62796913b/">
            <Scope>CEO/Co-Founder</Scope>
            <Name>Nico Prugger {Linkedin}</Name>
          </Link>
        </Item>
        <Item>
          <Image src={Fredi} alt="" />
          <Link href="https://www.linkedin.com/in/frederic-nachbauer/">
            <Scope>CTO/Co-Founder</Scope>
            <Name>Frederic Nachbauer {Linkedin}</Name>
          </Link>
        </Item>
        <Item>
          <Image src={Max} alt="" />
          <Link href="https://www.linkedin.com/in/maximilian-schalkhammer-0b4528127/">
            <Scope>Fleet Manager</Scope>
            <Name>Max Schalkhammer {Linkedin}</Name>
          </Link>
        </Item>
        <Item>
          <Image src={Figerl} alt="" />
          <Link href="https://www.linkedin.com/in/kathrin-figerl-7800b8197/?originalSubdomain=at">
            <Scope>Head of Content Marketing</Scope>
            <Name>Kathrin Figerl {Linkedin}</Name>
          </Link>
        </Item>
        <Item>
          <Image src={Philipp} alt="" />
          <Link href="https://www.linkedin.com/in/philipp-zach-078059120/">
            <Scope>Head of Growth Marketing</Scope>
            <Name>Philipp Zach {Linkedin}</Name>
          </Link>
        </Item>
        <Item>
          <Image src={Hazem} alt="" />
          <Scope>Logistics/Operations</Scope>
          <Name>Hazem Kasabji</Name>
        </Item>

        <Item>
          <Image src={Elias} alt="" />
          <Link href="https://www.linkedin.com/in/oender/">
            <Scope>Marketing Advisor & Co-Founder</Scope>
            <Name>Elias Önder {Linkedin}</Name>
          </Link>
        </Item>
        <Item>
          <Image src={Kathi} alt="" />
          <Link href="https://www.linkedin.com/in/katharinalutter/">
            <Scope>Brand Advisor</Scope>
            <Name>Katharina Lutter {Linkedin}</Name>
          </Link>
        </Item>
        <Item>
          <Image src={Andreas} alt="" />
          <Link href="https://www.linkedin.com/in/andreas-ivanschitz-306736122/">
            <Scope>Partner/Ambassador</Scope>
            <Name>Andreas Ivanschitz {Linkedin}</Name>
          </Link>
        </Item>
        <Item>
          <Image src={Heinz} alt="" />
          <Scope>Partner/Advisor</Scope>
          <Name>Heinz Weber</Name>
        </Item>
        <Item>
          <Image src={Werner} alt="" />
          <Scope>Partner</Scope>
          <Name>Werner Egger</Name>
        </Item>
      </Row>
    </Container>
  </Background>
)

export default TeamSection
