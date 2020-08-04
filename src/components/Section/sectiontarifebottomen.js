import React from 'react'
import styled from '@emotion/styled'
import styles from '../Header/landingindex.module.css'
import { Link } from 'gatsby'
import Container from '../Container/containerfaq'

const Text = styled.div`
  text-align: center;
  margin: 2em 0 2em;
  color: white;
`
const Paragraph = styled.p`
  line-height: 30px;
  color: white;
`
const Background = styled.div`
  padding-top: 2em;
  background-color: #363637;
`

const CallToAction = () => (
  <Background>
    <Container>
      <Text>
        <h2>Always drive with the best price. Guaranteed!</h2>
        <Paragraph>
          Not sure how long you need the vehicle? No problem!
          <br />
          The fare will switch to the cheapest option as you drive.
        </Paragraph>
      </Text>
      <div style={{ textAlign: 'center' }}>
        <Link
          id="cta-pricing"
          to="/install"
          className={[styles.button, styles.navlink].join(' ')}
        >
          <div className={styles.bottom} />
          <div className={styles.top}>
            <div className={styles.label}>Register Now</div>
            <div
              className={[styles.buttonborder, styles.buttonborderleft].join(
                ' '
              )}
            />
            <div
              className={[styles.buttonborder, styles.buttonbordertop].join(
                ' '
              )}
            />
            <div
              className={[styles.buttonborder, styles.buttonborderright].join(
                ' '
              )}
            />
            <div
              className={[styles.buttonborder, styles.buttonborderbottom].join(
                ' '
              )}
            />
          </div>
        </Link>
      </div>
    </Container>
  </Background>
)

export default CallToAction
