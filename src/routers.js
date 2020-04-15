import React from 'react'
import _ from 'lodash'
// import Dashboard from './modules/dashboard'
// import Setting from './modules/setting'
// import User from './modules/users'
// import UserDetail from './modules/users/pages/detail'
import { AsyncComponent } from 'components'

const Dashboard = AsyncComponent(() => import('./modules/dashboard'))
const Setting = AsyncComponent(() => import('./modules/setting'))
const User = AsyncComponent(() => import('./modules/users'))
const UserDetail = AsyncComponent(() => import('./modules/users/pages/detail'))

// const Dashboard = React.lazy(() => import('./modules/dashboard'))
// const Setting = React.lazy(() => import('./modules/setting'))
// const User = React.lazy(() => import('./modules/users'))
// const UserDetail = React.lazy(() => import('./modules/users/pages/detail'))

const routerMap = [
  { name: 'dashboard', path: '/dashboard', component: Dashboard},
  { name: 'setting', path: '/setting', component: Setting},
  { name: 'user', path: '/user', component: User, 
    childRoutes: [
      { name: 'userDetail', path: '/user/detail/:id', component: UserDetail }
    ]
  },
]

// const routerMap = [
//   { name: 'dashboard', path: '/dashboard', component: Dashboard, auth: true},
//   { name: 'setting', path: '/setting', component: Setting, auth: true},
//   { name: 'user', path: '/user', component: User, auth: true, 
//     childRoutes: [
//       { name: 'userDetail', path: '/user/detail/:id', component: UserDetail, auth: true }
//     ]
//   },
// ]

export const routerMapByName = _.keyBy(routerMap, 'name')
export default routerMap
