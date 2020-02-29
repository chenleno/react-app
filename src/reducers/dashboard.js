
const initState = {
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...initState,
        dashboard: action.data
      }
    default:
      return initState
  }
}
