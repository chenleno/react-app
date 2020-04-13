import _ from 'lodash'
import Dashboard from './modules/dashboard'
import Setting from './modules/setting'

const routerMap = [
  { name: 'dashboard', path: '/dashboard', component: Dashboard},
  { name: 'setting', path: '/setting', component: Setting, auth: true}
]

export const routerMapByName = _.keyBy(routerMap, 'name')
export default routerMap
