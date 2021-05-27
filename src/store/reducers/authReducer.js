function authReducer(
  state = {
    uathError: null,
  },
  action
) {
  if (action.type === 'LOGIN_SUCCESS') {
    console.log('login success')
    return { ...state, authError: null }
  }
  if (action.type === 'LOGIN_ERROR') {
    console.log('login error')
    return { ...state, authError: 'Login failed' }
  }
  if (action.type === 'LOGOUT_SUCCESS') {
    console.log('logout success')
    return state
  }

  return state
}

export default authReducer
