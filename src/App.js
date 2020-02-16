import React from 'react'
import Header from './layout/Header'
import SideBar from './layout/Sidebar'

const MainView = props => {
  return (
    <div>
      {props.children}
    </div>
  )
}

const Content = props => {
  return (
    <div>content</div>
  )
}

class App extends React.Component {
  render() {
    return (
      <MainView>
        <Header/>
        <SideBar/>
        <Content/>
      </MainView>
    )
  }
}

export default App
