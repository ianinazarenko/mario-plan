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
  return state
}

export default authReducer
