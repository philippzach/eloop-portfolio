import React, { useState } from 'react'
import { css, cx } from '@emotion/core'
import styled from '@emotion/styled'
import Small from '../../images/eloop_smart_ed4.svg'
import SmallED3 from '../../images/ed3.svg'
import Compact from '../../images/eloop-smallcars.svg'
import BMW from '../../images/bmwi3_shadow.svg'
import Transporter from '../../images/eloop-transporter.svg'
import Card from './carden'
import CardInv from './invertedcarden'
import { Premium, Basic, Investor, Empty } from './states'
import './select.css'
import Included from './includeden'

const SelectButton = styled.button`
  margin: 1em;
  padding: 0.5em;
`

function PricingIndexEn() {
  const [pricing, setPricing] = useState(Basic)

  return (
    <>
      {/*   <div
        css={css`
          text-align: center;
          margin-top: 2em;
        `}
      >
        <SelectButton
          className={'select' + (pricing == Basic ? ' ' + 'is-active' : '')}
          onClick={e => setPricing(Basic)}
        >
          Basic
        </SelectButton>
        <SelectButton
          className={'select' + (pricing == Premium ? ' ' + 'is-active' : '')}
          onClick={e => setPricing(Premium)}
        >
          Premium
        </SelectButton>
        <SelectButton
          className={'select' + (pricing == Investor ? ' ' + 'is-active' : '')}
          onClick={e => setPricing(Investor)}
        >
          Investor
        </SelectButton>
      </div> */}
      <div>
        <div class="wrapper-card">
          <Card
            image={Small}
            heading="Small Cars"
            alt="eloop small cars"
            subheading="2 Seats"
            desc="The affortable 2-seaters fit in every parking space"
            models="Smart ED4"
            price={pricing.small}
          />
          <Card
            image={BMW}
            heading="Compact Cars"
            alt="eloop compact cars"
            subheading="4-5 Seats"
            desc="Perfect for excursions, shopping & trips with family & friends"
            models="BMW i3 & Renault Zoe"
            price={pricing.compact}
          />
          <Card
            image={SmallED3}
            heading="Budget Cars"
            alt="eloop transport carshargin vienna"
            subheading="2 Seats"
            desc="Our cheapest option for every city need"
            models="Smart ED3"
            price={pricing.trans}
          />
        </div>
      </div>
      {/*  <Included /> */}
    </>
  )
}

export default PricingIndexEn
