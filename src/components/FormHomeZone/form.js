import React from 'react'
import { navigate } from 'gatsby'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <form
        name="homezone"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success/"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="homezone" value="contact-form" />
        <p>
          <label>
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Absenden</button>
        </p>
      </form>
    </div>
  )
}
