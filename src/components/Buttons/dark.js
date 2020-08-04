import React from 'react'
import { Link } from 'gatsby'
import styles from '../Modules/buttontarife.module.css'

const Button = props => (
  <Link
    id="cta-landing"
    to={props.link}
    className={[styles.button, styles.navlink].join(' ')}
  >
    <div className={styles.bottom} />
    <div className={styles.top}>
      <div className={styles.label}>{props.text}</div>
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
)

export default Button
