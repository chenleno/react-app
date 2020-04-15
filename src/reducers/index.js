import { combineReducers } from 'redux'
import reducerRegistry from 'utils/reducerRegistry'
// import login from './login'
// import dashboard from './dashboard'
// import user from './user'

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

reducerRegistry.setChangeListener(reducers => {
  store.replaceReducer(combine(reducers));
});

// const rootReducers = combineReducers({
//   login,
//   dashboard,
//   user
// })

export default rootReducers

