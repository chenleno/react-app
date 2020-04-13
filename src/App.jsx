import React from 'react'
import routerMap, { routerMapByName } from './routers'
import Header from './layout/Header'
import SideBar from './layout/Sidebar'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from './modules/login'
import _ from 'lodash'
import * as actionCreaters from 'reducers/actions'
import { storage } from '@lenochen/dio'
import styled from 'styled-components'
import NotFoundPage from './modules/404page'

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

@connect(({ login }) => ({ login }))
class App extends React.Component {
  get isLogin() {
    return this.props.login.isLogin || storage.getItem('profile')
  }

  renderRoutes() {
    return (
      routerMap.map((item, index) => (
        <Route key={index} path={item.path} exact render={props => {
            return <item.component {...props}/>
          }
        }/>
      ))
    )
  }
  render() {
    return (
      <React.Fragment>
        {this.isLogin ?
          <MainView >
            <Header class/>
            <MainContent>
              <SideBar className='sidebar'/>
              <Content className='content'>
                <Switch>
                  {this.renderRoutes()}
                  {/* <Redirect path={'/'} to={'/dashboard'}/> */}
                  <Route path={'/'} exact component={routerMapByName['dashboard'].component}/>
                  <Route path={'*'} component={NotFoundPage}/>
                </Switch>
              </Content>
            </MainContent>
          </MainView> 
        : <Redirect to={{ pathname: '/login', from: this.props.location }} component={Login} />}
      </React.Fragment>
    )
  }
}

export default App
