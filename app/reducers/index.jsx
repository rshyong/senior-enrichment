import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  campus: require('./campus').default,
  students: require('./students').default
})

export default rootReducer;
