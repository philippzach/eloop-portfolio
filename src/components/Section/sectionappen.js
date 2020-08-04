import React from 'react'
import { Link } from 'gatsby'
//import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Mockup from './sectionscreenmock'
import Icon1 from '../../images/pin.svg'
import Icon2 from '../../images/calendar.svg'
import Icon3 from '../../images/lock.svg'
import styles from './section.module.css'
import Appstore from '../Header/appstore.svg'
import Playstore from '../Header/playstore.svg'
import BackgroundApp from '../../images/backgroundapp.png'
import BackgroundMobile from '../../images/backgroundapp-mobile-sm.png'

let style1 = {
  backgroundImage: `url(${Icon1})`,
}
let style2 = {
  backgroundImage: `url(${Icon2})`,
}
let style3 = {
  backgroundImage: `url(${Icon3})`,
}
const Paragraph = styled.p`
  line-height: 30px;
  max-width: 30em;
`

const Background = styled.div`
  @media (min-width: 601px) {
    background-image: url(${BackgroundApp});
    background-position: center;
    padding: 7em 0;
  }
  @media (max-width: 600px) {
    background-image: url(${BackgroundMobile});
    background-position: center;
    padding: 3em;
  }
`

const SectionApp = () => (
  <div className={styles.approw}>
    <Background className={styles.appmodule1}>
      <Mockup />
    </Background>
    <div className={styles.appmodule2}>
      <h2>Our App</h2>
      <Paragraph>
        {' '}
        Use the ELOOP app to effortlessly locate a vehicle. That's all it takes
        to drive clean & easy through the city.
      </Paragraph>
      <ul className={styles.features}>
        <li style={style1} className={styles.listitems}>
          Find ELOOP cars in your area
        </li>
        <li style={style2} className={styles.listitems}>
          Reserve your ELOOP vehicle for no charge
        </li>
        <li style={style3} className={styles.listitems}>
          Unlock your car from within the App
        </li>
      </ul>
      <div className={styles.appstore}>
        <a
          id="cta-appstore"
          href="itms-apps://apps.apple.com/us/app/eloop-elektrisches-carsharing/id1465221970?ls=1s"
        >
          <img
            className={styles.appbutton}
            src={Appstore}
            alt="Download Eloop App on Apple Appstore"
            loading="lazy"
          />
        </a>
        <a
          id="cta-playstore"
          href="https://play.google.com/store/apps/details?id=com.vulog.carshare.eloop"
        >
          <img
            className={styles.appbutton}
            src={Playstore}
            alt="Download Eloop App on Google Playstore"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </div>
)

export default SectionApp
