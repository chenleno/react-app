// import storage from 'utils/helper/storage'
import { storage } from '@lenochen/dio'
import Api from 'conf/APIS'

const initState = {
  profile: {},
  isLogin: false
}

export default (state = initState, action) => {
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

export const login = values => ({
  type: 'LOGIN',
  promise: client => client.get(Api, { ...values }),
  args: values
})

export const logout = () => ({
  type: 'LOGOUT',
  promise: client => client.get(Api)
})
