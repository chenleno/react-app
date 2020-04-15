import React from 'react'
import routerMap, { routerMapByName } from './routers'
import Header from './layout/Header'
import SideBar from './layout/Sidebar'
import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './modules/login'
import _ from 'lodash'
import { storage } from '@lenochen/dio'
import styled from 'styled-components'
import NotFoundPage from './modules/404page'
import { View } from 'components'

const Content = styled(View)`
  flex: 1;
`
const MainView = styled.div`
  
`

const MainContent = styled.div`
  display: flex;
  .sidebar {
    width: 350px;
  }
`

const getRoutes = routes => {
  let routesArr = []
  routes.forEach(r => {
    if (r.childRoutes) {
      routesArr = routesArr.concat(getRoutes(r.childRoutes))
    }
    routesArr.push(r)
  })
  return routesArr
}

@connect(({ login }) => ({ login }))
class App extends React.Component {
  get isLogin() {
    return this.props.login.isLogin || storage.getItem('profile')
  }

  renderRoutes() {
    const routes = getRoutes(routerMap)
    return (
      routes.map((item, index) => (
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
              <Content>
                <Switch>
                  {this.renderRoutes()}
                  {/* <Redirect path={'/'} to={'/dashboard'}/> */}
                  <Route path={'/'} exact component={routerMapByName['dashboard'].component}/>
                  <Route path={'*'} component={NotFoundPage}/>
                </Switch>
              </Content>
            </MainContent>
          </MainView> 
        : 
        <React.Fragment>
          <Route path={'/login'} component={Login}/>
          <Redirect to={{ pathname: '/login', from: this.props.location }} />
        </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

export default App
