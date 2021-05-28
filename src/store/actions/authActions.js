function signIn(credentials) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => dispatch({ type: 'LOGIN_SUCCESS' }))
      .catch((err) => dispatch({ type: 'LOGIN_ERROR', payload: err }))
  }
}

function signOut() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: 'LOGOUT_SUCCESS' }))
  }
}

function signUp(newUser) {
  const { email, password, firstName, lastName } = newUser
  const initials = (firstName[0] + lastName[0]).toUpperCase()

  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)

      await firestore.collection('users').doc(response.user.uid).set({
        firstName,
        lastName,
        initials,
      })

      dispatch({ type: 'SIGNUP_SUCCESS' })
    } catch (error) {
      dispatch({ type: 'SIGNUP_ERROR', error })
    }
  }
}

export { signIn, signOut, signUp }
