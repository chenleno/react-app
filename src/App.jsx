import React from 'react'
import Header from './layout/Header'
import SideBar from './layout/Sidebar'
import Dashboard from './modules/dashboard'
import Setting from './modules/setting'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

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

class App extends React.Component {
  render() {
    return (
      <MainView>
        <Header/>
        <SideBar/>
        <Content>
          <Route activeStyle={{ color: 'red' }} path={'/dashboard'} component={Dashboard}/>
          <Route path={'/setting'} component={Setting}/>
        </Content>
      </MainView>
    )
  }
}

export default App
