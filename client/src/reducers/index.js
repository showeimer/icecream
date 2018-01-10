import { combineReducers } from 'redux';
import truckReducer from './truckReducer';

export default combineReducers({
  trucks: truckReducer
})
