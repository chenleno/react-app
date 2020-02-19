import { combineReducers } from 'redux'
import login from './login'
import dashboard from './dashboard'

const rootReducers = combineReducers({
  login,
  dashboard
})

export default rootReducers

