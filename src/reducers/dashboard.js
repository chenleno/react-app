import reducerRegistry from 'utils/reducerRegistry'
const initState = {}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...initState,
        dashboard: action.data || []
      }
    default:
      return initState
  }
}

export default reducer

export const test = () => ({
  type: 'TEST'
})

reducerRegistry.register('dashboard', reducer)