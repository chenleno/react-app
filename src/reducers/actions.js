export const login = values => {
  return {
    type: 'LOGIN',
    data: values
  }
}

export const logout = values => {
  return {
    type: 'LOGOUT',
    data: values
  }
}
