import axios from 'axios';
import { FETCH_TRUCKS, FETCH_RUNNERS } from './types';

export const fetchTrucks = () => async dispatch => {
  const res = await axios.get('/api/trucks');
  dispatch({ type: FETCH_TRUCKS, payload: res.data });
}

export const fetchRunners = () => async dispatch => {
  const res = await axios.get('/api/runners');
  dispatch({ type: FETCH_RUNNERS, payload: res.data });
}
