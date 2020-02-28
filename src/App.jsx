import React from 'react'
import Header from './layout/Header'
import SideBar from './layout/Sidebar'
import Dashboard from './modules/dashboard'
import Setting from './modules/setting'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from './modules/login'
import _ from 'lodash'
import * as actionCreaters from 'reducers/actions'
import storage from 'utils/helper/storage'
import styled from 'styled-components'
// import View from 'compontents/View'

const Content = props => {
  return (
    <div>{props.children}</div>
  )
}

const MainView = styled.div`
  
`

const MainContent = styled.div`
  display: flex;
  .sidebar {
    width: 350px;
  }
  .content {
    flex: 1;
  }
`

@connect(({ login }) => ({ profile: login.profile }))
class App extends React.Component {
  constructor(props) {
    super(props)
    const { dispatch } = this.props
    this.boundActionCreators = bindActionCreators(actionCreaters, dispatch)
  }
  render() {
    const isLogin = !!storage.getItem('profile')
    return (
      <React.Fragment>
        {isLogin ? 
        <MainView >
          <Header class/>
          <MainContent>
            <SideBar className='sidebar'/>
            <Content className='content'>
              <Route activeStyle={{ color: 'red' }} path={'/dashboard'} component={Dashboard}/>
              <Route path={'/setting'} component={Setting}/>
            </Content>
          </MainContent>
        </MainView> :
        <Login {...this.boundActionCreators}/>
        }
      </React.Fragment>
    )
  }
}

export default App
