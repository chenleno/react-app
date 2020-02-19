import React from 'react'
import Header from './layout/Header'
import SideBar from './layout/Sidebar'
import Dashboard from './modules/dashboard'
import Setting from './modules/setting'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './modules/login'
import _ from 'lodash'

const Content = props => {
  return (
    <div>{props.children}</div>
  )
}

const MainView = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

@connect(({ login }) => ({ profile: login.profile }), null)
class App extends React.Component {
  render() {
    const isLogin = !!_.get(this.props.profile, 'username', '')
    return (
      <React.Fragment>
        {isLogin ? 
        <MainView>
          <Header/>
          <SideBar/>
          <Content>
            <Route activeStyle={{ color: 'red' }} path={'/dashboard'} component={Dashboard}/>
            <Route path={'/setting'} component={Setting}/>
          </Content>
        </MainView> :
        <Login />
        }
      </React.Fragment>
      
    )
  }
}

export default App
