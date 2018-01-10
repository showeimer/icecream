import { combineReducers } from 'redux';
import truckReducer from './truckReducer';
import runnerReducer from './runnerReducer';

export default combineReducers({
  trucks: truckReducer,
  runners: runnerReducer
})
