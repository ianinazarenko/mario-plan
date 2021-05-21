import { createStore, combineReducers, applyMiddleware } from 'redux'
import authReducer from './reducers/authReducer'
import projectReducer from './reducers/projectReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
