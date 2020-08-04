import React from 'react'
import Logo from './logo.svg'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

const LogoNav = props => (
  <div className={styles._38GougRNE8}>
    <Link to="/">
      <img
        className={styles.logo}
        src={Logo}
        alt="ELoop Carsharing Logo"
        width="105px"
        loading="lazy"
      />
    </Link>
  </div>
)

export default LogoNav
