import React from 'react'
import styled from '@emotion/styled'

const Style = styled.div`
@media (min-width: 1800px){ 
    margin: 0 15%;
}
`

const BigScreenContainer = ({ children }) => (
    <Style>
    { children }
    </Style>
)

export default BigScreenContainer