import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Button, Avatar } from 'antd'
import { logout } from 'reducers/login'
// import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


const HeaderWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #ccc;
`
const StyledProfile = styled.div`
  flex: 1;
  background-image: url('../../public/logo192.png');
`
const ActionBar = styled.div`
`

const Header = props => {
  const history = useHistory()
  const logout = async () => {
    await props.logout()
    history.push('/login')
  }
  return (
    <HeaderWrap>
      <StyledProfile>
        <Avatar src={require('../images/logo192.png')}/>
        我是hhh
      </StyledProfile>
      <ActionBar>
        <Button onClick={() => logout()}>
          退出登录
        </Button>
      </ActionBar>
    </HeaderWrap>
  )
}

export default connect(null, { logout })(Header)
