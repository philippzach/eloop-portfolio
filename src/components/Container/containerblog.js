import React from 'react'
import styled from '@emotion/styled';

const Style = styled.div`
margin: 0% 7%;
@media (max-width: 600px) {
    margin: 0% 5% 0% 12%;  
}
@media (min-width: 1800px) {
    margin: 0 16%;
}
@media (min-width: 2200px) {
    margin: 0 20%;
}
`

const Container = ({ children }) => (
    <Style>
    { children }
    </Style>
)

export default Container
    
