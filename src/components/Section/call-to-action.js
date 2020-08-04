import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import styles from '../Header/landingindex.module.css'

const Background = styled.div`
  background-color: #373736;
  text-align: center;
  color: white;
  padding: 6em 0 4em;
  margin: 4em 0 0;
  @media (min-width: 1000px) {
    margin: 4em 0 0;
  }
`
const Heading = styled.h2`
  margin-bottom: 0em;
`
const SubHeading = styled.h3`
  font-weight: 200;
  margin-top: 0;
  margin-bottom: 2em;
`
const Container = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 1.45em;
`

const font = {
  fontWeight: '700',

  marginBottom: '0.75em',
}
const Subscribe = props => (
  <Background>
    <Container>
      <Heading style={font}>{props.heading}</Heading>
    </Container>
    <SubHeading>{props.sub}</SubHeading>
    <Link
      id="cta-register"
      to={props.link ? props.link : "/register"}
      className={[styles.button, styles.navlink].join(' ')}
    >
      <div className={styles.bottom} />
      <div className={styles.top}>
        <div className={styles.label}>{props.cta}</div>
        <div
          className={[styles.buttonborder, styles.buttonborderleft].join(' ')}
        />
        <div
          className={[styles.buttonborder, styles.buttonbordertop].join(' ')}
        />
        <div
          className={[styles.buttonborder, styles.buttonborderright].join(' ')}
        />
        <div
          className={[styles.buttonborder, styles.buttonborderbottom].join(' ')}
        />
      </div>
    </Link>
  </Background>
)

export default Subscribe
