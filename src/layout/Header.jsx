import React from 'react'
import styled from 'styled-components'

const HeaderWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #ccc;
`

const Header = props => {
  return (
    <HeaderWrap>header</HeaderWrap>
  )
}

export default Header
