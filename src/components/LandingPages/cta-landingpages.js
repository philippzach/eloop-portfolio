import React from 'react'
import styled from '@emotion/styled'
import styles from '../Modules/buttontarife.module.css'
import { Link } from 'gatsby'
import Container from '../Container/containerfaq'

const Text = styled.div`
  text-align: center;
  margin: 2em auto;
  max-width: 800px;
  padding: 0 1.5em;
`
const Paragraph = styled.p`
  line-height: 30px;
`
const Background = styled.div`
  padding-bottom: 2em;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2em auto;
  max-width: 800px;
`

const CallToAction = props => (
  <Background>
    <Container>
      <Text>
        <h2>{props.title}</h2>
        <Paragraph>{props.sub}</Paragraph>
      </Text>

      <ButtonContainer>
        <div style={{ textAlign: 'center' }}>
          <Link
            id="cta-pricing"
            to={props.cta1Link}
            className={[styles.button, styles.navlink].join(' ')}
          >
            <div className={styles.bottom} />
            <div className={styles.top}>
              <div className={styles.label}>{props.cta1}</div>
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
                className={[
                  styles.buttonborder,
                  styles.buttonborderbottom,
                ].join(' ')}
              />
            </div>
          </Link>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link
            id="cta-pricing"
            to={props.cta2Link}
            className={[styles.button, styles.navlink].join(' ')}
          >
            <div className={styles.bottom} />
            <div className={styles.top}>
              <div className={styles.label}>{props.cta2}</div>
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
                className={[
                  styles.buttonborder,
                  styles.buttonborderbottom,
                ].join(' ')}
              />
            </div>
          </Link>
        </div>
      </ButtonContainer>
    </Container>
  </Background>
)

export default CallToAction
