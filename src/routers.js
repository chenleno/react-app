import _ from 'lodash'
import Dashboard from './modules/dashboard'
import Setting from './modules/setting'
import Login from './modules/login'
import User from './modules/users'
import UserDetail from './modules/users/pages/detail'

const routerMap = [
  // { name: 'login', path: '/login', component: Login},
  { name: 'dashboard', path: '/dashboard', component: Dashboard, auth: true},
  { name: 'setting', path: '/setting', component: Setting, auth: true},
  { name: 'user', path: '/user', component: User, auth: true, 
    childRoutes: [
      { name: 'userDetail', path: '/user/detail/:id', component: UserDetail, auth: true}
    ]
  },
]

export const routerMapByName = _.keyBy(routerMap, 'name')
export default routerMap
