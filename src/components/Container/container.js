import React from 'react'
import styled from '@emotion/styled'

const Style = styled.div`
  margin: -6% 0;
  @media (max-width: 600px) {
    margin: 0;
  }
`

const Container = ({ children }) => <Style>{children}</Style>

export default Container
