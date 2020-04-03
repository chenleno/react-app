// import storage from 'utils/helper/storage'
import { storage, uniq } from '@lenochen/dio'

const initState = {
  profile: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      storage.setItem('profile', action.data)
      return {
        ...initState,
        profile: action.data
      }
    default:
      return initState
  }
}

