import { createStore } from 'redux'
import rootReducers from 'reducers/index'

const store = createStore(rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // chrome redux监视插件开启代码
  )

export default store
