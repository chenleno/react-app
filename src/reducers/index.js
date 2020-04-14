import { combineReducers } from 'redux'
import login from './login'
import dashboard from './dashboard'
import user from './user'

const rootReducers = combineReducers({
  login,
  dashboard,
  user
})

export default rootReducers

