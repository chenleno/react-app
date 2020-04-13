import $axios from 'axios'

const httpMiddleware = ({ dispatch, getState}) => {
  return next => action => {
    if (!action) {
      return Promise.resolve()
    }
    const { promise, type, args } = action
    if (typeof promise !== 'function') {
      return next(action)
    }
    return promise($axios).then(({ data }) => {
      dispatch({ type, data, args })
      return Promise.resolve(data)
    }).catch(error => {
      
      return Promise.reject(error)
    })
  }
}

export default httpMiddleware
