import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from 'reducers/index'
import thunk from 'redux-thunk'
import httpMiddleware from 'utils/httpMiddleware'

const middlewares = [
  thunk,
  httpMiddleware
]

const store = createStore(rootReducers,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // chrome redux监视插件开启代码
  )
)
export default store
