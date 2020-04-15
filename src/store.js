import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux'
import reducerRegistry from 'utils/reducerRegistry'
// import rootReducers from 'reducers/index'
import thunk from 'redux-thunk'
import httpMiddleware from 'utils/httpMiddleware'

const middlewares = [
  thunk,
  httpMiddleware
]

const initialState = {}

const combine = reducers => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach(item => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state;
    }
  });
  return combineReducers(reducers);
};

const rootReducers = combine(reducerRegistry.getReducers());

const store = createStore(rootReducers, 
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // chrome redux监视插件开启代码
  )
  );

reducerRegistry.setChangeListener(reducers => {
  store.replaceReducer(combine(reducers));
});


// const store = createStore(rootReducers,
//   compose(
//     applyMiddleware(...middlewares),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // chrome redux监视插件开启代码
//   )
// )
export default store
