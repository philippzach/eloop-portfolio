import React from 'react'
import { Link } from 'gatsby'
import LayoutIndex from '../layouts/de'
import Container from '../components/Container/containerblog'

const NotFoundPage = () => (
  <LayoutIndex>
    <Container>
      <h1 style={{ marginTop: '3em' }}>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go Back</Link>
    </Container>
  </LayoutIndex>
)

export default NotFoundPage
