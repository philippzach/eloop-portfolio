import React from 'react'
import styled from '@emotion/styled';

const Style = styled.div`
margin: 3% 6%;
`

const Container = ({ children }) => (
    <Style>
    { children }
    </Style>
)

export default Container