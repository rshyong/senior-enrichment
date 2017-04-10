import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  campus: require('./campus').default
})

export default rootReducer;
