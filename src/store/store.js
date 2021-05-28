import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import authReducer from './reducers/authReducer'
import projectReducer from './reducers/projectReducer'
import thunk from 'redux-thunk'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'data/init'

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}

const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
})

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, rrfConfig)
  )
)

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

export default store
