import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Graphic from '../../images/co2black.svg'
import Icon1 from '../../images/carc02.svg'
import Icon2 from '../../images/tree.svg'
import Icon3 from '../../images/beer.svg'

const api_url = 'https://api-endpoint.eloop.at/infos'

let style1 = {
  backgroundImage: `url(${Icon1})`,
}
let style2 = {
  backgroundImage: `url(${Icon2})`,
}
let style3 = {
  backgroundImage: `url(${Icon3})`,
}

const Background = styled.section`
  background-color: #302d2f;
`
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2em;
`
const Headline = styled.div`
  padding: 3em 0;
  text-align: center;
  color: white;
`
const NumberCo2 = styled.h3`
  color: #b6ffe0;
  font-size: 4em;
  font-weight: 500;
  @media (max-width: 700px) {
    text-align: center;
    padding-top: .75em;
  }
`
const Fifty = styled.div`
  width: 100%;
  @media (min-width: 701px) {
    width: 50%;
  }
`
const FiftyText = styled.div`
  width: 100%;
  flex-direction: column;
  @media (min-width: 701px) {
    width: 50%;
    display: flex;
    padding-left: 1em;
  }
`
const Features = styled.ul`
  padding-left: 0;
`
const ListItems = styled.li`
  background-position: 0.25em center;
  background-repeat: no-repeat;
  padding-left: 2.5em;
  background-size: 1em;
  display: block;
  margin-top: 10px;
  line-height: 1.5em;
  color: white;
`
const Paragraph = styled.p`
  color: white;
  margin-bottom: 0.2em;
`

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 4em;
  @media (min-width: 701px) {
    flex-direction: row;
  }
`
const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      const items = data
      setData(items)
      setLoading(false)
    }
    fetchData()
  }, [])
  return { data, loading }
}

function C02(props) {
  const { data, loading } = useFetch(api_url)
  function RenderTo() {
    if (data.drivenTotal) {
      return (
        <NumberCo2>{Math.ceil(data.drivenTotal * 3.3 * 0.165)} kg</NumberCo2>
      )
    } else return 'Data not available'
  }
  function earth() {
    if (data.drivenTotal) {
      return <span>{((data.drivenTotal * 3.3) / 40075).toFixed(2)}</span>
    } else return 'Data not available'
  }
  function tree() {
    if (data.drivenTotal) {
      return (
        <span>{Math.ceil(((data.drivenTotal * 3.3 * 0.165) / 1000) * 80)}</span>
      )
    } else return 'Data not available'
  }
  function beer() {
    if (data.drivenTotal) {
      return (
        <span>
          {(Math.ceil(data.drivenTotal * 3.3 * 0.165 * 200) / 1000000).toFixed(
            2
          )}
        </span>
      )
    } else return 'Data not available'
  }
  return (
    <Background>
      <Container>
        <Headline>{props.headline}</Headline>
        <FlexContainer>
          <Fifty>
            <img src={Graphic} alt="co2 saved by eloop carsharing" loading="lazy"/>
          </Fifty>
          <FiftyText>
            {loading ? <div>loading...</div> : <div>{RenderTo()}</div>}
            <Paragraph>{props.description}</Paragraph>
            <Features>
              <ListItems style={style1}>
                {loading ? <span>loading...</span> : <span>{earth()}</span>}{' '}
                {props.claim1}
              </ListItems>
              <ListItems style={style2}>
                {props.claim2}{' '}
                {loading ? <span>loading...</span> : <span>{tree()}</span>}{' '}
                {props.trees}
              </ListItems>
              <ListItems style={style3}>
                {props.claim3}{' '}
                {loading ? <span>loading...</span> : <span>{beer()}</span>}{' '}
                {props.beer}
              </ListItems>
            </Features>
          </FiftyText>
        </FlexContainer>
      </Container>
    </Background>
  )
}

export default C02
