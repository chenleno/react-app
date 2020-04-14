import React from 'react'
import { Menu, Icon } from 'antd'
// import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import routeMap from '../routers'

const { SubMenu } = Menu

const Sidebar = props => {
  const history = useHistory()
  const handleClick = e => console.log('click ', e)
  return (
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['5']}
        defaultOpenKeys={['sub2']}
        mode="inline"
      >
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          {routeMap.map((item, index) => (
            <Menu.Item key={index} 
              onClick={() => history.push(item.path)}
            >
              {item.name}
            </Menu.Item>
          ))}
          {/* <Menu.Item onClick={() => history.push('/dashboard')} key="5">dashboard</Menu.Item>
          <Menu.Item onClick={() => history.push('/setting')} key="6">setting</Menu.Item> */}
        </SubMenu>
      </Menu>
  )
}

export default Sidebar
