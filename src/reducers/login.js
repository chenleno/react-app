// import storage from 'utils/helper/storage'
import { storage } from '@lenochen/dio'
import reducerRegistry from 'utils/reducerRegistry'

import Api from 'conf/APIS'

const initState = {
  profile: {},
  isLogin: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      storage.setItem('profile', action.data)
      return {
        ...initState,
        profile: action.data,
        isLogin: true
      }
    case 'LOGOUT':
      localStorage.clear()
      return initState
    default:
      return initState
  }
}

export default reducer

export const login = values => ({
  type: 'LOGIN',
  promise: client => client.get(Api, { ...values }),
  args: values
})

export const logout = () => ({
  type: 'LOGOUT',
  promise: client => client.get(Api)
})

reducerRegistry.register('login', reducer)
