import React from 'react'
import styled from '@emotion/styled';

const Style = styled.div`
margin: 6% 6%;
@media (min-width: 1800px) {
    margin: 6% 16%;
}
@media (min-width: 2200px) {
    margin: 6% 20%;
}
`

const Container = ({ children }) => (
    <Style>
    { children }
    </Style>
)

export default Container