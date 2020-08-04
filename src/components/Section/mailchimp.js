import React, { Component } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import styles from '../Modules/buttontarife.module.css'
import './mailchimp.css'

const CustomForm = ({ status, message, onValidated }) => {
  let email, name
  const submit = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    })

  return (
    <div
      style={{
        padding: 10,
        display: 'inline-block',
      }}
    >
      {status === 'sending' && <div style={{ color: 'blue' }}>sending...</div>}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: '1.5em', padding: 5, marginBottom: '1em' }}
        ref={node => (name = node)}
        type="text"
        placeholder="Name"
      />
      <br />
      <input
        style={{ fontSize: '1.5em', padding: 5, marginBottom: '1em' }}
        ref={node => (email = node)}
        type="email"
        placeholder="Email Address"
      />
      <br />
      <div
        id="cta-subscribe-submit"
        onClick={submit}
        style={{ cursor: 'pointer', marginBottom: '1em' }}
        className={[styles.button, styles.navlink].join(' ')}
      >
        <div className={styles.bottom} />
        <div className={styles.top}>
          <div className={styles.label}>Anmelden</div>
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
      </div>
    </div>
  )
}

class Demo extends Component {
  render() {
    const url =
      'https://caroo.us15.list-manage.com/subscribe/post?u=3847f516d00256f75dab00f44&amp;id=3482ea6f95'
    return (
      <div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    )
  }
}

export default Demo
