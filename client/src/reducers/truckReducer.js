import { FETCH_TRUCKS } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_TRUCKS:
      console.log('payload is',action.payload)
      return action.payload;
    default:
      return state;
  }
}
