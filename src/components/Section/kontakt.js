import React from 'react'
import { css, cx } from '@emotion/core'
import './kontakt.css'
import styles from '../Modules/buttontarife.module.css'
import Call from '../../images/contact-call.svg'
import Chat from '../../images/contact-chat.svg'

const Kontakt = props => (
  <div className="maincontainer">
    <div className="containercontact">
      <img
        src={Call}
        alt="eloop carsharing contact us emergency"
        loading="lazy"
        css={css`
          padding: 1.5em 0;
        `}
      />
      <h2>{props.leftheading}</h2>
      <h4
        css={css`
          font-weight: 300;
          line-height: 1.5em;
        `}
      >
        {props.leftpara}
      </h4>
      <a
        id="cta-call"
        href="tel:+43720778234"
        className={[styles.button, styles.navlink].join(' ')}
      >
        <div className={styles.bottom} />
        <div className={styles.top}>
          <div className={styles.label}>+43 720 778234</div>
          <div
            className={[styles.buttonborder, styles.buttonborderleft].join(' ')}
          />
          <div
            className={[styles.buttonborder, styles.buttonbordertop].join(' ')}
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
      </a>
    </div>
    <div className="containercontact">
      <img
        loading="lazy" 
        src={Chat}
        alt="eloop carsharing chat with us"
        css={css`
          padding: 1.5em 0;
        `}
      />
      <h2>{props.rightheading}</h2>
      <h4
        css={css`
          font-weight: 300;
          line-height: 1.5em;
        `}
      >
        {props.rightpara}
      </h4>
      <a
        href="javascript:talkus('open')"
        id="cta-chat"
        className={[styles.button, styles.navlink].join(' ')}
      >
        <div className={styles.bottom} />
        <div className={styles.top}>
          <div className={styles.label}>Start a chat</div>
          <div
            className={[styles.buttonborder, styles.buttonborderleft].join(' ')}
          />
          <div
            className={[styles.buttonborder, styles.buttonbordertop].join(' ')}
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
      </a>
    </div>
  </div>
)

export default Kontakt
