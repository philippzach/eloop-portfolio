import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const AQContainer = styled.div`
  background-color: ${props => props.bg};
  padding: 2em;
`
const api_url = 'https://api-endpoint.eloop.at/infos'

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
    if (data.drivenTotal) {
      console.log(data)
      return (
        <p>
          {data.drivenTotal * 3}tons CO<sub>2</sub> saved with Eloop Cars
        </p>
      )
    } else return 'Data not available'
  }
  return (
    <div>
      <p>
        Saved CO<sub>2</sub> by ELOOP Cars in vienna:
      </p>

      {loading ? <div>loading...</div> : <div>{RenderTo()}</div>}
    </div>
  )
}

export default Airquality
