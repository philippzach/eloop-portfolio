import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const AQContainer = styled.div`
  background-color: ${props => props.bg};
  padding: 2em;
`
const api_url =
  'https://api.waqi.info/feed/vienna/?token=b7d6b8960a32ebecabe00cf30ad98bdacf5f03e9'

const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    const response = await fetch(url)
    const data = await response.json()
    const items = data
    setData(items)
    setLoading(false)
  }, [])
  return { data, loading }
}

function Airquality() {
  const { data, loading } = useFetch(api_url)
  function RenderTo() {
    if (data.data.aqi < 50) {
      return (
        <AQContainer bg="green">
          {data.data.aqi} PM<sub>2.5</sub>
        </AQContainer>
      )
    } else if (data.data.aqi > 51 && data.data.aqi < 100) {
      return (
        <AQContainer bg="yellow">
          {data.data.aqi} PM<sub>2.5</sub>
        </AQContainer>
      )
    } else if (data.data.aqi > 101 && data.data.aqi < 500) {
      return (
        <AQContainer bg="red">
          {data.data.aqi} PM<sub>2.5</sub>
        </AQContainer>
      )
    } else return 'Data not available'
  }
  return (
    <div>
      <p>This is the air pollution data of vienna:</p>

      {loading ? <div>loading...</div> : <div>{RenderTo()}</div>}
    </div>
  )
}

export default Airquality
