import { FETCH_RUNNERS } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_RUNNERS:
      return action.payload;
    default:
      return state;
  }
}
