import React, { useState } from 'react'
import { css, cx } from '@emotion/core'
import styled from '@emotion/styled'
import Small from '../../images/eloop_smart_ed4.svg'
import SmallED3 from '../../images/ed3.svg'
import Compact from '../../images/eloop-smallcars.svg'
import BMW from '../../images/bmwi3_shadow.svg'
import Transporter from '../../images/eloop-transporter.svg'
import Card from './card'
import CardInv from './invertedcard'
import { Premium, Basic, Investor, Empty } from './states'
import './select.css'
import Included from './included'

const SelectButton = styled.button`
  margin: 1em;
  padding: 0.5em;
`

function PricingIndex() {
  const [pricing, setPricing] = useState(Basic)

  return (
    <>
      {/*     <div
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
            subheading="2 Sitzplätze"
            desc="Mit den preiswerten Zweiplätzern passt du in jede Parklücke"
            models="Smart ED4"
            price={pricing.small}
          />
          <Card
            image={BMW}
            heading="Compact Cars"
            alt="eloop compact cars"
            subheading="4-5 Sitzplätze"
            desc="Perfekt für Ausflüge, Einkäufe & Fahrten mit Freunden & Familie"
            models="BMW i3 & Renault Zoe"
            price={pricing.compact}
          />
          <Card
            image={SmallED3}
            heading="Budget Cars"
            alt="eloop transport carshargin vienna"
            subheading="2 Sitzplätze"
            desc="Der günstige City Cruiser"
            models="Smart ED3"
            price={pricing.trans}
          />
        </div>
      </div>
      {/* <Included /> */}
    </>
  )
}

export default PricingIndex
