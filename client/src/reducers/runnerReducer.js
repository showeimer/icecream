import { FETCH_RUNNERS } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_RUNNERS:
      console.log('payload is',action.payload)
      return action.payload;
    default:
      return state;
  }
}
