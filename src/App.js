import React from 'react'

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
