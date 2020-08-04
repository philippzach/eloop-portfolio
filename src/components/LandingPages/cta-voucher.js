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
  h2 {
    line-height: 1.45em;
  }
`
const ParaCon = styled.div`
max-width: 780px;
margin: 0 auto;
text-align: center;

`
const Paragraph = styled.p`
  line-height: 30px;
`
const Background = styled.div`
 padding: 4em 0 6em;
`

const CallToAction = props => (
  <Background>
    <Container>
     <Text>
        <h2>{props.title}</h2>
        <Paragraph>{props.sub}</Paragraph>
      </Text>
      <ParaCon>

        <Paragraph>
        {props.text}
        </Paragraph>
        </ParaCon>
        <div style={{ textAlign: 'center' }}>
        <Link
          id="cta-pricing"
          to={props.link1}
          className={[styles.button, styles.navlink].join(' ')}
        >
          <div className={styles.bottom} />
          <div className={styles.top}>
            <div className={styles.label}>{props.text1}</div>
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
        <div style={{ textAlign: 'center' }}>
        <Link
          id="cta-pricing"
          to={props.link2}
          className={[styles.button, styles.navlink].join(' ')}
        >
          <div className={styles.bottom} />
          <div className={styles.top}>
            <div className={styles.label}>{props.text2}</div>
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
