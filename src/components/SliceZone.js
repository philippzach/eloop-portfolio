import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { BodyText, Image, Quote } from './Slices'

const Content = styled.div`
  padding: 6rem 0 3rem;
  p,
  li {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 18px;
    line-height: 1.5;
  }
  blockquote {
    margin-left: 0;
    padding-left: 1.45rem;
    border-left: 2px solid black;
    p {
      font-size: 19px;
      font-style: italic;
    }
  }
  div a {
    color: black;
    text-decoration: underline;
  }
  div a:hover {
    color: #4adeb5;
  }
`

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map(s => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case 'text':
          return <BodyText key={s.id} input={s} />
        case 'image':
          return <Image key={s.id} input={s} />
        case 'quote':
          return <Quote key={s.id} input={s} />
        default:
          return null
      }
    })
    return <Content className="blogpost">{slice}</Content>
  }
}

SliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
}
