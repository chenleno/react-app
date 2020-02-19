

const initState = {
  profile: {}
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...initState,
        profile: action.data
      }
    default:
      return initState
  }
}

